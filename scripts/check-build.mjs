#!/usr/bin/env node
/**
 * Asserts the promises the page makes about itself.
 *
 * A marketing page that says "no trackers, no third-party requests, no JavaScript" has to prove it,
 * and a page that says "we care about accessibility" should at least have the structure it claims.
 * This reads the built output — not the source — so nothing can hide behind the bundler.
 */
import { existsSync, readFileSync, readdirSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const repoRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const dist = join(repoRoot, "dist");
const failures = [];

if (!existsSync(join(dist, "index.html"))) {
  fail("dist/index.html is missing — run `npm run build` before `npm run verify`.");
}

for (const page of ["index.html", "404.html"]) {
  if (!existsSync(join(dist, page))) {
    fail(`dist/${page} is missing (GitHub Pages needs 404.html at the root).`);
  }
}

for (const file of ["robots.txt", "favicon.svg", ".nojekyll"]) {
  if (!existsSync(join(dist, file))) fail(`dist/${file} is missing.`);
}

const cssFiles = existsSync(join(dist, "_astro"))
  ? readdirSync(join(dist, "_astro")).filter((f) => f.endsWith(".css"))
  : [];

const html = existsSync(join(dist, "index.html"))
  ? readFileSync(join(dist, "index.html"), "utf8")
  : "";
const notFound = existsSync(join(dist, "404.html"))
  ? readFileSync(join(dist, "404.html"), "utf8")
  : "";

const one = (label, actual, expected) => {
  if (actual !== expected) fail(`${label}: expected ${expected}, found ${actual}`);
};

one("index.html <h1> count", count(html, /<h1[\s>]/g), 1);
one("404.html <h1> count", count(notFound, /<h1[\s>]/g), 1);
if (count(html, /<h2[\s>]/g) < 3) fail("index.html should have several <h2> section headings");

for (const [name, doc] of [
  ["index.html", html],
  ["404.html", notFound],
]) {
  if (!/<html lang="en">/.test(doc)) fail(`${name}: <html> needs an explicit lang`);
  if (!/<title>[^<]+<\/title>/.test(doc)) fail(`${name}: missing a <title>`);
  if (name === "index.html" && !/name="description" content="[^"]{40,}/.test(doc)) {
    fail("index.html: the meta description is missing or too thin to be useful");
  }
  if (!/rel="canonical"/.test(doc)) fail(`${name}: missing a canonical URL`);
}

// The privacy claim, enforced. Only *markup and stylesheets* are inspected: the page's prose is
// allowed to contain the words "analytics" or "fetch" — that is not a third-party request.
for (const [name, doc] of [
  ["index.html", html],
  ["404.html", notFound],
]) {
  for (const tag of [...doc.matchAll(/<[^>]*>/g)].map((m) => m[0])) {
    if (/^<script[\s>]/i.test(tag)) fail(`${name}: ships a <script>`);
    if (/^<(iframe|embed|object)[\s>]/i.test(tag)) fail(`${name}: embeds a frame: ${short(tag)}`);
    if (/\son[a-z]+\s*=/i.test(tag)) fail(`${name}: inline event handler in ${short(tag)}`);
    if (/javascript:/i.test(tag)) fail(`${name}: javascript: URL in ${short(tag)}`);
    if (/<(img|source|video|audio)[^>]*src="https?:/i.test(tag)) {
      fail(`${name}: loads a third-party media asset — ${short(tag)}`);
    }
    const loading = /<link[^>]*rel="(preload|prefetch|modulepreload|stylesheet)"/i.exec(tag);
    if (loading && /href="https?:/.test(tag) && !isOwnSite(tag)) {
      fail(`${name}: ${loading[1]}s a resource from another origin — ${short(tag)}`);
    }
  }
  if (/@import[^;]*url\(["']?https?:/i.test(doc)) {
    fail(`${name}: inline CSS imports from another origin`);
  }
  for (const url of fetchedExternals(doc)) fail(`${name}: fetches from another origin — ${url}`);
}

// Third-party fonts are the classic way a "no requests" page quietly starts making one.
for (const file of cssFiles) {
  const css = readFileSync(join(dist, "_astro", file), "utf8");
  for (const [, url] of css.matchAll(/url\(["']?(https?:\/\/[^)"']*)["']?\)/g)) {
    fail(`${file}: pulls ${url} from another origin`);
  }
  if (/@import/.test(css))
    fail(`${file}: uses @import, which can only mean an external stylesheet`);
}

// Anchors and assets must resolve, or the page is decorative rather than usable.
const ids = new Set([...html.matchAll(/id="([^"]+)"/g)].map((m) => m[1]));
for (const [, anchor] of html.matchAll(/href="#([^"]+)"/g)) {
  if (!ids.has(anchor)) fail(`index.html: link to #${anchor} has no matching id`);
}
for (const [, href] of html.matchAll(/(?:href|src)="(\/[^"]*)"/g)) {
  const local = href.replace(/^\/HomeMind-marketing\/?/, "").replace(/^\/+/, "");
  if (local !== "" && !existsSync(join(dist, local))) {
    fail(`index.html: ${href} does not resolve to a file in dist/`);
  }
}

const bytes = new TextEncoder().encode(html).length;
const cssBytes = cssFiles.reduce(
  (total, f) => total + new TextEncoder().encode(readFileSync(join(dist, "_astro", f))).length,
  0,
);
if (bytes > 60_000)
  fail(`index.html is ${(bytes / 1024).toFixed(1)} KB — a one-page site should stay lean`);

if (failures.length > 0) {
  process.stderr.write(`build: ${failures.length} problem(s) in the built site\n`);
  for (const problem of failures) process.stderr.write(`  ✗ ${problem}\n`);
  process.exit(1);
}

process.stdout.write(
  `build: 2 pages, ${(bytes / 1024).toFixed(1)} KB HTML + ${(cssBytes / 1024).toFixed(1)} KB CSS, ` +
    "no JavaScript, no external requests, headings/lang/canonical/anchors verified\n",
);

/** `<link>` tags that point at this site's own GitHub Pages origin are not third parties. */
function isOwnSite(tag) {
  return /href="https?:\/\/[^"]*lemanicdigital\.github\.io\/HomeMind-marketing/.test(tag);
}

function fetchedExternals(doc) {
  const found = [];
  for (const tag of [...doc.matchAll(/<[^>]*>/g)].map((m) => m[0])) {
    // Only tags the browser fetches are a request; an <a href> is a link the reader chooses.
    if (!/^<(script|link|img|iframe|source|video|audio|style)[\s>]/i.test(tag)) continue;
    for (const [, url] of tag.matchAll(/(?:href|src)="(https?:\/\/[^"]*)"/g)) {
      if (url.includes("lemanicdigital.github.io/HomeMind-marketing")) continue;
      found.push(url);
    }
  }
  return found;
}

function count(text, pattern) {
  return [...text.matchAll(pattern)].length;
}

function short(tag) {
  return tag.slice(0, 80);
}

function fail(message) {
  failures.push(message);
}
