# Homesky — marketing

The public Homesky website: a landing page, support and a privacy policy, static HTML and CSS, no JavaScript shipped to the
browser, no third-party requests, no analytics, no cookies.

Astro is the build tool (static output), not a runtime: `astro build` emits `dist/` and the browser
downloads one HTML file plus one stylesheet. Nothing in `src/` needs a framework at run time.

## Status of the claims on the page

Homesky is **in private development**. The site is written so that nothing on it can be read as a
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

Node 22.22 or newer — Astro's minimum; `.nvmrc` names it for nvm, fnm and Volta.

## Layout

```
src/pages/index.astro              the home page, in English (src/components/Home.astro)
src/pages/support.astro            the App Store support URL, in the app's own words (SupportPage)
src/pages/privacy.astro            the privacy policy, written from what the code keeps (PrivacyPage)
src/pages/[lang]/*.astro           the same three pages in French, German and Italian: /fr/, /de/, /it/
src/copy/*.ts                      the home page's words per language; en.ts defines the shape (Copy)
src/copy/pages/*.ts                support and privacy words per language (PagesCopy)
src/i18n.ts                        languages, their URLs, French spacing, copyFor(), pagesFor(), page()
src/pages/sitemap.xml.ts           sitemap: every page in every language, with hreflang alternates
src/pages/robots.txt.ts            robots.txt, pointing at the sitemap
src/site.ts                        shared facts: CONTACT (owner to set), PAGES, href() for links
src/pages/404.astro                served by GitHub Pages for unknown addresses
src/layouts/Page.astro             document shell, metadata, canonical URL
src/components/*.astro             header, hero, the app's screens, the day (with privacy), how it works, pricing, FAQ, launch, footer
src/components/app/*.astro         the app's screens drawn in HTML from the tokens (styles: src/styles/app-ui.css)
src/styles/tokens.css              GENERATED — vendored design-system tokens (do not edit)
src/styles/global.css              everything else, written against those tokens only
vendor/design-system/tokens.md     GENERATED — verbatim copy of the design-system document
scripts/sync-design-tokens.mjs     regenerate both from a HomeMind-IOS checkout
scripts/audit-styles.mjs           fail if authored CSS contains a colour literal
scripts/check-build.mjs            assert every built page keeps its promises and its links resolve
scripts/og.mjs                     public/og.png, the link-preview card: the built hero, shot by local Chrome or Edge
astro.config.mjs                   static output, Pages base path
```

## Languages

Every page is in English, French, German and Italian, the same four languages as the app. Each is
written for its readers rather than translated line by line: prices in local form ("14,99 €"), _tu_
in Italian and _du_ in German as in the app, French spacing before ? ! : ;. Every version names the
others with `hreflang` (in the page and the sitemap), and the header switches between them with
plain links. The site never guesses a language from the browser, because that would need JavaScript
or a redirect. To add a sentence, add it to `src/copy/en.ts` or `src/copy/pages/en.ts`; `astro
check` then fails until the other three have it too.

The support page quotes the app's labels ("Settings → Sync → Sync now"), and each language quotes
the app in that language (HomeMind-IOS `src/i18n/<lang>.ts`), so a renamed label in the app is a
change here too. The privacy policy's English text is the original; the translations say so and
link to it. A change to what the policy says is a change to all four files in the same PR.

## Design tokens

Identity is owned by the design system in **HomeMind-IOS** — this site never defines a colour, a font
size or a spacing value of its own. Both generated files come from one command, against one source:

```bash
npm run tokens:sync   # → src/styles/tokens.css + vendor/design-system/tokens.md
npm run tokens:check  # fails if the stylesheet no longer matches the document it came from
```

**Typeface.** Apple devices use their system font (SF Pro, as the app does); everything else gets
**Inter**, self-hosted from `@fontsource-variable/inter` (SIL Open Font License): one variable file
per script, each fetched only when a page uses its characters, so an Apple device fetches none.
Arabic will need its own face (IBM Plex Sans Arabic or Noto Sans Arabic) when an Arabic page exists.
`scripts/og.mjs` photographs the built hero for the link card, so the card is always the page.

- `src/styles/tokens.css` is **generated**, from `docs/design-system/tokens.md` in a HomeMind-IOS
  checkout (default `../HomeMind-IOS`; override with `--source <path>` or
  `HOMESKY_DESIGN_SYSTEM_PATH`). Its header records the source commit and a content hash. Editing
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
folder rather than to Actions: **Settings → Pages → Build and deployment → Source: GitHub Actions** —
already done here (the Pages API reports `build_type: workflow`), which retires the internal
`pages-build-deployment` runs the legacy pipeline fires on every push. The repository briefly carried
the stock Jekyll workflow the settings page offers (`jekyll-gh-pages.yml`); it was removed so that
only the Astro pipeline can publish.

The site is served at its own domain, `https://homesky.app` (`site` in `astro.config.mjs`, no `base`,
`public/CNAME`). The domain is set once in **Settings → Pages → Custom domain**, with the DNS records
GitHub lists there; `isOwnSite()` in `scripts/check-build.mjs` names the same origin. There is deliberately **no sitemap
and no RSS feed**: the site is one page, the privacy policy (`/privacy/`, the URL App Store Connect asks for) and a
404 that says so.

An `og:image` is the one deliberate absence in the page's metadata: when one is added, it should be a
rendered design-system card, not a stock image. Like the custom domain above, that is an open owner
decision rather than an oversight.

## Accessibility

Built to the same rules as the product: semantic landmarks, a skip link, one `h1` with a descending
heading order, `prefers-color-scheme` and `prefers-reduced-motion` honoured, focus styles from the
system's own focus token, 44px minimum targets on every link, `<details>` for the FAQ so it works with
no JavaScript, and colour pairs taken from the measured token table rather than invented for the page.

## Licence

No licence has been selected by the owner for any Homesky repository, so this one is "all rights
reserved" by default and contains no `LICENSE` file. Choosing one is an open owner decision, not an
oversight.
