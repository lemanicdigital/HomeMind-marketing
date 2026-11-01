import type { PagesCopy } from "./en";

/** Deutsch, mit „du“ wie auf der Startseite und in der App. Bezeichnungen in Anführungszeichen sind die der deutschen App. */
export const de: PagesCopy = {
  support: {
    title: "Hilfe — Homesky",
    description:
      "Hilfe zur Homesky-App für iPhone: Artikel hinzufügen, Erinnerungen, Strichcodes, einen Haushalt teilen, Daten exportieren oder löschen, und wie du uns erreichst.",
    overline: "Hilfe",
    heading: "Wie können wir helfen?",
    lead: "Antworten auf die häufigsten Fragen, mit den Worten der App. Ist deine nicht dabei, schreib uns.",
    topicsLabel: "Themen auf dieser Seite",
    topics: [
      {
        id: "start",
        title: "Erste Schritte",
        steps: [
          "Tippe in Übersicht oder Vorrat auf Hinzufügen. Nur der Name ist nötig; Menge, Aufbewahrungsort und Mindesthaltbarkeitsdatum können später folgen.",
          "Um etwas mit Strichcode hinzuzufügen, tippe im Suchfeld von Vorrat auf die Strichcode-Taste und richte die Kamera auf die Packung. Beim nächsten Mal öffnet derselbe Scan den Artikel.",
          "Wenn du nachkaufst, öffne den Artikel und tippe auf Packung hinzufügen. So behält jede Packung ihr eigenes Datum.",
        ],
      },
      {
        id: "reminders",
        title: "Erinnerungen kommen nicht an",
        steps: [
          "In Homesky: Einstellungen → Erinnerungen → „Vor dem Ablaufdatum erinnern“ einschalten und die Uhrzeit wählen.",
          "In den Einstellungen des iPhones → Mitteilungen → Homesky die Mitteilungen erlauben. Meldet Homesky, dass sie aus sind, führt die Taste Einstellungen öffnen direkt dorthin.",
          "Erinnerungen gibt es nur für Artikel mit Datum.",
        ],
      },
      {
        id: "barcode",
        title: "Ein Strichcode wird nicht erkannt",
        steps: [
          "Produktnamen kommen von Open Food Facts, einer freien Datenbank. Nicht jedes Produkt ist dort erfasst, und die Suche setzt eine Anmeldung voraus.",
          "Wird nichts gefunden, tippe den Namen ein, den du verwendest. Der Strichcode wird trotzdem gespeichert, und der nächste Scan findet deinen Artikel.",
        ],
      },
      {
        id: "sync",
        title: "Teilen und ein zweites Telefon",
        steps: [
          "Melde dich unter Einstellungen → Synchronisierung → Mehr als ein Telefon nutzen mit Apple an. Ohne Anmeldung bleibt alles nur auf diesem Telefon.",
          "Um deinen Haushalt zu teilen: Einstellungen → Teilen → Jemanden einladen, und den Code weitergeben. Er gilt einmal, zwei Tage lang. Die andere Person gibt ihn unter Einstellungen → Teilen → Einem Haushalt beitreten ein.",
          "Erscheint eine Änderung nicht auf dem anderen Telefon, tippe auf Einstellungen → Synchronisierung → Jetzt synchronisieren. Was der Server abgelehnt hat, steht mit Grund unter „Nicht gespeichert“.",
          "Synchronisierung und Teilen gehören zu Homesky Household. Zeigt Einstellungen → Synchronisierung „Synchronisierung pausiert“, fehlt das Abo oder ist abgelaufen; auf dem Telefon funktioniert weiterhin alles.",
        ],
      },
      {
        id: "plan",
        title: "Homesky Household",
        steps: [
          "Einstellungen → Synchronisierung → Homesky Household zeigt das Abo, seinen Preis in deiner Währung und wann es sich verlängert. Ein Abo gilt für den ganzen Haushalt; eingeladene Personen zahlen nichts.",
          "Auf einem neuen Telefon oder mit einem neuen Konto öffnest du dieselbe Ansicht und tippst auf Kauf wiederherstellen.",
          "Kündigen: Einstellungen des iPhones → dein Name → Abonnements → Homesky. Das Abo läuft bis zum Ende des bezahlten Zeitraums. Eine Erstattung beantragst du bei Apple unter reportaproblem.apple.com.",
        ],
      },
      {
        id: "language",
        title: "Sprache",
        steps: [
          "Homesky spricht Deutsch, Französisch, Italienisch und Englisch und folgt der Sprache deines iPhones. Eine andere Sprache nur für Homesky: Einstellungen des iPhones → Homesky → Sprache.",
          "Datum, Zahlen und Einheiten richten sich nach deiner Region; in der Schweiz und in Liechtenstein schreibt Homesky „ss“ statt „ß“. Was du selbst eintippst, etwa Artikel und Orte, bleibt genau so, wie du es geschrieben hast.",
        ],
      },
      {
        id: "data",
        title: "Deine Daten",
        steps: [
          "Einstellungen → Deine Daten → Alles exportieren gibt dir jeden Artikel, jede Packung, jeden Verlaufseintrag und jeden Listeneintrag als JSON-Datei.",
          "Einstellungen → Synchronisierung → Konto löschen löscht dein Konto auf dem Server und die Kopie auf diesem Telefon. Ein geteilter Haushalt bleibt den anderen erhalten.",
          "Die Datenschutzerklärung führt genau auf, was wo und wie lange gespeichert wird.",
        ],
      },
    ],
    contact: "Kontakt",
    writeBefore: "Schreib an ",
    writeAfter:
      ". Nenne dein iPhone-Modell, deine iOS-Version und was du erwartet hast. Wir beantworten jede Nachricht, auf Deutsch, Französisch, Italienisch oder Englisch.",
    noContact:
      "Eine Kontaktadresse wird hier veröffentlicht, bevor die Beta für Testerinnen und Tester öffnet.",
    policyBefore: "In der ",
    policyLink: "Datenschutzerklärung",
    policyAfter: " steht, was Homesky speichert.",
    back: "Zurück zur Homesky-Seite",
  },

  privacy: {
    title: "Datenschutz — Homesky",
    description:
      "Was die Homesky-App für iPhone auf deinem Telefon speichert, was ihr Server bei einer Anmeldung speichert, wie lange, und wie du es löschst.",
    overline: "Datenschutzerklärung · aktualisiert am",
    heading: "Was Homesky speichert, und wie lange",
    lead: "Diese Erklärung gilt für die Homesky-App für iPhone während der TestFlight-Beta. Sie beschreibt, was App und Server tatsächlich tun, und ändert sich, wenn diese sich ändern.",
    original: "Diese Seite übersetzt die englische Fassung; bei Abweichungen gilt die englische.",
    sections: [
      {
        id: "on-the-phone",
        title: "Ohne Konto verlässt nichts dein Telefon",
        body: [
          "Homesky funktioniert vollständig ohne Anmeldung. Dein Haushalt, deine Artikel, dein Vorrat, der Verlauf und die Einkaufsliste liegen in einer Datenbank auf deinem iPhone, und nichts wird irgendwohin gesendet.",
          "Die Kamera dient nur zum Lesen von Strichcodes. Die Bilder werden auf dem Telefon verarbeitet und weder gespeichert noch gesendet; nur die Strichcode-Nummer wird beim zugehörigen Artikel gespeichert.",
          "Erinnerungen sind Mitteilungen, die dein Telefon selbst plant. Kein Mitteilungsserver ist beteiligt.",
        ],
      },
      {
        id: "account",
        title: "Mit Konto: was der Server speichert",
        body: [
          "Die Anmeldung erfolgt über „Mit Apple anmelden“. Der Server speichert die feste Benutzerkennung, die Apple übergibt, und die E-Mail-Adresse, falls Apple eine teilt (es kann eine private Weiterleitungsadresse sein). Homesky sieht dein Apple-ID-Passwort nie.",
          "Jedes angemeldete Telefon hat eine Sitzung, die von selbst abläuft; abgelaufene Sitzungen werden gelöscht.",
          "Zum Synchronisieren speichert der Server eine Kopie deines Haushalts: Name, Orte, Artikel, Mengen, Daten, wie viel du wann verbraucht hast, und die Einkaufsliste. Trittst du dem Haushalt einer anderen Person bei, speichert er auch den Namen, den du ihr zeigst.",
          "Scannst du angemeldet einen Strichcode, sucht der Server den Produktnamen in der offenen Datenbank Open Food Facts. An Open Food Facts geht nur die Strichcode-Nummer, nicht, wer du bist. Gefundene Namen werden 30 Tage zwischengespeichert, nicht gefundene Codes 7 Tage.",
        ],
      },
      {
        id: "sharing",
        title: "Einen Haushalt teilen",
        body: [
          "Alle in einem Haushalt sehen seinen Inhalt und die gewählten Namen der anderen. Einladungscodes werden nur als Einweg-Hash gespeichert, gelten einmal, laufen nach zwei Tagen ab und werden eine Woche danach gelöscht.",
          "Mitglieder können jederzeit austreten, und die Eigentümerin oder der Eigentümer kann Mitglieder entfernen. Der Haushalt verschwindet dann bei der nächsten Synchronisierung von deren Telefon.",
        ],
      },
      {
        id: "subscription",
        title: "Homesky Household (das Abo)",
        body: [
          "Das Abo wird in der App über den App Store gekauft. Apple wickelt die Zahlung ab; Homesky sieht weder deine Karte noch deine Apple-ID noch deine Rechnungsadresse.",
          "Um zu wissen, wer das Abo hat, speichert der Server, was Apple für jedes Abo signiert: die Transaktionskennung, welches Abo es ist, wann es gekauft wurde, wann es endet und ob es erstattet wurde. Apple teilt dem Server außerdem direkt mit, wenn ein Abo verlängert, beendet oder erstattet wird.",
          "Ein Abo wird ein Jahr nach seinem Ende gelöscht. Löschst du dein Konto vorher, bleibt der Eintrag ohne dich und ohne persönliche Angaben bestehen, denn Apple bucht weiter ab, bis du in den Einstellungen deiner Apple-ID kündigst; du kannst es dann auf ein neues Konto wiederherstellen.",
        ],
      },
      {
        id: "logs",
        title: "Server-Protokolle und Hosting",
        body: [
          "Während der Beta läuft der Server bei Render in Frankfurt (EU). Wie jeder Webserver protokolliert er jede Anfrage: die Uhrzeit, die angefragte Adresse (die einen gescannten Strichcode enthalten kann) und die IP-Adresse, von der sie kam. Der Hosting-Anbieter bewahrt diese Protokolle für seinen üblichen Zeitraum auf.",
          "Technische Einträge gegen doppelte Ausführung, die verhindern, dass eine Änderung zweimal angewendet wird, werden nach einem Tag gelöscht.",
        ],
      },
      {
        id: "deletion",
        title: "Dein Konto löschen",
        body: [
          "In der App: Einstellungen → Synchronisierung → Konto löschen. Der Server löscht dein Konto, jede Sitzung und jeden Haushalt, den nur du genutzt hast. Danach löscht die App die Kopie auf deinem Telefon.",
          "Ein geteilter Haushalt bleibt den Personen erhalten, mit denen du ihn geteilt hast, ohne dich. Gehörte er dir, geht er an das Mitglied über, das zuerst beigetreten ist.",
          "In einem Haushalt, der weiter besteht, bleibt ein gelöschter Artikel als Markierung ohne Bestand erhalten, damit jedes Telefon von der Löschung erfährt.",
        ],
      },
      {
        id: "never",
        title: "Was Homesky nicht tut",
        body: [
          "Keine Werbung, keine Analyse, kein Tracking über Apps oder Websites hinweg, und kein Verkauf oder Weitergeben deiner Daten. Die App enthält keinen Analyse- oder Werbecode von Dritten.",
        ],
      },
    ],
    questions: "Fragen",
    writeBefore: "Schreib an ",
    writeAfter:
      ", wenn du Fragen zu dieser Seite hast oder wissen möchtest, was der Server über dich gespeichert hat.",
    noContact:
      "Eine Kontaktadresse wird hier veröffentlicht, bevor die Beta für Testerinnen und Tester öffnet.",
    back: "Zurück zur Homesky-Seite",
  },
};
