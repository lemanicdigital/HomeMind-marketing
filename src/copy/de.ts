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
    screens: "Bildschirme",
    pricing: "Preise",
    privacy: "Datenschutz",
    faq: "FAQ",
    support: "Hilfe",
    soon: "Bald verfügbar",
    language: "Sprache",
  },

  hero: {
    eyebrow: "Bald auf dem iPhone",
    title: "Vor dem Einkauf wissen, was da ist.",
    lead: "HomeMind weiß, was euer Haushalt da hat, was zuerst abläuft und was knapp wird – und schreibt die Einkaufsliste für dich.",
    primary: "So funktioniert’s",
    secondary: "Die App ansehen",
    promises: ["Funktioniert offline", "Gratis auf einem iPhone", "Mit dem Haushalt teilen"],
    imageAlt:
      "Die Übersicht von HomeMind: drei Artikel, die jetzt dran sind – Babyspinat läuft heute ab, Vollmilch morgen.",
    noteWarning: { name: "Vollmilch", detail: "Läuft morgen ab" },
    noteSuccess: { name: "Olivenöl", detail: "Auf die Liste gesetzt" },
  },

  features: {
    title: "Die Haushaltsrechnung, für dich erledigt",
    lead: "Nie mehr das vierte Glas von etwas kaufen, von dem schon drei im Schrank stehen – und das vierte eine Woche nach Ablauf wiederfinden.",
    items: [
      {
        title: "Alles an einem Ort",
        body: "Was du hast, wie viel und wo es steht: Kühlschrank, Vorratsschrank, das Regal neben der Waschmaschine.",
      },
      {
        title: "Verbrauchen, bevor es schlecht wird",
        body: "Aus Daten wird „Läuft heute ab“ und „Läuft in 3 Tagen ab“, und eine ruhige Nachricht am Morgen sagt, was weg muss.",
      },
      {
        title: "Eine Liste, die sich selbst schreibt",
        body: "Was leer ist, landet auf der Einkaufsliste. Was knapp wird, wird vorgeschlagen, mit dem Grund daneben.",
      },
      {
        title: "Scannen statt tippen",
        body: "Kamera auf den Strichcode, und der Produktname steht da. Tippen geht natürlich auch.",
      },
      {
        title: "Ein Haushalt, alle Telefone",
        body: "Lade die Leute ein, mit denen du wohnst. Alle sehen denselben Vorrat und dieselbe Liste, immer synchron.",
      },
      {
        title: "Funktioniert ohne Empfang",
        body: "Dein Telefon hat die Daten selbst, der Supermarkt im Untergeschoss ist also kein Problem. Synchronisiert wird, sobald du wieder Netz hast.",
      },
    ],
  },

  screens: {
    title: "Ruhige Bildschirme für den Haushalt",
    lead: "Bildschirmfotos der aktuellen Version auf einem iPhone, mit Beispieldaten. Hell und dunkel wie dein Telefon. Auf einem deutschsprachigen iPhone ist die App auf Deutsch.",
    items: [
      {
        title: "Heute, auf einen Blick",
        body: "Was zuerst verbraucht werden sollte und was knapp wird. Sonst nichts, was ablenkt.",
        alt: "Die Übersicht: ein Hinweis, dass drei Artikel jetzt verbraucht oder geprüft werden sollten, darunter „Bald verbrauchen“ mit Babyspinat (läuft heute ab), Vollmilch (morgen), griechischem Joghurt (in drei Tagen) und reifem Cheddar (in neun).",
      },
      {
        title: "Alles, was du hast",
        body: "Nach Art sortiert, auf Knappes oder Ablaufendes gefiltert, durchsuchbar und per Strichcode auffindbar.",
        alt: "Der Vorrat im dunklen Modus, gefiltert auf Ablaufendes: Babyspinat, Vollmilch, griechischer Joghurt, Eier und Cheddar, jeweils mit Ort und Ablaufdatum.",
      },
      {
        title: "Ein Artikel, ehrlich",
        body: "Wie viel noch da ist, wann du mehr brauchst und warum, und jede Packung mit eigenem Datum.",
        alt: "Die Detailansicht für Kaffeebohnen: 250 Gramm vorrätig und als knapp markiert, normalerweise etwa 1000 Gramm alle drei Wochen, wieder nötig um den 5. November, eine Packung im Küchenschrank.",
      },
      {
        title: "Eine Liste, die sich füllt",
        body: "Was leer ist, kommt von selbst dazu. Was knapp wird, wird nur vorgeschlagen; ob es dazukommt, entscheidest du.",
        alt: "Die Einkaufsliste: Müllbeutel, Olivenöl mit „Leer“, Bananen und ein Sauerteigbrot, darunter Vorschläge für Artikel, die knapp werden.",
      },
    ],
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
    title: "Deine Küche geht niemanden etwas an",
    lead: "Ein Haushaltsinventar weiß viel über ein Zuhause. HomeMind behält es zuerst auf deinem Telefon und erhebt nur, was die Synchronisierung braucht.",
    policy: "Datenschutzerklärung lesen",
    points: [
      {
        title: "Deins, ohne Konto",
        body: "Die ganze App funktioniert allein auf deinem Telefon. Die Anmeldung bringt nur Synchronisierung und Teilen dazu.",
      },
      {
        title: "Bezahlt vom Abo",
        body: "HomeMind lebt von HomeMind Household. Die App zeigt keine Werbung, und deine Einkäufe werden weder ausgewertet noch verkauft.",
      },
      {
        title: "Weg, wenn du es sagst",
        body: "Lösch dein Konto in den Einstellungen, und es verschwindet vom Server und von jedem Telefon.",
      },
    ],
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
