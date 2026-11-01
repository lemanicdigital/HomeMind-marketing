/**
 * Structured data (schema.org JSON-LD) for each page, in the page's language. It says to search
 * engines and AI answers what the page already says to people: an iPhone app called HomeMind, free
 * on one phone, with a household plan at these prices. Nothing here may claim more than the page
 * shows; scripts/check-build.mjs checks the prices against the page text and the breadcrumb against
 * the canonical URL.
 *
 * Google shows no rich result for an app without ratings, and FAQ rich results are retired, so the
 * FAQ is left as plain visible HTML. The point is a correct description of the product, not a
 * search-result decoration.
 */
import { LANGS, type Lang, copyFor, home, page, pagesFor } from "./i18n";

/** The App Store's euro tier, as the page shows it formatted per language in src/copy. */
const PRICES = { yearly: "14.99", monthly: "1.99", currency: "EUR" } as const;

type Node = Record<string, unknown>;

/** The home page: the site itself, and the app with its two ways to use it. */
export function homeSchema(lang: Lang, site: URL): Node[] {
  const at = (path: string) => new URL(path, site).href;
  const c = copyFor(lang);
  const plan = (price: string, billingDuration: string): Node => ({
    "@type": "Offer",
    name: c.pricing.household.name,
    price,
    priceCurrency: PRICES.currency,
    priceSpecification: {
      "@type": "UnitPriceSpecification",
      price,
      priceCurrency: PRICES.currency,
      billingDuration,
    },
  });

  return [
    {
      "@type": "WebSite",
      "@id": `${at(home("en"))}#website`,
      name: "HomeMind",
      url: at(home("en")),
      inLanguage: [...LANGS],
    },
    {
      "@type": "MobileApplication",
      "@id": `${at(home(lang))}#app`,
      name: "HomeMind",
      description: c.meta.description,
      url: at(home(lang)),
      inLanguage: [...LANGS],
      operatingSystem: "iOS",
      applicationCategory: "LifestyleApplication",
      offers: [
        { "@type": "Offer", name: c.pricing.free.name, price: "0", priceCurrency: PRICES.currency },
        plan(PRICES.yearly, "P1Y"),
        plan(PRICES.monthly, "P1M"),
      ],
    },
  ];
}

/** Support and privacy: one step below the home page in the same language. */
export function breadcrumbSchema(lang: Lang, site: URL, path: "support/" | "privacy/"): Node[] {
  const at = (href: string) => new URL(href, site).href;
  // The page's <title> without the " — HomeMind" suffix: "Aide", "Datenschutz", "Privacy".
  const copy = pagesFor(lang)[path === "support/" ? "support" : "privacy"];
  const title = copy.title.split(" — ")[0] ?? copy.heading;
  return [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "HomeMind", item: at(home(lang)) },
        { "@type": "ListItem", position: 2, name: title, item: at(page(lang, path)) },
      ],
    },
  ];
}

/** The graph as a <script type="application/ld+json"> body; "<" is escaped so no text can end it. */
export function jsonLd(nodes: Node[]): string {
  return JSON.stringify({ "@context": "https://schema.org", "@graph": nodes }).replace(
    /</g,
    "\\u003c",
  );
}
