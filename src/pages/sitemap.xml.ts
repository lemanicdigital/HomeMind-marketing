import type { APIRoute } from "astro";

import { PAGES, href } from "../site";

/** The site's pages for search engines, from the same list the pages are kept in. */
export const GET: APIRoute = ({ site }) => {
  const urls = PAGES.map((page) => `  <url><loc>${new URL(href(page), site)}</loc></url>`);
  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join("\n")}\n</urlset>\n`,
    { headers: { "Content-Type": "application/xml; charset=utf-8" } },
  );
};
