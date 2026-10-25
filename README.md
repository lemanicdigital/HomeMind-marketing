# HomeMind — marketing

The public HomeMind website: one landing page, static HTML and CSS, no JavaScript shipped to the
browser, no third-party requests, no analytics, no cookies.

Astro is the build tool (static output), not a runtime: `astro build` emits `dist/` and the browser
downloads one HTML file plus one stylesheet. Nothing in `src/` needs a framework at run time.

## Status of the claims on the page

HomeMind is **in private development**. The site is written so that nothing on it can be read as a
shipped feature: the hero says the product is in development, each capability is described as a design
intent rather than a promise, the design-system section is the one part that is genuinely finished, and
there is deliberately no waitlist form — a static page has nowhere safe to put an email address.

If a claim on the page stops being true, the page is wrong: open a pull request against it.

## Run and build

```bash
npm ci
npm run dev          # http://localhost:4321
npm run build        # → dist/
npm run preview      # serve the built output
npm run verify       # the whole gate, in order:
```

`npm run verify` chains the checks that keep this repository honest, and CI runs exactly it:

| Step                             | What it proves                                                                           |
| -------------------------------- | ---------------------------------------------------------------------------------------- |
| `astro check`                    | the frontmatter and props of every `.astro` file typecheck.                              |
| `prettier --check .`             | formatting — the one style rule enforced by a tool rather than by review.                |
| `scripts/audit-styles.mjs`       | no authored stylesheet contains a colour literal; colour is always a `var(--hm-*)` role. |
| `sync-design-tokens.mjs --check` | `src/styles/tokens.css` still matches the design-system document it was generated from.  |
| `astro build`                    | the static output compiles.                                                              |
| `scripts/check-build.mjs`        | the _built_ page keeps the promises its copy makes — see Promises the build enforces.    |

Node 22 or newer.

## Layout

```
src/pages/index.astro              the page
src/pages/404.astro                served by GitHub Pages for unknown addresses
src/layouts/Page.astro             document shell, metadata, canonical URL
src/components/*.astro             header, hero, purpose, design specimen, status, FAQ, footer
src/styles/tokens.css              GENERATED — vendored design-system tokens (do not edit)
src/styles/global.css              everything else, written against those tokens only
vendor/design-system/tokens.md     GENERATED — verbatim copy of the design-system document
scripts/sync-design-tokens.mjs     regenerate both from a HomeMind-IOS checkout
scripts/audit-styles.mjs           fail if authored CSS contains a colour literal
scripts/check-build.mjs            assert the built page keeps its own promises
astro.config.mjs                   static output, Pages base path
```

## Design tokens

Identity is owned by the design system in **HomeMind-IOS** — this site never defines a colour, a font
size or a spacing value of its own. Both generated files come from one command, against one source:

```bash
npm run tokens:sync   # → src/styles/tokens.css + vendor/design-system/tokens.md
npm run tokens:check  # fails if the stylesheet no longer matches the document it came from
```

- `src/styles/tokens.css` is **generated**, from `docs/design-system/tokens.md` in a HomeMind-IOS
  checkout (default `../HomeMind-IOS`; override with `--source <path>` or
  `HOMEMIND_DESIGN_SYSTEM_PATH`). Its header records the source commit and a content hash. Editing
  values in it by hand is how a second, drifted identity gets born.
- `vendor/design-system/tokens.md` is a **verbatim copy** of that document, written by the same run. It
  exists so this repository's CI can verify the snapshot on its own: CI cannot read the private app
  repository, and a check that has to skip is not a check. So `tokens:check` always compares the
  stylesheet against the committed copy, and when a checkout _is_ reachable it also fails if the
  vendor copy has gone stale relative to `HomeMind-IOS`. `tokens:sync` with no checkout prints
  `SKIPPED` and changes nothing — it never reports an unverified state as in sync.
- Refresh the pair whenever the design system changes, in the same pull request as the change here.
- `npm run lint` is the site's equivalent of the app's ESLint boundary: a raw hex, `rgb()`, `hsl()` or
  `color-mix()` in authored CSS fails the build. Two exemptions are allowed and marked: the generated
  token sheet, and the `theme-color` meta tag (the browser chrome colour cannot read a CSS variable),
  flagged `token-exempt`.

## Promises the build enforces

The copy makes claims; `scripts/check-build.mjs` reads `dist/` — the built output, not the source —
and fails the build if any of them stop being true:

- **no JavaScript**: not one `<script>`, no inline `on*=` handler, no `javascript:` URL;
- **no third-party requests**: no fetched tag, no off-origin `preload`/`prefetch`/`stylesheet`, no
  `@import`, no `url(http…)` in the emitted CSS — which is what "no fonts from a CDN, no analytics, no
  cookies" actually has to mean;
- **structure**: exactly one `<h1>` per page, real `<h2>` section headings, `<html lang>`, a
  non-trivial meta description, a canonical URL, and every `#anchor` link pointing at an id that exists;
- **deployable output**: `index.html`, `404.html`, `robots.txt`, `favicon.svg` and `.nojekyll` in
  `dist/`, and the HTML under 60 KB.

It deliberately inspects tags rather than prose: the page is _allowed_ to contain the word "analytics".

## Deployment

`main` publishes to GitHub Pages through `.github/workflows/deploy.yml`: verify → build → upload
`dist/` → deploy. One settings click is required per repository, because Pages defaults to a `docs/`
folder rather than to Actions: **Settings → Pages → Build and deployment → Source: GitHub Actions**.

The site is configured for a project page (`site: https://lemanicdigital.github.io`,
`base: /HomeMind-marketing`); if it moves to a custom domain, update both in `astro.config.mjs`, adjust
`isOwnSite()` in `scripts/check-build.mjs`, and add `public/CNAME`. There is deliberately **no sitemap
and no RSS feed**: the site is one page plus a 404 that says so.

## Accessibility

Built to the same rules as the product: semantic landmarks, a skip link, one `h1` with a descending
heading order, `prefers-color-scheme` and `prefers-reduced-motion` honoured, focus styles from the
system's own focus token, 44px minimum targets on every link, `<details>` for the FAQ so it works with
no JavaScript, and colour pairs taken from the measured token table rather than invented for the page.

## Licence

No licence has been selected by the owner for any HomeMind repository, so this one is "all rights
reserved" by default and contains no `LICENSE` file. Choosing one is an open owner decision, not an
oversight.
