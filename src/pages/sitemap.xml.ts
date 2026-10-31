import type { APIRoute } from "astro";

import { LANGS, home } from "../i18n";
import { PAGES, href } from "../site";

/**
 * The site's pages for search engines, from the same list the pages are kept in. The home page's
 * language versions name each other, so a search shows each reader their own.
 */
export const GET: APIRoute = ({ site }) => {
  const homes = new Set(LANGS.map((lang) => home(lang)));
  const alternates = LANGS.map(
    (lang) =>
      `    <xhtml:link rel="alternate" hreflang="${lang}" href="${new URL(home(lang), site)}"/>`,
  ).join("\n");
  const urls = PAGES.map((page) => {
    const loc = `<loc>${new URL(href(page), site)}</loc>`;
    return homes.has(href(page))
      ? `  <url>\n    ${loc}\n${alternates}\n  </url>`
      : `  <url>${loc}</url>`;
  });
  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${urls.join("\n")}\n</urlset>\n`,
    { headers: { "Content-Type": "application/xml; charset=utf-8" } },
  );
};
