# Launch plan

From the first TestFlight build to the App Store, in Switzerland, France, Germany, Italy, Austria and
the UK, in English, French, German and Italian. Written 2026-11-01, before any tester has the app.

Phases end on a **gate** (a condition), not a date: no launch date is set, and a date is only worth
announcing once the gate before it has passed. Each step says who does it: **owner** steps need the
Apple, Expo, GitHub or Render account.

## What this plan can't use, and what it uses instead

`.agents/product-marketing.md` rules out the usual launch kit: no analytics, no email list or
waitlist, no popups, no tracking links. So:

| The usual tool            | Here instead                                                                            |
| ------------------------- | --------------------------------------------------------------------------------------- |
| Waitlist and launch email | The site's launch section, and the App Store pre-order page (Phase 4)                   |
| Product analytics         | TestFlight feedback and crash reports; App Store Connect's own figures once live        |
| Onboarding email sequence | The app's first-run screens; there is no address to email                               |
| Referral programme        | The household invite: every paid household brings its members in for free               |
| Social following          | None yet. Not a launch dependency; see "Channels" for why                               |
| UTM links per channel     | App Store Connect lists sources (search, browse, web referrer) without any link tagging |

The owned channels are the site, the App Store product page and the app itself. Everything borrowed
(press, food-waste groups) points at one of those three.

## Readiness: is the beta worth inviting people to?

Homesky passes the Simple / Lovable / Complete test at its current scope if these hold on a real
iPhone, in each language:

- **Simple:** one job, "know what's at home". Recipes, meal plans and receipts stay out of scope.
- **Complete:** add by name or barcode, packs with dates, the morning reminder, the shopping list,
  sharing a household, export and account deletion all work end to end, offline included.
- **Lovable:** a tester who adds ten items in the first sitting comes back the next morning because of
  the reminder. Phase 2 finds out; nothing before it can.

Not on the list, and not a reason to wait: Android, Arabic, iPad, widgets.

## Phase 0: before any build leaves the team

