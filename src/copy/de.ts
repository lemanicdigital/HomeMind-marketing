import type { Copy } from "./en";

/** Deutsch, per Du wie in der App, in der Schreibung Deutschlands und Österreichs (die App selbst schreibt in der Schweiz ss). */
export const de: Copy = {
  meta: {
    title: "HomeMind — wissen, was zu Hause ist, bevor du einkaufst",
    description:
      "HomeMind weiß, was euer Haushalt da hat, was zuerst abläuft und was knapp wird – und schreibt die Einkaufsliste für dich. Bald auf dem iPhone.",
    ogAlt:
      "HomeMind: wissen, was zu Hause ist, bevor du einkaufst. Die Übersicht der App mit allem, was bald weg muss.",
    skip: "Zum Inhalt",
  },

  nav: {
    home: "HomeMind Startseite",
    sections: "Bereiche dieser Seite",
    features: "Funktionen",
    pricing: "Preise",
    privacy: "Datenschutz",
    faq: "FAQ",
    support: "Hilfe",
    soon: "Bald verfügbar",
    language: "Sprache",
  },

  hero: {
    title: "Vor dem Einkauf wissen, was da ist.",
    lead: "HomeMind weiß, was euer Haushalt da hat, was zuerst abläuft und was knapp wird – und schreibt die Einkaufsliste für dich.",
    primary: "So funktioniert’s",
    timeLabel: "Übersicht um",
    times: [
      {
        label: "7:00",
        caption: "Frühstück. Eine ruhige Nachricht sagt, was heute weg muss.",
      },
      {
        label: "13:00",
        caption: "Im Laden. Die Liste weiß schon, was leer ist.",
      },
      {
        label: "18:30",
        caption: "Der Einkauf kommt heim. Scanne ihn beim Einräumen.",
      },
      {
        label: "22:00",
        caption: "Später Abend. Alles bleibt auf deinem Telefon, nichts wird gemessen.",
      },
    ],
    imageAlt:
      "Die Übersicht von HomeMind: Babyspinat läuft heute ab, Vollmilch morgen und griechischer Joghurt in 3 Tagen; Kaffeebohnen und Spülmittel werden knapp.",
  },

  day: {
    chapters: [
      {
        time: "7:00",
        title: "Verbrauchen, bevor es schlecht wird",
        body: "Beim Frühstück sagt eine ruhige Nachricht, was weg muss. Aus Daten wird „Läuft heute ab“ und „Läuft in 3 Tagen ab“.",
      },
      {
        time: "13:00",
        title: "Eine Liste, die sich selbst schreibt",
        body: "Was leer ist, landet auf der Einkaufsliste. Was knapp wird, wird vorgeschlagen, mit dem Grund daneben.",
      },
      {
        time: "18:30",
        title: "Scannen statt tippen",
        body: "Kamera auf den Strichcode, und der Name steht da. Nur der Name ist nötig, und Tippen geht immer.",
      },
    ],
  },

  showcase: {
    title: "Ruhige Bildschirme für den Haushalt",
    inventory: {
      name: "Alles, was du hast",
      fact: "Nach Art sortiert, jede Art in ihrer Farbe.",
      alt: "Der Vorrat: acht Artikel, einer pro Art, jeder in seiner Farbe: Nudeln, Babyspinat, Kaffeebohnen, Tiefkühlerbsen, Waschmittel, Zahnpasta, Katzenfutter und Batterien.",
    },
    list: {
      name: "Eine Liste, die sich füllt",
      fact: "Was leer ist, kommt dazu. Was knapp wird, wird nur vorgeschlagen.",
      alt: "Der Einkauf: Olivenöl und Müllbeutel sind leer, Bananen und ein Sauerteigbrot sind zu kaufen, und Kaffeebohnen und Spülmittel werden vorgeschlagen, weil sie knapp werden.",
    },
  },

  how: {
    title: "Drei Gewohnheiten, keine Tabelle",
    steps: [
      {
        title: "Erfassen, was da ist",
        body: "Eintippen oder Strichcode scannen. Menge und Datum sind optional; HomeMind tut nicht so, als wüsste es, was es nicht weiß.",
      },
      {
        title: "Verbrauchen",
        body: "Tipp nebenbei auf „Eins verbraucht“. HomeMind lernt, wie schnell euer Haushalt was aufbraucht.",
      },
      {
        title: "Mit verlässlicher Liste einkaufen",
        body: "Was leer ist, steht schon drauf, und was als Nächstes ausgeht, wird vorgeschlagen. Was noch im Schrank ist, bleibt weg.",
      },
    ],
  },

  pricing: {
    sentence: {
      before: "HomeMind Household kostet ",
      price: "14,99 €",
      after:
        " pro Jahr für den ganzen Haushalt, oder 1,99 € pro Monat. Der erste Monat ist gratis.",
    },
    title: "Allein gratis. Ein Abo fürs ganze Haus.",
    lead: "Du zahlst nur, was unseren Server braucht: Synchronisierung und Teilen. Alles andere bleibt gratis, egal wie viel du einträgst.",
    free: {
      name: "Gratis",
      price: "0 €",
      tagline: "Für ein Telefon, für immer.",
      items: [
        "Alles auf einem iPhone, unbegrenzt",
        "Haltbarkeitsdaten, Erinnerungen und Einkaufsliste",
        "Strichcode-Scan mit Produktnamen",
        "Alle Daten exportieren, jederzeit",
      ],
    },
    household: {
      name: "HomeMind Household",
      badge: "Erster Monat gratis",
      price: "14,99 €",
      per: "pro Jahr",
      tagline: "Oder 1,99 € pro Monat. Ein Abo gilt für den ganzen Haushalt.",
      everything: "Alles aus Gratis",
      items: [
        "Deine Artikel auf allen Telefonen, immer gleich",
        "Haushalt teilen: alle, die du einlädst, sind gratis dabei",
        "Eine Kopie außerhalb des Telefons, für ein neues oder zurückgesetztes iPhone",
      ],
    },
    note: "Gekauft in der App über den App Store, der den Preis in deiner Währung zeigt. Jederzeit kündbar in den Abo-Einstellungen deiner Apple-ID. Endet das Abo, pausiert die Synchronisierung, und auf deinen Telefonen wird nichts gelöscht.",
  },

  privacy: {
    time: "22:00",
    title: "Deine Küche geht niemanden etwas an",
    lead: "Ein Haushaltsinventar weiß viel über ein Zuhause. HomeMind behält es zuerst auf deinem Telefon und erhebt nur, was die Synchronisierung braucht.",
    policy: "Datenschutzerklärung lesen",
  },

  app: {
    household: "Unser Zuhause",
    date: "Samstag, 7. November",
    tabs: {
      home: "Übersicht",
      inventory: "Vorrat",
      add: "Hinzufügen",
      cook: "Kochen",
      shopping: "Einkauf",
    },
    useSoon: "Bald verbrauchen",
    runningOut: "Wird knapp",
    toBuy: "Zu kaufen",
    suggested: "Vorschläge",
    usedOne: "Eins verbraucht",
    soon: [
      {
        name: "Babyspinat",
        detail: "Kühlschrank · Läuft heute ab",
        qty: "1 Beutel",
        kind: "fresh",
      },
      {
        name: "Vollmilch",
        detail: "Kühlschrank · Läuft morgen ab",
        qty: "1 Packung",
        kind: "beverages",
      },
      {
        name: "Griechischer Joghurt",
        detail: "Kühlschrank · Läuft in 3 Tagen ab",
        qty: "2 Becher",
        kind: "fresh",
      },
    ],
    low: [
      {
        name: "Kaffeebohnen",
        detail: "Küchenschrank · Wird knapp",
        qty: "250 g",
        kind: "beverages",
      },
      {
        name: "Spülmittel",
        detail: "Unter der Spüle · Wird knapp",
        qty: "1 Flasche",
        kind: "cleaning",
      },
    ],
    count: "8 Artikel",
    shelf: [
      {
        name: "Nudeln",
        detail: "Küchenschrank",
        qty: "2 Packungen",
        kind: "pantry",
      },
      {
        name: "Babyspinat",
        detail: "Kühlschrank · Läuft heute ab",
        qty: "1 Beutel",
        kind: "fresh",
      },
      {
        name: "Kaffeebohnen",
        detail: "Küchenschrank · Wird knapp",
        qty: "250 g",
        kind: "beverages",
      },
      {
        name: "Tiefkühlerbsen",
        detail: "Tiefkühler",
        qty: "1 Beutel",
        kind: "frozen",
      },
      {
        name: "Waschmittel",
        detail: "Regal bei der Waschmaschine",
        qty: "1 Flasche",
        kind: "cleaning",
      },
      {
        name: "Zahnpasta",
        detail: "Badezimmerschrank",
        qty: "2 Tuben",
        kind: "bathroom",
      },
      {
        name: "Katzenfutter",
        detail: "Flurschrank",
        qty: "6 Dosen",
        kind: "pet",
      },
      {
        name: "Batterien",
        detail: "Küchenschublade",
        qty: "4 Stück",
        kind: "other",
      },
    ],
    toBuyCount: "4 zu kaufen",
    buy: [
      {
        name: "Olivenöl",
        reason: "Leer",
      },
      {
        name: "Müllbeutel",
        reason: "Leer",
      },
      {
        name: "Bananen",
        reason: "",
      },
      {
        name: "Sauerteigbrot",
        reason: "",
      },
    ],
    suggest: [
      {
        name: "Kaffeebohnen",
        reason: "Wird knapp",
      },
      {
        name: "Spülmittel",
        reason: "Wird knapp",
      },
    ],
    add: {
      label: "Name",
      value: "Babyspinat",
      category: "Frisch",
      place: "Kühlschrank",
    },
    use: {
      name: "Vollmilch",
      qty: "1 Packung",
    },
  },

  faq: {
    title: "Fragen und Antworten",
    items: [
      {
        q: "Warum zuerst iPhone?",
        a: "Lieber ein Telefon richtig als zwei halb. Android ist geplant, und die App ist so gebaut, dass es folgen kann, ohne von vorn anzufangen.",
      },
      {
        q: "Brauche ich smarte Regale, einen Scanner oder eine Basisstation?",
        a: "Nein. Die Kamera deines iPhones liest Strichcodes, und tippen geht immer. Ein gescannter Code dient nur dazu, den Produktnamen nachzuschlagen.",
      },
      {
        q: "Welche Sprachen spricht die App?",
        a: "Deutsch, Französisch, Italienisch und Englisch, je nach Sprache deines iPhones, mit Datum, Zahlen und Einheiten so, wie man sie bei dir schreibt. Arabisch kommt als Nächstes.",
      },
      {
        q: "Wo liegen meine Daten?",
        a: "Auf deinem Telefon, damit die App auch im Untergeschoss ohne Empfang funktioniert. Die Anmeldung ist optional und bringt eine Sicherung, ein zweites Telefon und das Teilen. Synchronisierte Daten liegen auf Servern in der EU (Frankfurt).",
      },
      {
        q: "Was passiert, wenn ich mein Konto lösche?",
        a: "Es wird auf dem Server gelöscht, alle Telefone werden abgemeldet, und die Kopie auf diesem Telefon wird entfernt. Ein geteilter Haushalt bleibt bei den anderen; einer, den du allein genutzt hast, geht mit deinem Konto.",
      },
      {
        q: "Wie funktioniert das Teilen?",
        a: "Eine Person lädt ein, die andere gibt einen Code ein. Der Code gilt einmal und läuft nach zwei Tagen ab. Mitglieder können jederzeit gehen; der Inhaber kann alle entfernen.",
      },
      {
        q: "Kostet das etwas?",
        a: "Nicht auf einem Telefon: Dort ist die ganze App gratis, ohne Grenzen. Synchronisierung und Teilen brauchen unseren Server, das ist HomeMind Household: 14,99 € pro Jahr oder 1,99 € pro Monat nach einem Gratismonat. Ein Abo gilt für den ganzen Haushalt.",
      },
      {
        q: "Kann ich die Beta testen?",
        a: "Noch nicht. Die Beta startet auf TestFlight und wird hier angekündigt.",
      },
      {
        q: "Warum hat diese Seite keine Cookies, keine fremden Schriften und keine Statistik?",
        a: "Eine Seite, die beim Überblick über deine Küche hilft, sollte dich nicht überwachen. Hier lädt nichts von Dritten, und nichts wird gemessen.",
      },
    ],
  },

  launch: {
    title: "Bald auf dem iPhone",
    body: "HomeMind ist gerade im Test. Als Nächstes kommt eine öffentliche Beta über Apples TestFlight, angekündigt genau hier. Es gibt keinen Newsletter.",
    action: "Fragen und Antworten",
  },

  footer: {
    place: "Gemacht am Genfersee, auf Deutsch, Englisch, Französisch und Italienisch.",
    tagline: "Das Haushaltsinventar fürs iPhone. Diese Seite setzt keine Cookies und misst nichts.",
    product: "Produkt",
    help: "Hilfe",
    legal: "Rechtliches",
    features: "Funktionen",
    how: "So funktioniert’s",
    screens: "Bildschirme",
    support: "Hilfe",
    faq: "FAQ",
    availability: "Verfügbarkeit",
    policy: "Datenschutz\u00ADerklärung",
    promise: "Unser Datenschutz\u00ADversprechen",
    rights: "Alle Rechte vorbehalten.",
  },
};
