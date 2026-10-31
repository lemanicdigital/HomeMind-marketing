/**
 * The site's languages, matching the app's (HomeMind-IOS: src/i18n). English lives at the root;
 * the others under their code: /fr/, /de/, /it/. Each page names its versions in every language
 * with hreflang, and the header switches between them, so a visitor lands on the page in their own
 * language from a search result and can change it in one tap. No JavaScript, no redirects: the
 * site never guesses the language from the browser.
 */
import { type Copy, en } from "./copy/en";
import { de } from "./copy/de";
import { fr } from "./copy/fr";
import { it } from "./copy/it";
import { type PagesCopy, en as pagesEn } from "./copy/pages/en";
import { de as pagesDe } from "./copy/pages/de";
import { fr as pagesFr } from "./copy/pages/fr";
import { it as pagesIt } from "./copy/pages/it";
import { href } from "./site";

export const LANGS = ["en", "fr", "de", "it"] as const;
export type Lang = (typeof LANGS)[number];

/** Each language named in itself, for the switcher. */
export const LANG_NAMES: Record<Lang, string> = {
  en: "English",
  fr: "Français",
  de: "Deutsch",
  it: "Italiano",
};

/** For og:locale. */
export const OG_LOCALES: Record<Lang, string> = {
  en: "en_GB",
  fr: "fr_FR",
  de: "de_DE",
  it: "it_IT",
};

/** French wants a thin no-break space before ? ! : ; and inside guillemets. */
function typeset(text: string): string {
  return text
    .replace(/ ([?!:;])/g, " $1")
    .replace(/« /g, "« ")
    .replace(/ »/g, " »");
}

function mapStrings<T>(value: T, change: (text: string) => string): T {
  if (typeof value === "string") return change(value) as T;
  if (Array.isArray(value)) return value.map((inner) => mapStrings(inner, change)) as T;
  if (value && typeof value === "object") {
    return Object.fromEntries(
      Object.entries(value).map(([key, inner]) => [key, mapStrings(inner, change)]),
    ) as T;
  }
  return value;
}

const COPY: Record<Lang, Copy> = { en, fr: mapStrings(fr, typeset), de, it };
const PAGES_COPY: Record<Lang, PagesCopy> = {
  en: pagesEn,
  fr: mapStrings(pagesFr, typeset),
  de: pagesDe,
  it: pagesIt,
};

/** The home page's words in `lang`. */
export function copyFor(lang: Lang): Copy {
  return COPY[lang];
}

/** The support page's and privacy policy's words in `lang`. */
export function pagesFor(lang: Lang): PagesCopy {
  return PAGES_COPY[lang];
}

/** A page of the site in `lang`: page("fr", "support/") is "/fr/support/", English stays at the root. */
export function page(lang: Lang, path: "" | "support/" | "privacy/", hash = ""): string {
  return href(lang === "en" ? `${path}${hash}` : `${lang}/${path}${hash}`);
}

/** The home page in `lang`, plus an optional `#section`: "/", "/fr/", "/de/#pricing". */
export function home(lang: Lang, hash = ""): string {
  return page(lang, "", hash);
}