| #   | Step                                                                                       | Who   | Where                             |
| --- | ------------------------------------------------------------------------------------------ | ----- | --------------------------------- |
| 1   | Merge the open PRs into `main` (marketing #13–#16, iOS #21)                                | owner | GitHub                            |
| 2   | Set `CONTACT` and deploy; support and privacy pages then show it                           | owner | `src/site.ts`                     |
| 3   | App Store Connect record, `ascAppId` in `eas.json`, App Privacy answers                    | owner | HomeMind-IOS `docs/testflight.md` |
| 4   | Subscription group with the yearly and monthly products, first month free                  | owner | App Store Connect                 |
| 5   | Staging live on Render and the smoke test passing; `HOMESKY_DEV_AUTH=false` afterwards     | owner | HomeMind-backend                  |
| 6   | First `beta` build, checked on a device in all four languages (dates, units, the paywall)  | owner | `docs/testflight.md`              |
| 7   | Ask for a rating in the app (`StoreKit` review prompt) after a household's first full week | code  | HomeMind-IOS, not built yet       |

Step 7 matters more than it looks: a new app has no ratings, and the rating is one of the first things
a visitor sees on the page and in search results. Apple allows three prompts a year and decides when
they show. The prompt
should come after a good moment (a list that wrote itself, a week of use), never on first launch.

**Gate:** a beta build installs from TestFlight, signs in with Apple, syncs between two phones and
shares a household, on staging.

## Phase 1: internal TestFlight (team only)

Internal testers are App Store Connect users; no Beta App Review.

- Owner and anyone on the team use Homesky for their real household for a week, in their own
  language. Note every moment of "where is…?" or "why did it…?".
- Read TestFlight's crash reports daily.

**Gate:** a week of real use with no crash and no data lost, and the morning reminder arriving every
day.

## Phase 2: closed external beta (invited households)

External testers by email invitation; the first build of each version goes through Beta App Review
(usually a day or two).

- Invite **10 to 20 households the team knows personally**, at least two per language and at least
  four that share a household between two phones. Couples and flatshares matter most: sharing is the
  paid feature.
- Tell them three things, in their language: beta data may be reset (and you'll say before it is), how
  to send feedback (TestFlight screenshot feedback, or the `CONTACT` address), and that the plan is
  free during the beta.
- After two weeks, ask each household the same four questions, by message or in person:
  1. What did you use Homesky for this week?
  2. When did it get in your way?
  3. How would you describe it to a friend? (Write the answers down word for word: they fill
     "Customer Language" in the context file.)
  4. Would you be disappointed if it went away? (Very / somewhat / not)

**Gate:** at least 40% of households answer "very disappointed" (Sean Ellis's product/market-fit
threshold; with 10 to 20 households, read it as a direction, not a measurement), nothing on the "got in the way" list
is about losing data or sync, and two weeks pass without a crash. If the 40% isn't reached, the
answers to question 2 are the next build, not the launch.

## Phase 3: public TestFlight beta

A public TestFlight link, capped at a tester limit you choose (start at 200, raise it as feedback
keeps up).

**Site changes** (four languages each; one PR):

| Copy key                       | Now                          | Becomes                                                    |
| ------------------------------ | ---------------------------- | ---------------------------------------------------------- |
| `launch.title`, `launch.body`  | "A public beta … comes next" | The beta is open; what testers get; that data may be reset |
| `launch.action`                | "Questions and answers"      | "Join the beta on TestFlight" (the public link)            |
| `hero.eyebrow`, `nav.soon`     | "Coming soon to iPhone"      | "Public beta on iPhone"                                    |
| FAQ "Can I try the beta?"      | "Not yet"                    | How to join, and that it needs the TestFlight app          |
| `meta.description` (each lang) | ends "Coming soon to iPhone" | ends "Public beta on iPhone"                               |

The TestFlight link is a plain `<a href>`, so the site still makes no third-party request.

**Borrowed attention** (one short note per outlet, in its language, with the link and three facts;
check each outlet's current contact before writing):

- Apple-focused sites that cover betas and indie apps, one or two per language: for example
  iphone-ticker.de or ifun.de (German), iphon.fr (French), iSpazio (Italian), and a UK one.
- Food-waste groups that point people to tools, starting where the team lives: foodwaste.ch in
  Switzerland, Zu gut für die Tonne in Germany, Love Food Hate Waste in the UK, the anti-gaspi
  networks in France. Unverified list; check that each one links to apps before pitching.
- A post in one or two communities where the team already takes part, following that community's
  rules on self-promotion. Not a launch dependency.

**Gate:** the tester limit is reached or the feedback is steady, the "very disappointed" share holds
at 40% across the larger group, and Apple's review notes for the beta are clear.

## Phase 4: App Store release

**Two to four weeks before:**

- Push the listing (`store.config.json` in HomeMind-IOS, `docs/app-store.md`): set `CONTACT` first.
- Screenshots in each language, taken with the phone set to that language, with the captions in
  `docs/app-store.md`. Five per language; the first three carry the page.
- Decide on **App Store pre-order** (owner): the app can be listed up to 180 days before release, and
  people who pre-order get it automatically on the day. It gives the site a real App Store link and
  replaces the waitlist this site doesn't have, without collecting anything. Recommended, once the
  release build has passed review.
- Submit the release build early and choose **manual release**, so the day is chosen, not given by
  review. Apple usually pauses review over the Christmas week; check its announced dates if the
  release falls in December.

**On the day:**

| Where                   | What                                                                                                                                                                            |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| App Store Connect       | Release the version                                                                                                                                                             |
| Site (four langs)       | Apple's "Download on the App Store" badge (self-hosted SVG) in the hero and launch section; copy loses "beta"; `src/schema.ts` gains `downloadUrl`; `llms.txt` follows the copy |
| TestFlight testers      | A last note: the App Store version is out, how to move to it, and that their household stays                                                                                    |
| Press list from Phase 3 | One short note: available today, in which countries, the price, one sentence on privacy                                                                                         |

The announcement says what is true that day and nothing else. A draft, to adapt on the day:

> **EN:** Homesky is on the App Store from today in Switzerland, France, Germany, Italy, Austria and
> the UK. It keeps track of what a household has and when it goes off, and writes the shopping list.
> Free on one iPhone; Homesky Household adds sharing for €14.99 a year, first month free.
>
> **FR :** Homesky est disponible dès aujourd’hui sur l’App Store en Suisse, en France, en Allemagne,
> en Italie, en Autriche et au Royaume-Uni. L’app sait ce que contient votre foyer et ce qui périme
> bientôt, et elle écrit la liste de courses. Gratuite sur un iPhone ; Homesky Household ajoute le
> partage pour 14,99 € par an, premier mois offert.
>
> **DE:** Homesky gibt es ab heute im App Store in der Schweiz, in Deutschland, Österreich,
> Frankreich, Italien und Grossbritannien. Die App weiss, was dein Haushalt da hat und was bald
> abläuft, und schreibt die Einkaufsliste. Auf einem iPhone gratis; Homesky Household bringt das
> Teilen für 14,99 € im Jahr, der erste Monat ist gratis.
>
> **IT:** Homesky è disponibile da oggi sull’App Store in Svizzera, Francia, Germania, Italia,
> Austria e Regno Unito. Sa cosa c’è in casa e cosa scade presto, e scrive la lista della spesa.
> Gratis su un iPhone; Homesky Household aggiunge la condivisione a 14,99 € all’anno, primo mese
> gratis.

The German draft uses Swiss "ss" ("weiss", "Grossbritannien"); use "ß" for Germany and Austria.
Prices differ by storefront (francs, pounds): quote each country's App Store price, not the euro one.

**Gate:** none. This is the launch.

## Phase 5: after launch

Every release is a small launch, sized by what changed:

| Change                                    | What it gets                                                                          |
| ----------------------------------------- | ------------------------------------------------------------------------------------- |
| New language (Arabic is next), new device | Release notes, site copy, an App Store in-app event ("Major Update"), a note to press |
| A feature a tester asked for              | Release notes that name the request; promo text for a month                           |
| Fixes                                     | Release notes that say what was fixed, in each language                               |

- **Promo text** (170 characters, changed without a build) carries the current news on the App Store
  page.
- **Custom product pages** per market later, once the default page has a month of conversion figures
  to compare against.
- **Reviews:** answer every App Store review in the reviewer's language, within a few days.

## What to watch, without analytics

All of it comes from Apple's own reports; nothing is added to the app or the site.

| Phase | Figure                                   | From               | Healthy sign                                  |
| ----- | ---------------------------------------- | ------------------ | --------------------------------------------- |
| 2–3   | Testers who installed / invited          | TestFlight         | Most invited households install within a week |
| 2–3   | Crash reports per build                  | TestFlight         | None that repeat                              |
| 2–3   | "Very disappointed" share                | The four questions | 40% or more                                   |
| 4–5   | Page views → installs (conversion)       | App Store Connect  | Rising as screenshots and ratings arrive      |
| 4–5   | Installs by source (search, browse, web) | App Store Connect  | Search share grows as ratings arrive          |
| 4–5   | Trials started, trials that renew        | App Store Connect  | Renewal after the free month                  |
| 4–5   | Ratings count and average, per country   | App Store Connect  | 4.5 or more                                   |

App Store Connect's usage figures cover only people who chose to share them with developers in their
iPhone settings; read them as a trend, not a count.

## Channels left out, and why

- **Product Hunt:** its audience is English-speaking and tech-first; the target household in Lyon or
  Bologna isn't there. Worth one go in English later, after ratings exist.
- **Paid ads:** there is no conversion tracking to judge them by, and Apple Search Ads would be the
  only fit. Revisit after launch with App Store Connect's source figures.
- **Influencers:** not before the app has ratings; a mixed early review costs more than it brings.

## Open questions (owner)

- Which country first, if not all six on one day? One language market (say Switzerland, which has
  three of the four) would let feedback arrive before the rest.
- Who answers support mail, in which languages, and how fast? The support page promises a reply to
  every message.
- Pre-order: yes or no.
