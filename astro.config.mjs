import { defineConfig } from "astro/config";

/**
 * A static marketing site: no JavaScript shipped to the browser, no third-party fonts, no analytics.
 * `site` is the custom domain GitHub Pages serves (public/CNAME), so the site lives at the root
 * and needs no `base`.
 */
export default defineConfig({
  output: "static",
  site: "https://homesky.app",
  trailingSlash: "ignore",
  build: { inlineStylesheets: "auto" },
});
