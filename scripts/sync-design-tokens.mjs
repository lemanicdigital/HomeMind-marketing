#!/usr/bin/env node
/**
 * Vendored snapshot of the HomeMind design system.
 *
 * The marketing site is not a React Native app, so it cannot import `src/design-system`. What it can
 * do is derive its stylesheet from the *documented* tokens. Two files are produced, by the same
 * command, from one source:
 *
 *   vendor/design-system/tokens.md   a verbatim copy of the design system's token document
 *   src/styles/tokens.css            the stylesheet generated from that document
 *
 * Why the copy exists: this repository's CI cannot read the private HomeMind-IOS repository, so a
 * check that depends on that checkout would have to skip — and "skipped" is not "verified". The
 * committed copy is what CI verifies against, and it is refreshed only by this script, never typed.
 *
 *   npm run tokens:sync    regenerate both files (needs a HomeMind-IOS checkout)
 *   npm run tokens:check   fail if src/styles/tokens.css no longer matches the vendored document
 *
 * The checkout is found at `../HomeMind-IOS` by default; override with `--source <path>` or
 * `HOMEMIND_DESIGN_SYSTEM_PATH`.
 */
import { createHash } from "node:crypto";
import { execFileSync } from "node:child_process";
import { copyFileSync, existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const repoRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const cssPath = join(repoRoot, "src/styles/tokens.css");
const vendorPath = join(repoRoot, "vendor/design-system/tokens.md");

const args = process.argv.slice(2);
const checkOnly = args.includes("--check");
const sourceFlag = args.indexOf("--source");
const sourceRoot = resolve(
  sourceFlag === -1
    ? (process.env.HOMEMIND_DESIGN_SYSTEM_PATH ?? join(repoRoot, "../HomeMind-IOS"))
    : args[sourceFlag + 1],
);
const checkoutDoc = join(sourceRoot, "docs/design-system/tokens.md");

// The helpers are function declarations, not `const` arrows: main() runs at the top of the module,
// and an arrow bound with const would still be in its temporal dead zone while the tables parse.
main();

function main() {
  const fromCheckout = existsSync(checkoutDoc);
  const fromVendor = existsSync(vendorPath);

  if (!fromCheckout && !fromVendor) {
    fail(
      `no source to work from: no HomeMind-IOS checkout at ${sourceRoot} and no ` +
        "vendor/design-system/tokens.md in this repository. Restore the vendor copy with " +
        "`npm run tokens:sync` from a machine that can read both repositories.",
    );
  }

  const doc = readFileSync(fromCheckout ? checkoutDoc : vendorPath, "utf8");
  const parsed = parse(doc);

  if (checkOnly) {
    // The stylesheet must match the document it claims to come from. Comments are excluded from the
    // comparison so that a provenance line (commit, hash, or "vendored copy") is not a diff.
    const committed = existsSync(cssPath) ? readFileSync(cssPath, "utf8") : "";
    const rendered = renderCss(parsed, provenanceOf(doc, fromCheckout));
    if (squash(stripComments(committed)) !== squash(stripComments(rendered))) {
      fail(
        `src/styles/tokens.css has DRIFTED from ${fromCheckout ? "the design-system document" : "vendor/design-system/tokens.md"}.\n` +
          "        Run `npm run tokens:sync` and commit the regenerated files.",
      );
    }
    if (fromCheckout && fromVendor && doc !== readFileSync(vendorPath, "utf8")) {
      fail(
        "vendor/design-system/tokens.md is older than docs/design-system/tokens.md in HomeMind-IOS.\n" +
          "        Run `npm run tokens:sync` and commit the regenerated files.",
      );
    }
    process.stdout.write(
      `tokens: src/styles/tokens.css matches ${fromCheckout ? "the design-system document" : "the vendored document"}\n`,
    );
    return;
  }

  if (!fromCheckout) {
    process.stdout.write(
      `tokens: SKIPPED — no HomeMind-IOS checkout at ${sourceRoot}\n` +
        "        nothing was regenerated; src/styles/tokens.css and the vendor copy are unchanged.\n" +
        "        pass --source <path> or set HOMEMIND_DESIGN_SYSTEM_PATH to refresh from the app.\n",
    );
    return;
  }

  mkdirSync(dirname(vendorPath), { recursive: true });
  copyFileSync(checkoutDoc, vendorPath);
  writeFileSync(cssPath, renderCss(parsed, provenanceOf(doc, true)));
  process.stdout.write(
    `tokens: wrote src/styles/tokens.css and vendor/design-system/tokens.md ` +
      `(${parsed.colours.length} colour roles, ${parsed.type.length} type roles, ${parsed.spacing.length} spacing aliases)\n`,
  );
}

/** The tables the design system documents; the rest of the file is prose and is ignored. */
function parse(doc) {
  const colours = parseTable(doc, ["Role", "Light", "Dark"]);
  const type = parseTable(doc, [
    "Role",
    "Size / line height",
    "Weight",
    "Tracking",
    "Growth ceiling",
  ]);
  const spacing = parseTable(doc, ["Alias", "Value", "Use"]);

  if (colours.length < 50) fail(`expected the ~75-role colour table, read ${colours.length} rows`);
  if (type.length < 18) fail(`expected 18 typography roles, read ${type.length}`);
  if (spacing.length < 8) fail(`expected the spacing alias table, read ${spacing.length}`);

  return { colours, type, spacing };
}

/**
 * Provenance for the header. A direct sync records the app repository's commit; a regeneration from
 * the vendor copy names that copy, so the history survives CI.
 */
function provenanceOf(doc, fromCheckout) {
  const digest = createHash("sha256").update(doc).digest("hex").slice(0, 12);
  if (fromCheckout) {
    const commit = git(["rev-parse", "--short", "HEAD"]) ?? "unknown commit";
    return `docs/design-system/tokens.md in HomeMind-IOS at ${commit}, sha256/${digest}`;
  }
  return `vendor/design-system/tokens.md (a copy of docs/design-system/tokens.md in HomeMind-IOS), sha256/${digest}`;
}

function renderCss({ colours, type, spacing }, provenance) {
  const colourBlock = colours.map(([role, light]) => `  --hm-${kebab(role)}: ${light};`).join("\n");
  const dark = colours.map(([role, , value]) => `  --hm-${kebab(role)}: ${value};`).join("\n");

  const typeBlock = type
    .map(([role, sizeLine, weight, tracking, ceiling]) => {
      const [size, lineHeight] = sizeLine.split("/").map((part) => part.trim());
      const name = `--hm-type-${kebab(role)}`;
      return [
        `  /* ${role}: ${size}/${lineHeight} ${weight}, tracking ${tracking}, growth ceiling ${ceiling} */`,
        `  ${name}-size: ${size}px;`,
        `  ${name}-line: ${lineHeight}px;`,
        `  ${name}-weight: ${weight};`,
        `  ${name}-tracking: ${tracking}px;`,
        `  ${name}-ceiling: ${ceiling.replace("×", "")};`,
      ].join("\n");
    })
    .join("\n");

  const spacingBlock = spacing
    .map(([alias, value]) => `  --hm-space-${kebab(alias)}: ${value}px;`)
    .join("\n");

  return `/*
 * GENERATED — do not edit by hand.
 *
 * Produced by \`scripts/sync-design-tokens.mjs\` from ${provenance}.
 *
 * The identity lives in the HomeMind-IOS design system. This is a copy of what is documented there,
 * never a place to invent values: change the design system, run \`npm run tokens:sync\`, commit both
 * this file and vendor/design-system/tokens.md.
 */

:root {
  /* Colour roles, light appearance. */
${colourBlock}

  /* Typography roles: size / line height / weight / tracking, plus the documented growth ceiling. */
${typeBlock}

  /* Spacing aliases. */
${spacingBlock}

  /* Documented statics: shape, touch target, measure. */
  --hm-radius-card: 16px;
  --hm-radius-field: 12px;
  --hm-radius-sheet: 20px;
  --hm-radius-pill: 9999px;
  --hm-border-hairline: 1px;
  --hm-touch-target: 44px;
  --hm-gutter: 20px;
  --hm-measure: 68ch;

  /* Motion: the system's rule is "restrained, and off when asked". */
  --hm-duration: 200ms;
  --hm-ease-out: cubic-bezier(0, 0, 0.2, 1);

  color-scheme: light dark;
}

/* Dark appearance uses the theme's documented dark roles. */
@media (prefers-color-scheme: dark) {
:root {
${dark}
}
}

@media (prefers-reduced-motion: reduce) {
  :root {
    --hm-duration: 0ms;
  }
}
`;
}

function parseTable(doc, header) {
  const lines = doc.split("\n");
  for (let i = 0; i < lines.length; i += 1) {
    if (!sameRow(lines[i], header)) continue;
    const rows = [];
    for (let j = i + 1; j < lines.length; j += 1) {
      const cells = splitRow(lines[j]);
      if (cells.length === 0) break;
      if (cells.every((cell) => /^-+$/.test(cell))) continue;
      rows.push(header.map((_, index) => clean(cells[index] ?? "")));
    }
    return rows;
  }
  return [];
}

function sameRow(line, header) {
  const cells = splitRow(line).map((cell) => clean(cell).toLowerCase());
  return (
    cells.length === header.length && header.every((cell, i) => cells[i] === cell.toLowerCase())
  );
}

function splitRow(line) {
  const trimmed = line.trim();
  if (!trimmed.startsWith("|")) return [];
  return trimmed
    .replace(/^\|/, "")
    .replace(/\|$/, "")
    .split("|")
    .map((cell) => cell.trim());
}

function stripComments(text) {
  return text.replace(/\/\*[\s\S]*?\*\//g, "");
}

function clean(cell) {
  return cell.replace(/`/g, "").trim();
}

function squash(text) {
  return text.replace(/\s+/g, " ").trim();
}

function kebab(value) {
  return value
    .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
    .replace(/\s+/g, "-")
    .toLowerCase();
}

function git(argv) {
  try {
    return execFileSync("git", argv, { cwd: sourceRoot, encoding: "utf8" }).trim();
  } catch {
    return undefined;
  }
}

function fail(message) {
  process.stderr.write(`tokens: ${message}\n`);
  process.exit(1);
}
