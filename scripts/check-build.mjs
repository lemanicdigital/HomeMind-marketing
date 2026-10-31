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

// Every page the site publishes. Checks below run on all of them, so a new page is covered by
// adding it here (and to PAGES in src/site.ts, which feeds the sitemap).
const pages = ["index.html", "404.html", "privacy/index.html", "support/index.html"];

for (const page of pages) {
  if (!existsSync(join(dist, page))) {
    fail(`dist/${page} is missing (GitHub Pages needs 404.html at the root).`);
  }
}

for (const file of ["robots.txt", "sitemap.xml", "og.png", "favicon.svg", ".nojekyll"]) {
  if (!existsSync(join(dist, file))) fail(`dist/${file} is missing.`);
}

const cssFiles = existsSync(join(dist, "_astro"))
  ? readdirSync(join(dist, "_astro")).filter((f) => f.endsWith(".css"))
  : [];

const docs = new Map(pages.map((page) => [page, read(page)]));
const html = docs.get("index.html");

const one = (label, actual, expected) => {
  if (actual !== expected) fail(`${label}: expected ${expected}, found ${actual}`);
};

for (const [name, doc] of docs) one(`${name} <h1> count`, count(doc, /<h1[\s>]/g), 1);
if (count(html, /<h2[\s>]/g) < 3) fail("index.html should have several <h2> section headings");

for (const [name, doc] of docs) {
  if (!/<html lang="en">/.test(doc)) fail(`${name}: <html> needs an explicit lang`);
  if (!/<title>[^<]+<\/title>/.test(doc)) fail(`${name}: missing a <title>`);
  if (!/name="description" content="[^"]{40,}/.test(doc)) {
    fail(`${name}: the meta description is missing or too thin to be useful`);
  }
  if (!/rel="canonical"/.test(doc)) fail(`${name}: missing a canonical URL`);
  if (!/property="og:image" content="https:\/\/[^"]+\/og\.png"/.test(doc)) {
    fail(`${name}: needs an absolute og:image, or shared links show no picture`);
  }
}

// The privacy claim, enforced. Only *markup and stylesheets* are inspected: the page's prose is
// allowed to contain the words "analytics" or "fetch" — that is not a third-party request.
for (const [name, doc] of docs) {
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

// Links and assets must resolve on every page, including a section of another page
// (/HomeMind-marketing/#faq from the privacy page), or the site is decorative rather than usable.
for (const [name, doc] of docs) {
  for (const [, anchor] of doc.matchAll(/href="#([^"]+)"/g)) {
    if (!idsOf(doc).has(anchor)) fail(`${name}: link to #${anchor} has no matching id`);
  }
  for (const [, ref] of doc.matchAll(/(?:href|src)="(\/[^"]*)"/g)) {
    const [path, fragment] = ref.split("#");
    const local = path.replace(/^\/HomeMind-marketing\/?/, "").replace(/^\/+/, "");
    const file = local === "" || local.endsWith("/") ? `${local}index.html` : local;
    if (!existsSync(join(dist, file))) {
      fail(`${name}: ${ref} does not resolve to a file in dist/`);
      continue;
    }
    if (fragment && !idsOf(docs.get(file) ?? read(file)).has(fragment)) {
      fail(`${name}: ${ref} points at #${fragment}, which ${file} does not have`);
    }
  }
}

const sitemap = read("sitemap.xml");
for (const page of pages.filter((p) => p !== "404.html")) {
  const path = page.replace(/index\.html$/, "");
  if (!sitemap.includes(`/HomeMind-marketing/${path}</loc>`)) {
    fail(`sitemap.xml does not list ${page}`);
  }
}
if (!/^Sitemap: https:\/\/\S+\/sitemap\.xml$/m.test(read("robots.txt"))) {
  fail("robots.txt does not point at the sitemap with an absolute URL");
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
  `build: ${pages.length} pages, ${(bytes / 1024).toFixed(1)} KB HTML + ${(cssBytes / 1024).toFixed(1)} KB CSS, ` +
    "no JavaScript, no external requests, headings/lang/canonical/links/sitemap verified\n",
);

function read(file) {
  return existsSync(join(dist, file)) ? readFileSync(join(dist, file), "utf8") : "";
}

function idsOf(doc) {
  return new Set([...doc.matchAll(/id="([^"]+)"/g)].map((m) => m[1]));
}

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
