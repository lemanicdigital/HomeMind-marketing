import type { Copy } from "./en";

/** Italiano, dando del tu come nell'app. */
export const it: Copy = {
  meta: {
    title: "HomeMind — sai cosa c’è in casa prima di fare la spesa",
    description:
      "HomeMind sa cosa c’è in casa, cosa scade per primo e cosa sta finendo, e scrive la lista della spesa per te. Presto su iPhone.",
    ogAlt:
      "HomeMind: sai cosa c’è in casa prima di fare la spesa. La schermata Home dell’app, con quello da consumare presto.",
    skip: "Vai al contenuto",
  },

  nav: {
    home: "Pagina iniziale di HomeMind",
    sections: "Sezioni della pagina",
    features: "Funzioni",
    screens: "Schermate",
    pricing: "Prezzi",
    privacy: "Privacy",
    faq: "FAQ",
    support: "Assistenza",
    soon: "Presto disponibile",
    language: "Lingua",
  },

  hero: {
    eyebrow: "Presto su iPhone",
    title: "Sai cosa c’è in casa prima della spesa.",
    lead: "HomeMind sa cosa c’è in casa, cosa scade per primo e cosa sta finendo, e scrive la lista della spesa per te.",
    primary: "Scopri come funziona",
    secondary: "Guarda l’app",
    promises: ["Funziona offline", "Niente pubblicità né tracciamento", "Da condividere in casa"],
    imageAlt:
      "La schermata Home di HomeMind: tre prodotti da usare subito, con spinacini che scadono oggi e latte intero domani.",
    noteWarning: { name: "Latte intero", detail: "Scade domani" },
    noteSuccess: { name: "Olio d’oliva", detail: "Aggiunto alla lista" },
  },

  features: {
    title: "I piccoli conti di casa, fatti per te",
    lead: "Basta comprare il quarto barattolo di qualcosa che ne hai già tre, e ritrovare il quarto una settimana dopo la scadenza.",
    items: [
      {
        title: "Tutto in un posto",
        body: "Cosa hai, quanto e dove sta: il frigo, la dispensa, lo scaffale accanto alla lavatrice.",
      },
      {
        title: "Usalo prima che scada",
        body: "Le date diventano «da consumare oggi» e «ancora 3 giorni», e un solo avviso tranquillo al mattino dice cosa va mangiato.",
      },
      {
        title: "Una lista che si scrive da sola",
        body: "Se finisce, va nella lista della spesa. Se sta finendo, viene suggerito, con il motivo accanto.",
      },
      {
        title: "Scansiona invece di scrivere",
        body: "Inquadra il codice a barre e il nome del prodotto si compila da solo. Scrivere funziona sempre.",
      },
      {
        title: "Una casa, tutti i telefoni",
        body: "Invita le persone con cui vivi. Tutti vedono le stesse scorte e la stessa lista, sempre sincronizzate.",
      },
      {
        title: "Funziona senza campo",
        body: "Il telefono tiene la sua copia, quindi il supermercato interrato non è un problema. Le modifiche si sincronizzano quando torna il segnale.",
      },
    ],
  },

  screens: {
    title: "Schermate calme per un lavoro noioso",
    lead: "Schermate della versione attuale su iPhone, con dati di esempio. Chiaro o scuro, come il tuo telefono. Su un iPhone in italiano l’app è in italiano.",
    items: [
      {
        title: "Oggi, a colpo d’occhio",
        body: "Cosa usare prima e cosa sta finendo. Nient’altro distrae.",
        alt: "La schermata Home: un avviso che tre prodotti sono da usare o controllare, poi la lista «Da consumare presto» con spinacini che scadono oggi, latte intero domani, yogurt greco tra tre giorni e cheddar stagionato tra nove.",
      },
      {
        title: "Tutto quello che hai",
        body: "Diviso per tipo, filtrato su cosa sta finendo o scade, con ricerca e scansione del codice a barre.",
        alt: "La Dispensa in modalità scura, filtrata sui prodotti in scadenza: spinacini, latte intero, yogurt greco, uova e cheddar, ognuno con il posto e la scadenza.",
      },
      {
        title: "Un prodotto, onestamente",
        body: "Quanto ne resta, quando ne servirà altro e perché, e ogni confezione con la sua data.",
        alt: "La scheda del caffè in grani: 250 grammi in casa, segnato in esaurimento, di solito circa 1000 grammi ogni tre settimane, da ricomprare verso il 5 novembre, e una confezione nel pensile della cucina.",
      },
      {
        title: "Una lista che si riempie",
        body: "Quello che finisce si aggiunge da solo. Quello che sta finendo viene suggerito, mai imposto.",
        alt: "La schermata Spesa: sacchi della spazzatura, olio d’oliva segnato «Finito», banane e pane a lievitazione naturale da comprare, poi i suggerimenti per ciò che sta finendo.",
      },
    ],
  },

  how: {
    title: "Tre abitudini, nessun foglio di calcolo",
    steps: [
      {
        title: "Aggiungi quello che hai",
        body: "Scrivilo o scansiona il codice a barre. Quantità e data sono facoltative; HomeMind non finge di sapere quello che non sa.",
      },
      {
        title: "Consuma",
        body: "Tocca «Ne ho usato uno» man mano. HomeMind impara quanto in fretta la tua casa finisce ogni cosa.",
      },
      {
        title: "Fai la spesa con una lista affidabile",
        body: "Quello che è finito c’è già, quello che finirà dopo è suggerito, e niente di quello che hai in dispensa viene comprato due volte.",
      },
    ],
  },

  pricing: {
    title: "Gratis da solo. Un piano per la casa.",
    lead: "Paghi solo ciò che richiede il nostro server: sincronizzazione e condivisione. Tutto il resto è gratis, senza limiti e senza pubblicità.",
    free: {
      name: "Gratis",
      price: "0 €",
      tagline: "Per un telefono, per sempre.",
      items: [
        "Tutto su un iPhone, senza limiti",
        "Scadenze, promemoria e lista della spesa",
        "Scansione dei codici a barre con il nome dei prodotti",
        "Esporta tutti i tuoi dati, quando vuoi",
      ],
    },
    household: {
      name: "HomeMind Household",
      badge: "Primo mese gratis",
      price: "14,99 €",
      per: "all’anno",
      tagline: "Oppure 1,99 € al mese. Un solo piano copre tutta la casa.",
      everything: "Tutto quello di Gratis",
      items: [
        "I tuoi prodotti su tutti i telefoni, sempre allineati",
        "Condividi la casa: chi inviti entra gratis",
        "Una copia fuori dal telefono, per un iPhone nuovo o ripristinato",
      ],
    },
    note: "Si acquista nell’app tramite l’App Store, che mostra il prezzo nella tua valuta. Disdici quando vuoi nelle impostazioni degli abbonamenti del tuo ID Apple. Se il piano finisce, la sincronizzazione va in pausa e dai tuoi telefoni non viene tolto niente.",
  },

  privacy: {
    title: "La tua cucina non riguarda nessun altro",
    lead: "Un inventario di casa sa molto di una famiglia. HomeMind lo tiene prima di tutto sul tuo telefono e raccoglie solo ciò che serve alla sincronizzazione.",
    policy: "Leggi l’informativa sulla privacy",
    points: [
      {
        title: "Tuo, senza account",
        body: "Tutta l’app funziona sul solo telefono. Accedere aggiunge solo sincronizzazione e condivisione.",
      },
      {
        title: "Niente pubblicità né tracciamento",
        body: "Nessuna pubblicità, nessuna analisi della tua spesa, e niente viene venduto a nessuno.",
      },
      {
        title: "Sparisce quando lo decidi tu",
        body: "Elimina l’account nelle Impostazioni e viene cancellato dal server e da ogni telefono.",
      },
    ],
  },

  faq: {
    title: "Domande e risposte",
    items: [
      {
        q: "Perché prima iPhone?",
        a: "Meglio fare bene un telefono che due a metà. Android è previsto, e l’app è costruita per arrivarci senza ricominciare da capo.",
      },
      {
        q: "Servono scaffali smart, un lettore o una base?",
        a: "No. La fotocamera dell’iPhone legge i codici a barre, e si può sempre scrivere. Un codice scansionato serve solo a cercare il nome del prodotto.",
      },
      {
        q: "In che lingue?",
        a: "Italiano, francese, tedesco e inglese, secondo la lingua del tuo iPhone, con date, numeri e unità come si scrivono da te. Poi arriverà l’arabo.",
      },
      {
        q: "Dove sono i miei dati?",
        a: "Sul tuo telefono, così l’app funziona anche in un supermercato interrato senza campo. Accedere è facoltativo e aggiunge un backup, un secondo telefono e la condivisione. I dati sincronizzati sono su server nell’UE (Francoforte).",
      },
      {
        q: "Cosa succede se elimino l’account?",
        a: "Viene eliminato dal server, tutti i telefoni vengono disconnessi e la copia su questo telefono viene cancellata. Una casa condivisa resta agli altri; una che usavi da solo se ne va con il tuo account.",
      },
      {
        q: "Come funziona la condivisione?",
        a: "Una persona invita, l’altra inserisce un codice. Il codice vale una volta e scade dopo due giorni. I membri possono uscire quando vogliono; il proprietario può rimuovere chiunque.",
      },
      {
        q: "Costa qualcosa?",
        a: "Non su un solo telefono: lì tutta l’app è gratis, senza limiti. Sincronizzazione e condivisione richiedono il nostro server, quindi sono HomeMind Household: 14,99 € all’anno o 1,99 € al mese dopo un mese gratis. Un solo piano copre tutta la casa. Niente pubblicità, niente rivendita di dati, nessuna analisi della tua spesa.",
      },
      {
        q: "Posso provare la beta?",
        a: "Non ancora. La beta aprirà su TestFlight e verrà annunciata su questa pagina.",
      },
      {
        q: "Perché questo sito non ha cookie, font esterni o statistiche?",
        a: "Un sito che ti aiuta a tenere d’occhio la cucina non dovrebbe tenere d’occhio te. Qui non si carica niente di terzi e non si misura niente.",
      },
    ],
  },

  launch: {
    title: "Presto su iPhone",
    body: "HomeMind è in fase di test. Poi arriva una beta pubblica su TestFlight di Apple, annunciata proprio qui. Non c’è nessuna newsletter.",
    action: "Domande e risposte",
  },

  footer: {
    tagline: "L’inventario di casa per iPhone. Questo sito non usa cookie e non misura niente.",
    product: "Prodotto",
    help: "Aiuto",
    legal: "Note legali",
    features: "Funzioni",
    how: "Come funziona",
    screens: "Schermate",
    support: "Assistenza",
    faq: "FAQ",
    availability: "Disponibilità",
    policy: "Informativa sulla privacy",
    promise: "La nostra promessa",
    rights: "Tutti i diritti riservati.",
  },
};
