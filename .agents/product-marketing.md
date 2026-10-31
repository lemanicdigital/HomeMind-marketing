# Product Marketing Context

**Document version:** v1
**Last updated:** 2026-11-01

Drafted from the repos (HomeMind-marketing `src/copy/`, HomeMind-IOS `src/i18n/` and plan screen,
HomeMind-backend plan rules), not from customer interviews: there are no customers yet. Anything
marked **UNKNOWN** needs a real answer before a skill relies on it.

## Hard constraints (read first)

These are promises the product and the site make in public. A recommendation that breaks one is
wrong, however standard it is elsewhere.

- **No analytics, no tracking, no cookies** on the site or in the app. No pixels, no GA4, no
  heatmaps, no A/B testing tools, no attribution scripts, no UTM-driven dashboards.
- **No JavaScript on the site** and **no third-party requests** (fonts, images, embeds). The build
  fails if either appears (`scripts/check-build.mjs`).
- **No email capture**: no newsletter, no waitlist form, no lead magnets, no popups. The site says
  "There is no mailing list to join."
- **No advertising inside the app, no selling or sharing data.**
- **Colours and type come from the HomeMind-IOS design system** (`src/styles/tokens.css` is generated;
  the style audit rejects any other colour).
- **Every public word exists in English, French, German and Italian**, written for each reader
  (German and Italian use the informal du/tu, as the app does), not translated line by line.

So the levers left are: the words, the design, the App Store listing, search (classic and AI),
press, word of mouth and the household invite itself.

## Product Overview

**One-liner:** Know what's at home before you shop.
**What it does:** HomeMind is a household inventory for iPhone. It keeps track of what a home has,
how much, and where it is kept; turns best-before dates into "use today" and "3 days left" with one
calm morning reminder; and writes the shopping list from what ran out and what is running low.
Everyone in a household shares one inventory and one list.
**Product category:** Pantry / kitchen inventory app; food-waste and expiry tracker; household
shopping list. People search "pantry app", "food expiry tracker", "fridge inventory app",
"shared shopping list".
**Product type:** Consumer iPhone app (Expo / React Native), offline-first, with an EU sync server.
Android planned, not started.
**Business model:**

