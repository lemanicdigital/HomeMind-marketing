import type { APIRoute } from "astro";

import { LANGS, LANG_NAMES, copyFor, home, page, pagesFor } from "../i18n";

/**
 * /llms.txt (llmstxt.org): the site as plain Markdown, for AI assistants that answer questions
 * about HomeMind. Written from the same copy as the pages, so it can't say anything they don't, and
 * it links every page in every language. Crawlers that don't know the file simply never ask for it.
 */
export const GET: APIRoute = ({ site }) => {
  const at = (path: string) => new URL(path, site).href;
  const c = copyFor("en");
  const { pricing } = c;

  const lines = [
    "# HomeMind",
    "",
    `> ${c.meta.description}`,
    "",
    "## What it does",
    "",
    ...c.day.chapters.map((item) => `- **${item.title}.** ${item.body}`),
    "",
    "## How it works",
    "",
    ...c.how.steps.map((item) => `- **${item.title}.** ${item.body}`),
    "",
    "## Price",
    "",
    `- **${pricing.free.name}** (${pricing.free.price}): ${pricing.free.tagline}`,
    ...pricing.free.items.map((line) => `  - ${line}`),
    `- **${pricing.household.name}** (${pricing.household.price} ${pricing.household.per}, ${pricing.household.badge.toLowerCase()}): ${pricing.household.tagline}`,
    ...[pricing.household.everything, ...pricing.household.items].map((line) => `  - ${line}`),
    "",
    pricing.note,
    "",
    "## Privacy",
    "",
    c.privacy.lead,
    "",
    "## Questions",
    "",
    ...c.faq.items.flatMap((item) => [`### ${item.q}`, "", item.a, ""]),
    "## Pages",
    "",
    ...LANGS.flatMap((lang) => {
      const pages = pagesFor(lang);
      return [
        `- [HomeMind (${LANG_NAMES[lang]})](${at(home(lang))}): ${copyFor(lang).meta.description}`,
        `- [${pages.support.title}](${at(page(lang, "support/"))}): ${pages.support.description}`,
        `- [${pages.privacy.title}](${at(page(lang, "privacy/"))}): ${pages.privacy.description}`,
      ];
    }),
    "",
  ];

  return new Response(lines.join("\n"), {
    headers: { "Content-Type": "text/markdown; charset=utf-8" },
  });
};
