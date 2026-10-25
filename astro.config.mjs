import { defineConfig } from "astro/config";

/**
 * A static marketing site: no JavaScript shipped to the browser, no third-party fonts, no analytics.
 * `site` and `base` match GitHub Pages project-site hosting; if the site ever moves to a custom
 * domain, change both here and nothing else.
 */
export default defineConfig({
  output: "static",
  site: "https://lemanicdigital.github.io",
  base: "/HomeMind-marketing",
  trailingSlash: "ignore",
  build: { inlineStylesheets: "auto" },
});