- Free, forever, on one phone: the whole app, no limits, no ads.
- **HomeMind Household**: €14.99 a year or €1.99 a month, first month free. Adds sync across
  phones, sharing a household (invited people don't pay), and a copy off the phone. One plan covers
  the whole household. Sold through the App Store only.
- If a plan ends, sync pauses; nothing is deleted from phones.

## Target Audience

**Target customers:** Households that shop for food weekly and throw some away: couples, families,
flatshares. Primary markets: Switzerland, France, Germany, Italy, Austria, UK (from the four
languages and the company's base by Lake Geneva). **UNKNOWN:** which market comes first.
**Decision-makers:** Whoever does most of the household shopping and planning; the plan is bought
once and the rest of the household is invited.
**Primary use case:** Not buying what you already have, and eating what you have before it goes off.
**Jobs to be done:**

- "Tell me what needs eating before it's wasted."
- "Give me a shopping list I can trust in the shop, without checking the cupboards first."
- "Let the person I live with see the same stock and list, so we don't both buy milk."
  **Use cases:**
- Standing in the supermarket, wondering whether there are still eggs at home.
- Sunday clear-out of the fridge, with the app saying what to use first.
- A flatshare or couple splitting the shopping without a group chat.
- Scanning the shopping in as it is put away.

## Personas

Consumer product: one buyer, one household. Not B2B.

| Persona                        | Cares about                                    | Challenge                                            | Value we promise                                |
| ------------------------------ | ---------------------------------------------- | ---------------------------------------------------- | ----------------------------------------------- |
| The household planner          | Not wasting food or money; a list that's right | Keeps the stock in their head; others buy duplicates | The stock and the list live on everyone's phone |
| The person they live with      | Not being asked "do we have…?"                 | Doesn't know what's at home                          | Sees the same list; joins free with a code      |
| The privacy-minded single user | An app that doesn't watch them                 | Most apps want an account and track                  | Works fully without an account, free            |

## Problems & Pain Points

**Core problem:** Households don't know what they have, so they buy duplicates and throw food away
after its date.
**Why alternatives fall short:**

- Memory and a note on the fridge don't travel to the shop.
- Shopping-list apps know what to buy, not what's already at home or when it expires.
- Inventory apps tend to be heavy to set up, ad-funded, or want an account and data from day one.
  **What it costs them:** Money on duplicates and binned food; the trip back for the one thing
  forgotten. **UNKNOWN:** a sourced figure for household food waste per country (needed before any
  claim with a number).
  **Emotional tension:** The guilt of throwing out food bought a week ago; the mild friction of
  "did you buy milk?" between people who live together.

## Competitive Landscape

Unverified list from general knowledge; check before naming anyone in public copy.

**Direct:** Other pantry / expiry apps (for example Pantry Check, NoWaste, KitchenPal). Fall short
when they're ad-funded, need an account first, or are English only.
**Secondary:** Shared shopping lists (Bring!, AnyList, Apple Reminders). Good lists, but they don't
know what's at home or when it goes off.
**Indirect:** The fridge door note, the family group chat, memory.

## Differentiation

**Key differentiators:**

- Expiry dates, stock and the shopping list in one place, connected: running out puts it on the list.
- Works fully offline and without an account; the phone holds the working copy.
- One plan for the whole household; invited people pay nothing.
- No ads, no tracking, synced data in the EU (Frankfurt).
- Speaks French, German, Italian and English natively, with local dates, numbers and units.
  **How we do it differently:** Calm and honest: it doesn't pretend to know quantities or dates
  you didn't give it, and suggestions show their reason.
  **Why that's better:** Less to set up, nothing to distrust, and it fits the house it's in.
  **Why customers choose us:** **UNKNOWN** until the beta has users.

## Objections

| Objection                              | Response                                                                                              |
| -------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| "Logging everything is too much work." | Only the name is needed; scan a barcode; amounts and dates are optional.                              |
| "Why pay for sync?"                    | The app is free and complete on one phone; the plan pays for the server that sync and sharing need.   |
| "Will it sell my data?"                | No ads, no analytics, no data sold; works without an account; EU servers; account deletion erases it. |
| "I'm on Android."                      | iPhone first; Android planned.                                                                        |

**Anti-persona:** People who want recipes or meal plans, calorie tracking, or receipts scanned into
budgets; restaurants and businesses managing stock.

## Switching Dynamics

**Push:** Another bin bag of food past its date; buying a fourth jar of something.
**Pull:** A list that writes itself; the household on one list; free without an account.
**Habit:** Shopping from memory; the shopping-list app already shared with a partner.
**Anxiety:** Setup effort; another subscription; what happens to the data.

## Customer Language

No customers yet; the lines below are our own copy that sets the register.
**How they describe the problem:** **UNKNOWN** (collect from beta feedback).
**How they describe us:** **UNKNOWN**.
**Words to use:** at home, use soon, running low, ran out, the shopping list, household, pack,
best-before, your phone.
**Words to avoid:** "smart", "AI-powered", "revolutionary", "seamless", "effortless", "platform",
"solution", "never waste food again" (overclaims), "zero waste".
**Glossary:**

| Term               | Meaning                                                |
| ------------------ | ------------------------------------------------------ |
| Item               | One product the household keeps, such as whole milk    |
| Pack               | One bought unit of an item with its own date and place |
| Place              | Where things are kept: fridge, cupboard, freezer       |
| Household          | The shared inventory and list; one plan covers it      |
| HomeMind Household | The paid plan (sync, sharing, backup)                  |

## Brand Voice

| Attribute | Means                                     | Doesn't mean   | Example line                                        |
| --------- | ----------------------------------------- | -------------- | --------------------------------------------------- |
| Calm      | Low-key, one reminder, no urgency         | Bland          | "one calm morning note lists what needs eating"     |
| Honest    | Says what it can't do; no inflated claims | Apologetic     | "HomeMind doesn't pretend to know what it doesn't." |
| Concrete  | Real objects and places                   | Cute or quirky | "the shelf by the washing machine"                  |
| Plain     | Short sentences, everyday words           | Childish       | "Run out and it lands on the shopping list."        |

**Tone by context:**

- Support: quote the app's exact labels, step by step, in the reader's language.
- Launch: state facts and the date; no hype.
- Errors: say what happened and what to do; never blame.
- Sales: there is no sales; the pricing section explains, it doesn't push.
- Social: **UNKNOWN** (no social presence yet).
  **Terms we own:** "know what's at home", "use soon", "a list that writes itself".
  **Never use (and why):** fake urgency or scarcity (contradicts calm); stats without a source;
  "it's not X, it's Y" reveals and "no X, no Y, no Z" lists (read as generated; the current hero
  promise "No ads, no tracking" is one to revisit).

## Proof Points

**Metrics:** None yet (pre-launch). Don't invent any.
**Customers:** None yet.
**Testimonials:** None yet.
**Value themes:**

| Theme          | Proof                                                                                                |
| -------------- | ---------------------------------------------------------------------------------------------------- |
| Private        | No analytics in app or site (checked by the build); EU hosting; privacy policy written from the code |
| Fair price     | Free on one phone; one plan per household; invited members free                                      |
| Feels local    | Four languages, local dates and units, Swiss German "ss"                                             |
| Works anywhere | Offline-first; syncs when back in signal                                                             |

## Goals

**Business goal:** Launch the TestFlight beta, then the App Store release; first paying households.
**Conversion action:** Pre-launch: read the page and come back for the beta (no capture by design).
After launch: install from the App Store; later, start HomeMind Household.
**Current metrics:** None, by design on the site. App Store Connect will report installs and
subscriptions once live.

## Learnings

_Decisions and tested lessons. Newest first. Keep it to about 20 active entries._

| Date       | Learning                                                                    | Evidence                                         | Applies to         | Status |
| ---------- | --------------------------------------------------------------------------- | ------------------------------------------------ | ------------------ | ------ |
| 2026-10-31 | German and Italian copy uses du / tu, matching the app                      | Decision; the app uses "Deine Daten"             | All copy           | active |
| 2026-10-30 | Price: €14.99/year or €1.99/month, first month free, one plan per household | Owner decision after comparing similar apps      | Pricing, ASO, copy | active |
| 2026-10-30 | The site is set in Inter outside Apple devices; system font on Apple        | Owner decision: Windows rendering looked unclean | Site design        | active |

## Changelog

_Newest first. One line per revision: what changed and why._

- v1 (2026-11-01) — Initial context, drafted from the repos before the beta; hard constraints first.
