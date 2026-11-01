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
    pricing: "Pricing",
    privacy: "Privacy",
    faq: "FAQ",
    support: "Support",
    soon: "Coming soon",
    language: "Language",
  },

  hero: {
    title: "Know what’s at home before you shop.",
    lead: "HomeMind keeps track of what your household has, what goes off first and what is running low, then writes the shopping list for you.",
    primary: "See how it works",
    timeLabel: "See Home at",
    times: [
      {
        label: "7:00",
        caption: "Breakfast. One calm note lists what needs using today.",
      },
      {
        label: "13:00",
        caption: "At the shop. The list already knows what ran out.",
      },
      {
        label: "18:30",
        caption: "The shopping comes home. Scan it in as you put it away.",
      },
      {
        label: "22:00",
        caption: "Late evening. Everything stays on your phone; nothing is measured.",
      },
    ],
    imageAlt:
      "HomeMind’s Home screen: baby spinach expires today, whole milk tomorrow and Greek yoghurt in 3 days; coffee beans and dish soap are running out.",
  },

  day: {
    chapters: [
      {
        time: "7:00",
        title: "Use it before it goes off",
        body: "At breakfast, one calm note lists what needs eating. Dates read “Expires today” and “Expires in 3 days”.",
      },
      {
        time: "13:00",
        title: "A list that writes itself",
        body: "Run out and it lands on the shopping list. Running low and it is suggested, with the reason beside it.",
      },
      {
        time: "18:30",
        title: "Scan instead of typing",
        body: "Point the camera at a barcode and the name fills itself in. Only the name is needed, and typing always works too.",
      },
    ],
  },

  showcase: {
    title: "Calm screens for a chore nobody enjoys",
    inventory: {
      name: "Everything you have",
      fact: "Grouped by kind, each kind in its own colour.",
      alt: "The Inventory screen: eight items, one of each kind, each in its own colour: pasta, baby spinach, coffee beans, frozen peas, laundry liquid, toothpaste, cat food and batteries.",
    },
    list: {
      name: "A list that fills itself",
      fact: "What ran out is added. What runs low is only suggested.",
      alt: "The Shopping screen: olive oil and bin bags ran out, bananas and a sourdough loaf are to buy, and coffee beans and dish soap are suggested because they are running low.",
    },
  },

  how: {
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
        body: "What ran out is already on it, and what runs out next is suggested. What’s still in the cupboard stays off it.",
      },
    ],
  },

  pricing: {
    sentence: {
      before: "HomeMind Household is ",
      price: "€14.99",
      after: " a year for the whole household, or €1.99 a month. The first month is free.",
    },
    title: "Free alone. One plan to share.",
    lead: "You pay only for what needs our server: sync and sharing. Everything else is free, however much you keep track of.",
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
    time: "22:00",
    title: "Your kitchen is nobody’s business",
    lead: "A household inventory knows a lot about a home. HomeMind keeps it on your phone first and collects only what sync needs.",
    policy: "Read the privacy policy",
  },

  app: {
    household: "Our home",
    date: "Saturday 7 November",
    tabs: {
      home: "Home",
      inventory: "Inventory",
      add: "Add",
      cook: "Cook",
      shopping: "Shopping",
    },
    useSoon: "Use soon",
    runningOut: "Running out",
    toBuy: "To buy",
    suggested: "Suggested",
    usedOne: "Used one",
    soon: [
      {
        name: "Baby spinach",
        detail: "Fridge · Expires today",
        qty: "1 bag",
        kind: "fresh",
      },
      {
        name: "Whole milk",
        detail: "Fridge · Expires tomorrow",
        qty: "1 carton",
        kind: "beverages",
      },
      {
        name: "Greek yoghurt",
        detail: "Fridge · Expires in 3 days",
        qty: "2 pots",
        kind: "fresh",
      },
    ],
    low: [
      {
        name: "Coffee beans",
        detail: "Kitchen cupboard · Running low",
        qty: "250 g",
        kind: "beverages",
      },
      {
        name: "Dish soap",
        detail: "Under the sink · Running low",
        qty: "1 bottle",
        kind: "cleaning",
      },
    ],
    count: "8 items",
    shelf: [
      {
        name: "Pasta",
        detail: "Kitchen cupboard",
        qty: "2 packs",
        kind: "pantry",
      },
      {
        name: "Baby spinach",
        detail: "Fridge · Expires today",
        qty: "1 bag",
        kind: "fresh",
      },
      {
        name: "Coffee beans",
        detail: "Kitchen cupboard · Running low",
        qty: "250 g",
        kind: "beverages",
      },
      {
        name: "Frozen peas",
        detail: "Freezer",
        qty: "1 bag",
        kind: "frozen",
      },
      {
        name: "Laundry liquid",
        detail: "Shelf by the washing machine",
        qty: "1 bottle",
        kind: "cleaning",
      },
      {
        name: "Toothpaste",
        detail: "Bathroom cabinet",
        qty: "2 tubes",
        kind: "bathroom",
      },
      {
        name: "Cat food",
        detail: "Hall cupboard",
        qty: "6 tins",
        kind: "pet",
      },
      {
        name: "Batteries",
        detail: "Kitchen drawer",
        qty: "4 pieces",
        kind: "other",
      },
    ],
    toBuyCount: "4 to buy",
    buy: [
      {
        name: "Olive oil",
        reason: "Ran out",
      },
      {
        name: "Bin bags",
        reason: "Ran out",
      },
      {
        name: "Bananas",
        reason: "",
      },
      {
        name: "Sourdough loaf",
        reason: "",
      },
    ],
    suggest: [
      {
        name: "Coffee beans",
        reason: "Running low",
      },
      {
        name: "Dish soap",
        reason: "Running low",
      },
    ],
    add: {
      label: "Name",
      value: "Baby spinach",
      category: "Fresh",
      place: "Fridge",
    },
    use: {
      name: "Whole milk",
      qty: "1 carton",
    },
  },

  faq: {
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
        a: "Not on one phone: the whole app is free there, with no limits. Sync and sharing need our server, so they are HomeMind Household, €14.99 a year or €1.99 a month after a free month. One plan covers everyone in the household.",
      },
      {
        q: "Can I try the beta?",
        a: "Not yet. The beta will open on TestFlight, and this page is where it will be announced.",
      },
      {
        q: "Why does this site have no cookies or analytics?",
        a: "A site about keeping track of your kitchen should not keep track of you. Everything here, the font included, comes from this site, and nothing is measured.",
      },
    ],
  },

  launch: {
    title: "Coming soon to iPhone",
    body: "HomeMind is in testing now. A public beta through Apple’s TestFlight comes next, and it will be announced right here. There is no mailing list to join.",
    action: "Questions and answers",
  },

  footer: {
    place: "Made by Lake Geneva, in English, French, German and Italian.",
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
  },
};

export type Copy = typeof en;
