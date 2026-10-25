#!/usr/bin/env node
/**
 * The app's boundary rule, applied to the site: authored styles reference tokens, never colours.
 *
 * `src/styles/tokens.css` is generated from the design system and is the only stylesheet allowed to
 * contain a colour literal; the same goes for `public/favicon.svg`, which has to be readable on its
 * own. Everything else — the global sheet and every component's scoped `<style>` block — must express
 * colour as a `var(--hm-*)` role, so the page cannot quietly invent an off-system hue.
 */
import { readFileSync, readdirSync, statSync } from "node:fs";
import { dirname, join, relative, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const repoRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const ALLOWED = ["src/styles/tokens.css", "public/favicon.svg"];
const OFF_SYSTEM = /#[0-9a-fA-F]{3,8}\b|\brgba?\s*\(|\bhsla?\s*\(|\bhwb?\s*\(|\bcolor-mix\s*\(/;

const files = walk(join(repoRoot, "src"))
  .filter((file) => /\.(css|astro)$/.test(file))
  .map((file) => relative(repoRoot, file))
  .filter((file) => !ALLOWED.includes(file));

const problems = [];

for (const file of files) {
  const source = readFileSync(resolve(repoRoot, file), "utf8");
  // For .astro files only the style block is authored presentation; markup and scripts are exempt.
  const blocks = file.endsWith(".astro") ? extractStyleBlocks(source) : [source];
  blocks.forEach((block) => {
    block.split("\n").forEach((line, index) => {
      if (OFF_SYSTEM.test(line) && !line.includes("token-exempt")) {
        problems.push(`${file}:${index + 1}  ${line.trim()}`);
      }
    });
  });
}

if (problems.length > 0) {
  process.stderr.write(
    "styles: colour literals found in authored styles — use a var(--hm-*) role instead.\n" +
      problems.map((problem) => `  ${problem}\n`).join("") +
      "  If a literal is genuinely unavoidable, add /* token-exempt */ and say why in the pull request.\n",
  );
  process.exit(1);
}

process.stdout.write(`styles: ${files.length} authored files use design-system tokens only\n`);

/** Every file under `dir`, so the check does not depend on the repository being initialised. */
function walk(dir) {
  const found = [];
  for (const entry of readdirSync(dir)) {
    const path = join(dir, entry);
    if (statSync(path).isDirectory()) found.push(...walk(path));
    else found.push(path);
  }
  return found;
}

function extractStyleBlocks(source) {
  const blocks = [];
  const pattern = /<style(?:\s[^>]*)?>([\s\S]*?)<\/style>/g;
  for (let match = pattern.exec(source); match; match = pattern.exec(source)) {
    blocks.push(match[1] ?? "");
  }
  return blocks;
}
