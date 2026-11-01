/**
 * Draws public/og.png, the card shown when someone shares a link to the site.
 *
 *     npm run build && node scripts/og.mjs
 *
 * 1200 x 630 (the size iMessage, Slack, WhatsApp and X all crop well). It is a picture of the
 * built page's first screen, taken by a local Chrome or Edge with motion reduced, so the card is
 * always the site's own hero in the site's own colours. Re-run it when the hero changes.
 */
import { execFile } from "node:child_process";
import { promisify } from "node:util";
import { existsSync, mkdtempSync, rmSync } from "node:fs";
import { createServer } from "node:http";
import { readFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { extname, join, resolve } from "node:path";

const DIST = resolve("dist");
const TARGET = resolve("public/og.png");
const BROWSERS = [
  process.env.CHROME,
  "C:/Program Files/Google/Chrome/Application/chrome.exe",
  "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe",
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  "/usr/bin/google-chrome",
  "/usr/bin/chromium",
].filter(Boolean);

const browser = BROWSERS.find((path) => existsSync(path));
if (!browser) throw new Error("og: no Chrome or Edge found; set CHROME to its path");
if (!existsSync(join(DIST, "index.html"))) throw new Error("og: run `npm run build` first");

const TYPES = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css",
  ".svg": "image/svg+xml",
  ".woff2": "font/woff2",
  ".png": "image/png",
};

// Serve dist/ at the root, where the built site expects to live, for the one picture.
const server = createServer(async (request, response) => {
  let path = decodeURIComponent(new URL(request.url, "http://localhost").pathname);
  if (path.endsWith("/")) path += "index.html";
  try {
    const body = await readFile(join(DIST, path));
    response.writeHead(200, { "Content-Type": TYPES[extname(path)] ?? "application/octet-stream" });
    response.end(body);
  } catch {
    response.writeHead(404).end();
  }
});
await new Promise((done) => server.listen(0, "127.0.0.1", done));
const { port } = server.address();

const profile = mkdtempSync(join(tmpdir(), "og-"));
try {
  // Asynchronous on purpose: a synchronous call would block this process, and with it the server
  // the browser is waiting on.
  await promisify(execFile)(
    browser,
    [
      "--headless=new",
      "--hide-scrollbars",
      "--force-prefers-reduced-motion",
      "--force-color-profile=srgb",
      `--user-data-dir=${profile}`,
      "--window-size=1200,630",
      "--virtual-time-budget=4000",
      `--screenshot=${TARGET}`,
      `http://127.0.0.1:${port}/`,
    ],
    { timeout: 60_000 },
  );
  console.log(`og: wrote ${TARGET}`);
} finally {
  server.close();
  rmSync(profile, { recursive: true, force: true });
}
