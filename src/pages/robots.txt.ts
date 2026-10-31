import type { APIRoute } from "astro";

/** Everything may be crawled; the sitemap's address follows `site` and `base` in astro.config. */
export const GET: APIRoute = ({ site }) => {
  const sitemap = new URL(`${import.meta.env.BASE_URL.replace(/\/$/, "")}/sitemap.xml`, site);
  return new Response(`User-agent: *\nAllow: /\n\nSitemap: ${sitemap}\n`, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
};
