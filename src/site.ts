/**
 * Facts the whole site shares. Pages import these instead of repeating them, so a change (the
 * contact address, a custom domain) is one edit.
 */

/**
 * The address people write to, for support and privacy requests. The owner's to set: until it is,
 * pages say so rather than inventing an address, and the site must not be given to App Store
 * Connect as the support or privacy URL.
 */
export const CONTACT = "";

/** Pages listed in the sitemap, as paths under the site's base. */
export const PAGES = ["", "fr/", "de/", "it/", "support/", "privacy/"];

const base = import.meta.env.BASE_URL.replace(/\/$/, "");

/**
 * A link to `path` on this site, from any page. Section links must name the home page: a bare
 * `#faq` on /privacy/ would point at /privacy/#faq, which does not exist.
 */
export function href(path: string): string {
  return `${base}/${path.replace(/^\//, "")}`;
}
