/**
 * The home page's words in English, and the shape the other languages must match (`Copy`). Each
 * language is written for its readers, not translated line by line: see `src/i18n.ts`.
 */
export const en = {
  meta: {
    title: "HomeMind — know what’s at home before you shop",
    description:
      "HomeMind keeps track of what your household has, what goes off first and what is running low, then writes the shopping list for you. Coming soon to iPhone.",
    ogAlt:
      "HomeMind: know what’s at home before you shop. The app’s Home screen, listing what to use soon.",
    skip: "Skip to content",
  },

  nav: {
    home: "HomeMind home page",
    sections: "Sections of this page",
    features: "Features",
    screens: "Screens",
    pricing: "Pricing",
    privacy: "Privacy",
    faq: "FAQ",
    support: "Support",
    soon: "Coming soon",
    language: "Language",
  },

  hero: {
    eyebrow: "Coming soon to iPhone",
    title: "Know what’s at home before you shop.",
    lead: "HomeMind keeps track of what your household has, what goes off first and what is running low, then writes the shopping list for you.",
    primary: "See how it works",
    secondary: "View the app",
    promises: ["Works offline", "No ads, no tracking", "Share with your household"],
    imageAlt:
      "HomeMind's Home screen: three items to use now, with baby spinach expiring today and whole milk tomorrow.",
    noteWarning: { name: "Whole milk", detail: "Expires tomorrow" },
    noteSuccess: { name: "Olive oil", detail: "Added to your list" },
  },

  features: {
    overline: "Features",
    title: "The small arithmetic of a household, done for you",
    lead: "Stop buying a fourth jar of something you already have three of, and finding the fourth one the week after it expired.",
    items: [
      {
        title: "Everything in one place",
        body: "What you have, how much and where it lives: the fridge, the cupboard, the shelf by the washing machine.",
      },
      {
        title: "Use it before it goes off",
        body: "Expiry dates turn into “use today” and “3 days left”, and one calm morning note lists what needs eating.",
      },
      {
        title: "A list that writes itself",
        body: "Run out and it lands on the shopping list. Running low and it is suggested, with the reason beside it.",
      },
      {
        title: "Scan instead of typing",
        body: "Point the camera at a barcode and the product name fills itself in. Typing always works too.",
      },
      {
        title: "One household, every phone",
        body: "Invite the people you live with. Everyone sees the same stock and the same list, kept in sync.",
      },
      {
        title: "Works without a signal",
        body: "Your phone keeps the working copy, so the basement shop is no problem. Changes sync when you are back.",
      },
    ],
  },

  screens: {
    overline: "A look at the app",
    title: "Calm screens for a chore nobody enjoys",
    lead: "Screenshots from the current build on an iPhone, with sample data. Light and dark follow your phone.",
    items: [
      {
        title: "Today, in one look",
        body: "What to use first and what is running out. Nothing else competes for attention.",
        alt: 'The Home screen: a warning that three items need using or checking now, then a "Use soon" list with baby spinach expiring today, whole milk tomorrow, Greek yoghurt in three days and mature cheddar in nine.',
      },
      {
        title: "Everything you have",
        body: "Grouped by kind, filtered to what is low or expiring, searchable, and scannable by barcode.",
        alt: "The Inventory screen in dark mode, filtered to expiring items: baby spinach, whole milk, Greek yoghurt, eggs and cheddar, each with where it is kept and when it expires.",
      },
      {
        title: "One item, honestly",
        body: "How much is left, when you will need more and why, and each pack with its own date.",
        alt: "The detail screen for coffee beans: 250 grams on hand and marked running low, usually about 1000 grams every three weeks, needed again around 5 November, and one pack in the kitchen cupboard.",
      },
      {
        title: "A list that fills itself",
        body: "Things that run out are added for you. Things running low are suggested, never forced.",
        alt: 'The Shopping screen: bin bags, olive oil marked "Ran out", bananas and a sourdough loaf to buy, followed by suggestions for items that are running low.',
      },
    ],
  },

  how: {
    overline: "How it works",
    title: "Three habits, no spreadsheet",
    steps: [
      {
        title: "Add what you have",
        body: "Type it or scan the barcode. A count and a date are optional; HomeMind is honest about what it does not know.",
      },
      {
        title: "Use things up",
        body: "Tap “used one” as you go. HomeMind learns how fast your household gets through each thing.",
      },
      {
        title: "Shop with a list you trust",
        body: "What ran out is already on it, what runs out next is suggested, and nothing in the cupboard is bought twice.",
      },
    ],
  },

  pricing: {
    overline: "Pricing",
    title: "Free on your phone. One plan for the household.",
    lead: "You pay only for what needs our server: sync and sharing. Everything else stays free, with no limits and no ads.",
    free: {
      name: "Free",
      price: "€0",
      tagline: "For one phone, for good.",
      items: [
        "Everything on one iPhone, unlimited",
        "Best-before dates, reminders and the shopping list",
        "Barcode scanning with product names",
        "Export all your data, any time",
      ],
    },
    household: {
      name: "HomeMind Household",
      badge: "First month free",
      price: "€14.99",
      per: "a year",
      tagline: "Or €1.99 a month. One plan covers the whole household.",
      everything: "Everything in Free",
      items: [
        "Your items on all your phones, kept in step",
        "Share the household: everyone you invite joins free",
        "A copy off the phone, for a new or reset iPhone",
      ],
    },
    note: "Bought in the app through the App Store, which shows the price in your currency. Cancel any time in your Apple ID’s subscription settings. If a plan ends, sync pauses and nothing on your phones is removed.",
  },

  privacy: {
    overline: "Privacy",
    title: "Your kitchen is nobody’s business",
    lead: "A household inventory knows a lot about a home. HomeMind keeps it on your phone first and collects only what sync needs.",
    policy: "Read the privacy policy",
    points: [
      {
        title: "Yours without an account",
        body: "The whole app works on your phone alone. Signing in only adds sync and sharing.",
      },
      {
        title: "No ads, no tracking",
        body: "No advertising, no analytics on your shopping, and nothing sold to anyone.",
      },
      {
        title: "Gone when you say so",
        body: "Delete your account in Settings and it is erased from the server and every phone.",
      },
    ],
  },

  faq: {
    overline: "FAQ",
    title: "Questions, answered",
    items: [
      {
        q: "Why iPhone first?",
        a: "We would rather do one phone well than two halfway. Android is planned, and the app is built so it can follow without starting over.",
      },
      {
        q: "Do I need smart shelves, a scanner or a hub?",
        a: "No. Your iPhone’s camera reads barcodes, and typing always works too. A scanned code is used to look up the product’s name and nothing else.",
      },
      {
        q: "Which languages does it speak?",
        a: "English, French, German and Italian, following your iPhone’s language, with dates, numbers and units the way your region writes them. Arabic is next.",
      },
      {
        q: "Where does my data live?",
        a: "On your phone, so the app works in a basement shop with no signal. Signing in is optional and adds a backup, a second phone and sharing. Synced data is kept on servers in the EU (Frankfurt).",
      },
      {
        q: "What happens if I delete my account?",
        a: "It is deleted on the server, every phone is signed out, and this phone’s copy is erased. A household you shared with someone stays with them; one you used alone goes with your account.",
      },
      {
        q: "How does sharing work?",
        a: "One person invites, the other enters a code. The code works once and expires after two days. Members can leave whenever they like; the owner can remove anyone.",
      },
      {
        q: "Will it cost money?",
        a: "Not on one phone: the whole app is free there, with no limits. Sync and sharing need our server, so they are HomeMind Household, €14.99 a year or €1.99 a month after a free month. One plan covers everyone in the household. No ads, no data resale, no analytics on your shopping.",
      },
      {
        q: "Can I try the beta?",
        a: "Not yet. The beta will open on TestFlight, and this page is where it will be announced.",
      },
      {
        q: "Why does this site have no cookies, fonts or analytics?",
        a: "A site about keeping track of your kitchen should not keep track of you. Nothing third-party loads here, and nothing is measured.",
      },
    ],
  },

  launch: {
    title: "Coming soon to iPhone",
    body: "HomeMind is in testing now. A public beta through Apple’s TestFlight comes next, and it will be announced right here. There is no mailing list to join.",
    action: "Questions and answers",
  },

  footer: {
    tagline: "The household inventory for iPhone. This site sets no cookies and runs no analytics.",
    product: "Product",
    help: "Help",
    legal: "Legal",
    features: "Features",
    how: "How it works",
    screens: "Screens",
    support: "Support",
    faq: "FAQ",
    availability: "Availability",
    policy: "Privacy policy",
    promise: "Our privacy promise",
    rights: "All rights reserved.",
    /** After a link to a page that is only in English so far (support, privacy policy). */
    inEnglish: "",
  },
};

export type Copy = typeof en;
