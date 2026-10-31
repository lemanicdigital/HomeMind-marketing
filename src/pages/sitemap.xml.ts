import type { APIRoute } from "astro";

import { LANGS, page } from "../i18n";

/**
 * The site's pages for search engines. Every page exists in every language, and each entry names
 * its versions in the others, so a search shows each reader their own.
 */
const PATHS = ["", "support/", "privacy/"] as const;

export const GET: APIRoute = ({ site }) => {
  const urls = PATHS.flatMap((path) => {
    const alternates = LANGS.map(
      (lang) =>
        `    <xhtml:link rel="alternate" hreflang="${lang}" href="${new URL(page(lang, path), site)}"/>`,
    ).join("\n");
    return LANGS.map(
      (lang) =>
        `  <url>\n    <loc>${new URL(page(lang, path), site)}</loc>\n${alternates}\n  </url>`,
    );
  });
  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${urls.join("\n")}\n</urlset>\n`,
    { headers: { "Content-Type": "application/xml; charset=utf-8" } },
  );
};
