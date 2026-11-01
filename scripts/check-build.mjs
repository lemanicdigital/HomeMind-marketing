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
// adding it here (and to PATHS in src/pages/sitemap.xml.ts).
const LANGS = ["en", "fr", "de", "it"];
const pages = [
  "404.html",
  ...["index.html", "support/index.html", "privacy/index.html"].flatMap((page) =>
    LANGS.map((lang) => (lang === "en" ? page : `${lang}/${page}`)),
  ),
];
// The language a page is written in, from its folder: fr/support/index.html is French.
const langOf = (page) => (LANGS.includes(page.split("/")[0]) ? page.split("/")[0] : "en");

for (const page of pages) {
  if (!existsSync(join(dist, page))) {
    fail(`dist/${page} is missing (GitHub Pages needs 404.html at the root).`);
  }
}

for (const file of [
  "robots.txt",
  "sitemap.xml",
  "llms.txt",
  "og.png",
  "favicon.svg",
  ".nojekyll",
]) {
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
  const lang = langOf(name);
  if (!new RegExp(`<html lang="${lang}">`).test(doc)) fail(`${name}: <html> needs lang="${lang}"`);
  // Every page but the 404 exists in every language, and must say so.
  if (name !== "404.html") {
    for (const code of [...LANGS, "x-default"]) {
      if (!new RegExp(`rel="alternate" hreflang="${code}"`).test(doc)) {
        fail(`${name}: missing its hreflang="${code}" alternate`);
      }
    }
  }
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
    // JSON-LD is data the browser never runs; any other <script> breaks the no-JavaScript promise.
    if (/^<script[\s>]/i.test(tag) && tag !== '<script type="application/ld+json">') {
      fail(`${name}: ships a <script>`);
    }
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
// (/#faq from the privacy page), or the site is decorative rather than usable.
for (const [name, doc] of docs) {
  for (const [, anchor] of doc.matchAll(/href="#([^"]+)"/g)) {
    if (!idsOf(doc).has(anchor)) fail(`${name}: link to #${anchor} has no matching id`);
  }
  for (const [, ref] of doc.matchAll(/(?:href|src)="(\/[^"]*)"/g)) {
    const [path, fragment] = ref.split("#");
    const local = path.replace(/^\/+/, "");
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

// Structured data (src/schema.ts) must parse and say only what the page says: every price it
// names is on the page, and every URL it names is a page of this site in the page's language.
for (const [name, doc] of docs) {
  const blocks = [...doc.matchAll(/<script type="application\/ld\+json">([^<]*)<\/script>/g)];
  if (name === "404.html") {
    if (blocks.length > 0) fail(`${name}: the 404 page should carry no structured data`);
    continue;
  }
  one(`${name} JSON-LD blocks`, blocks.length, 1);
  let data;
  try {
    data = JSON.parse(blocks[0]?.[1] ?? "");
  } catch {
    fail(`${name}: JSON-LD does not parse`);
    continue;
  }
  if (data["@context"] !== "https://schema.org")
    fail(`${name}: JSON-LD needs the schema.org context`);
  const nodes = data["@graph"] ?? [];
  const text = doc.replace(/<script[\s\S]*?<\/script>/g, "").replace(/<[^>]*>/g, " ");
  const types = nodes.map((node) => node["@type"]);
  const isHome = name === "index.html" || /^[a-z]{2}\/index\.html$/.test(name);
  for (const type of isHome ? ["WebSite", "MobileApplication"] : ["BreadcrumbList"]) {
    if (!types.includes(type)) fail(`${name}: JSON-LD is missing its ${type}`);
  }
  for (const node of nodes) {
    for (const offer of node.offers ?? []) {
      if (offer.price === "0") continue;
      if (!text.includes(offer.price) && !text.includes(offer.price.replace(".", ","))) {
        fail(`${name}: JSON-LD offers ${offer.price}, which the page never shows`);
      }
    }
  }
  const canonical = /rel="canonical" href="([^"]+)"/.exec(doc)?.[1];
  const crumbs = nodes.find((node) => node["@type"] === "BreadcrumbList")?.itemListElement ?? [];
  if (crumbs.length > 0 && crumbs.at(-1).item !== canonical) {
    fail(`${name}: the breadcrumb ends at ${crumbs.at(-1).item}, not the page (${canonical})`);
  }
  const lang = langOf(name);
  // The WebSite node names the whole site, whose root is the English home page.
  for (const [, url] of JSON.stringify(
    nodes.filter((node) => node["@type"] !== "WebSite"),
  ).matchAll(/"(https:\/\/homesky\.app[^"]*)"/g)) {
    const local = url.replace(/^https:\/\/[^/]+\/?/, "").split("#")[0];
    const file = local === "" || local.endsWith("/") ? `${local}index.html` : local;
    if (!existsSync(join(dist, file))) fail(`${name}: JSON-LD names ${url}, which is not a page`);
    if (lang !== "en" && !local.startsWith(`${lang}/`)) {
      fail(`${name}: JSON-LD links ${url}, outside the page's language`);
    }
  }
}

const sitemap = read("sitemap.xml");
for (const page of pages.filter((p) => p !== "404.html")) {
  const path = page.replace(/index\.html$/, "");
  if (!sitemap.includes(`https://homesky.app/${path}</loc>`)) {
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
    "no JavaScript, no external requests, headings/lang/canonical/links/sitemap/JSON-LD verified\n",
);

function read(file) {
  return existsSync(join(dist, file)) ? readFileSync(join(dist, file), "utf8") : "";
}

function idsOf(doc) {
  return new Set([...doc.matchAll(/id="([^"]+)"/g)].map((m) => m[1]));
}

/** `<link>` tags that point at this site's own origin are not third parties. */
function isOwnSite(tag) {
  return /href="https:\/\/homesky\.app\//.test(tag);
}

function fetchedExternals(doc) {
  const found = [];
  for (const tag of [...doc.matchAll(/<[^>]*>/g)].map((m) => m[0])) {
    // Only tags the browser fetches are a request; an <a href> is a link the reader chooses.
    if (!/^<(script|link|img|iframe|source|video|audio|style)[\s>]/i.test(tag)) continue;
    for (const [, url] of tag.matchAll(/(?:href|src)="(https?:\/\/[^"]*)"/g)) {
      if (url.startsWith("https://homesky.app/")) continue;
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
