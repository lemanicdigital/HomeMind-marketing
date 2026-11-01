/**
 * The support page and the privacy policy, in English. The other languages are typed against this
 * (PagesCopy), so a missing sentence fails `astro check`.
 *
 * Support answers quote the app's own labels, and each language quotes the app in that language
 * (HomeMind-IOS: src/i18n/<lang>.ts: tabs, settings, reminders, sync, sharing, plan). When a label
 * changes there, it changes here. The privacy policy is written from what the code does (see
 * src/pages/privacy.astro); a change to one language is a change to all four.
 */
export const en = {
  support: {
    title: "Support — Homesky",
    description:
      "Help with the Homesky iPhone app: adding items, reminders, barcodes, sharing a household, exporting or deleting your data, and how to reach us.",
    overline: "Support",
    heading: "How can we help?",
    lead: "Answers to the questions people ask most, using the app’s own words. If yours isn’t here, write to us.",
    topicsLabel: "Topics on this page",
    topics: [
      {
        id: "start",
        title: "Getting started",
        steps: [
          "Tap Add item on Home or Inventory. Only the name is needed; the amount, where it is kept and the best-before date can come later.",
          "To add something with a barcode, tap the barcode button in Inventory’s search field and point the camera at the pack. Next time, scanning the same pack opens the item.",
          "When you buy more, open the item and tap Add a pack, so each pack keeps its own best-before date.",
        ],
      },
      {
        id: "reminders",
        title: "Reminders don’t arrive",
        steps: [
          "In Homesky: Settings → Reminders → turn on “Remind me before things expire”, and choose the time.",
          "In the iPhone’s Settings → Notifications → Homesky, allow notifications. If Homesky says notifications are off, its Open Settings button goes straight there.",
          "Reminders only cover items with a best-before date.",
        ],
      },
      {
        id: "barcode",
        title: "A barcode isn’t recognised",
        steps: [
          "Product names come from Open Food Facts, a free database. Not every product is in it, and the lookup needs you to be signed in.",
          "If nothing is found, type the name you use. The barcode is still saved, so the next scan finds your item.",
        ],
      },
      {
        id: "sync",
        title: "Sharing and another phone",
        steps: [
          "Sign in with Apple in Settings → Sync → Use more than one phone. Without signing in, everything stays on this phone only.",
          "To share your household: Settings → Sharing → Invite someone, and send them the code. It works once, for two days. They enter it under Settings → Sharing → Join a household.",
          "If a change doesn’t appear on the other phone, tap Settings → Sync → Sync now. Anything the server refused is listed under “Couldn’t be saved”, with the reason.",
          "Sync and sharing are part of Homesky Household. If Settings → Sync says “Sync is paused”, the plan is missing or has ended; everything on the phone still works.",
        ],
      },
      {
        id: "plan",
        title: "Homesky Household",
        steps: [
          "Settings → Sync → Homesky Household shows the plan, its price in your currency, and when it renews. One plan covers everyone in the household; people you invite don’t pay.",
          "On a new phone or a new account, open the same screen and tap Restore purchase.",
          "To cancel: the iPhone’s Settings → your name → Subscriptions → Homesky. The plan runs to the end of the period you paid for. For a refund, ask Apple at reportaproblem.apple.com.",
        ],
      },
      {
        id: "language",
        title: "Language",
        steps: [
          "Homesky speaks English, French, German and Italian, and follows your iPhone’s language. To use another one for Homesky only: the iPhone’s Settings → Homesky → Language.",
          "Dates, numbers and units follow your region. What you type, such as item names and places, stays exactly as you wrote it.",
        ],
      },
      {
        id: "data",
        title: "Your data",
        steps: [
          "Settings → Your data → Export everything gives you every item, pack, history entry and list entry as a JSON file.",
          "Settings → Sync → Delete account deletes your account from the server and erases this phone’s copy. A household you shared stays with the others.",
          "The privacy policy lists exactly what is kept, where, and for how long.",
        ],
      },
    ],
    contact: "Contact",
    writeBefore: "Write to ",
    writeAfter:
      ". Say which iPhone and iOS version you use, and what you expected to happen. We answer every message, in English, French, German or Italian.",
    noContact: "A contact address will be published here before the beta opens to testers.",
    policyBefore: "Read the ",
    policyLink: "privacy policy",
    policyAfter: " for what Homesky keeps.",
    back: "Back to the Homesky page",
  },

  privacy: {
    title: "Privacy — Homesky",
    description:
      "What the Homesky iPhone app keeps on your phone, what its server keeps when you sign in, for how long, and how to delete it.",
    overline: "Privacy policy · updated",
    heading: "What Homesky keeps, and for how long",
    lead: "This covers the Homesky iPhone app during its TestFlight beta. It is written from what the app and its server actually do, and it changes when they do.",
    /** Said only by the translations: which version wins if they ever differ. */
    original: "",
    sections: [
      {
        id: "on-the-phone",
        title: "Without an account, nothing leaves your phone",
        body: [
          "Homesky works fully without signing in. Your household, items, stock, history and shopping list are kept in a database on your iPhone, and nothing is sent anywhere.",
          "The camera is used only to read barcodes. Camera images are processed on the phone and never stored or sent; only the barcode number is kept, on the item it belongs to.",
          "Reminders are notifications your phone schedules for itself. No notification server is involved.",
        ],
      },
      {
        id: "account",
        title: "With an account: what the server keeps",
        body: [
          "Signing in uses Sign in with Apple. The server keeps the stable user identifier Apple gives it, and the email address if Apple shares one (it may be a private relay address). Homesky never sees your Apple ID password.",
          "Each signed-in phone has a session that expires on its own; expired sessions are deleted.",
          "To sync, the server keeps a copy of your household: its name, places, items, quantities, dates, how much you used and when, and the shopping list. If you join someone’s household, it also keeps the name you chose to show them.",
          "When you scan a barcode while signed in, the server looks up its product name in the open Open Food Facts database. Only the barcode number is sent to Open Food Facts, not who you are. Names found are cached for 30 days; codes not found, for 7 days.",
        ],
      },
      {
        id: "sharing",
        title: "Sharing a household",
        body: [
          "Everyone in a household sees its contents and each other’s chosen names. Invite codes are stored only as a one-way hash, work once, expire after two days, and are deleted a week after that.",
          "A member can leave at any time, and the owner can remove a member. The household then disappears from their phone at its next sync.",
        ],
      },
      {
        id: "subscription",
        title: "Homesky Household (the subscription)",
        body: [
          "The plan is bought in the app through the App Store. Apple handles the payment; Homesky never sees your card, your Apple ID or your billing address.",
          "To know who has the plan, the server keeps what Apple signs for each subscription: its transaction identifier, which plan it is, when it was bought, when it runs out, and whether it was refunded. Apple also tells the server directly when a subscription renews, ends or is refunded.",
          "A subscription is deleted a year after it runs out. If you delete your account first, the record stays without you, holding no personal details, because Apple keeps billing until you cancel it in your Apple ID’s settings; you can then restore it onto a new account.",
        ],
      },
      {
        id: "logs",
        title: "Server logs and hosting",
        body: [
          "During the beta the server runs on Render, in Frankfurt (EU). Like any web server it logs each request: the time, the address requested (which can include a scanned barcode) and the IP address it came from. The hosting provider keeps these logs for its standard period.",
          "Technical replay records, which stop a change from being applied twice, are deleted after a day.",
        ],
      },
      {
        id: "deletion",
        title: "Deleting your account",
        body: [
          "In the app: Settings → Sync → Delete account. The server deletes your account, every session, and every household only you used. The app then erases the copy on your phone.",
          "A household you shared stays with the people you shared it with, without you. If you owned it, it passes to the member who joined first.",
          "Inside a household that still exists, a deleted item is kept as a marker without its stock, so that every phone learns it was deleted.",
        ],
      },
      {
        id: "never",
        title: "What Homesky does not do",
        body: [
          "No advertising, no analytics, no tracking across apps or websites, and no selling or sharing of your data. The app contains no third-party analytics or advertising code.",
        ],
      },
    ],
    questions: "Questions",
    writeBefore: "Write to ",
    writeAfter: " about anything on this page, or to ask what the server holds about you.",
    noContact: "A contact address will be published here before the beta opens to testers.",
    back: "Back to the Homesky page",
  },
};

export type PagesCopy = typeof en;
