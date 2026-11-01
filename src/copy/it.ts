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
    pricing: "Prezzi",
    privacy: "Privacy",
    faq: "FAQ",
    support: "Assistenza",
    soon: "Presto disponibile",
    language: "Lingua",
  },

  hero: {
    title: "Sai cosa c’è in casa prima della spesa.",
    lead: "HomeMind sa cosa c’è in casa, cosa scade per primo e cosa sta finendo, e scrive la lista della spesa per te.",
    primary: "Scopri come funziona",
    timeLabel: "Home alle",
    times: [
      {
        label: "7:00",
        caption: "Colazione. Un solo avviso tranquillo dice cosa usare oggi.",
      },
      {
        label: "13:00",
        caption: "Al supermercato. La lista sa già cosa è finito.",
      },
      {
        label: "18:30",
        caption: "La spesa arriva a casa. Scansionala mentre la metti via.",
      },
      {
        label: "22:00",
        caption: "Tarda sera. Tutto resta sul tuo telefono, niente viene misurato.",
      },
    ],
    imageAlt:
      "La schermata Home di HomeMind: gli spinacini scadono oggi, il latte intero domani e lo yogurt greco tra 3 giorni; caffè in grani e detersivo per piatti stanno finendo.",
  },

  day: {
    chapters: [
      {
        time: "7:00",
        title: "Usalo prima che scada",
        body: "A colazione, un solo avviso tranquillo dice cosa va mangiato. Le date diventano «Scade oggi» e «Scade tra 3 giorni».",
      },
      {
        time: "13:00",
        title: "Una lista che si scrive da sola",
        body: "Se finisce, va nella lista della spesa. Se sta finendo, viene suggerito, con il motivo accanto.",
      },
      {
        time: "18:30",
        title: "Scansiona invece di scrivere",
        body: "Inquadra il codice a barre e il nome si compila da solo. Serve solo il nome, e scrivere funziona sempre.",
      },
    ],
  },

  showcase: {
    title: "Schermate calme per un lavoro noioso",
    inventory: {
      name: "Tutto quello che hai",
      fact: "Diviso per tipo, ogni tipo con il suo colore.",
      alt: "La Dispensa: otto prodotti, uno per tipo, ognuno con il suo colore: pasta, spinacini, caffè in grani, piselli surgelati, detersivo per bucato, dentifricio, cibo per gatti e pile.",
    },
    list: {
      name: "Una lista che si riempie",
      fact: "Quello che finisce si aggiunge. Quello che sta finendo è solo suggerito.",
      alt: "La Spesa: olio d’oliva e sacchi per rifiuti sono finiti, banane e pane di pasta madre sono da comprare, e caffè in grani e detersivo per piatti sono suggeriti perché stanno finendo.",
    },
  },

  how: {
    title: "Tre gesti, nessun foglio di calcolo",
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
        body: "Quello che è finito c’è già, e quello che finirà dopo è suggerito. Quello che hai ancora in dispensa resta fuori.",
      },
    ],
  },

  pricing: {
    sentence: {
      before: "HomeMind Household costa ",
      price: "14,99 €",
      after: " all’anno per tutta la casa, oppure 1,99 € al mese. Il primo mese è gratis.",
    },
    title: "Gratis da solo. Un piano per la casa.",
    lead: "Paghi solo ciò che richiede il nostro server: sincronizzazione e condivisione. Tutto il resto è gratis, per quanti prodotti vuoi.",
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
    time: "22:00",
    title: "La tua cucina non riguarda nessun altro",
    lead: "Un inventario di casa sa molto di una famiglia. HomeMind lo tiene prima di tutto sul tuo telefono e raccoglie solo ciò che serve alla sincronizzazione.",
    policy: "Leggi l’informativa sulla privacy",
  },

  app: {
    household: "Casa nostra",
    date: "sabato 7 novembre",
    tabs: {
      home: "Home",
      inventory: "Dispensa",
      add: "Aggiungi",
      cook: "Cucina",
      shopping: "Spesa",
    },
    useSoon: "Da consumare presto",
    runningOut: "Stanno finendo",
    toBuy: "Da comprare",
    suggested: "Suggeriti",
    usedOne: "Ne ho usato uno",
    soon: [
      {
        name: "Spinacini",
        detail: "Frigo · Scade oggi",
        qty: "1 busta",
        kind: "fresh",
      },
      {
        name: "Latte intero",
        detail: "Frigo · Scade domani",
        qty: "1 cartone",
        kind: "beverages",
      },
      {
        name: "Yogurt greco",
        detail: "Frigo · Scade tra 3 giorni",
        qty: "2 vasetti",
        kind: "fresh",
      },
    ],
    low: [
      {
        name: "Caffè in grani",
        detail: "Credenza · Sta finendo",
        qty: "250 g",
        kind: "beverages",
      },
      {
        name: "Detersivo per piatti",
        detail: "Sotto il lavello · Sta finendo",
        qty: "1 flacone",
        kind: "cleaning",
      },
    ],
    count: "8 prodotti",
    shelf: [
      {
        name: "Pasta",
        detail: "Credenza",
        qty: "2 pacchi",
        kind: "pantry",
      },
      {
        name: "Spinacini",
        detail: "Frigo · Scade oggi",
        qty: "1 busta",
        kind: "fresh",
      },
      {
        name: "Caffè in grani",
        detail: "Credenza · Sta finendo",
        qty: "250 g",
        kind: "beverages",
      },
      {
        name: "Piselli surgelati",
        detail: "Congelatore",
        qty: "1 busta",
        kind: "frozen",
      },
      {
        name: "Detersivo per bucato",
        detail: "Scaffale della lavatrice",
        qty: "1 flacone",
        kind: "cleaning",
      },
      {
        name: "Dentifricio",
        detail: "Mobiletto del bagno",
        qty: "2 tubetti",
        kind: "bathroom",
      },
      {
        name: "Cibo per gatti",
        detail: "Armadio dell’ingresso",
        qty: "6 scatolette",
        kind: "pet",
      },
      {
        name: "Pile",
        detail: "Cassetto della cucina",
        qty: "4 pile",
        kind: "other",
      },
    ],
    toBuyCount: "4 da comprare",
    buy: [
      {
        name: "Olio d’oliva",
        reason: "Finito",
      },
      {
        name: "Sacchi per rifiuti",
        reason: "Finito",
      },
      {
        name: "Banane",
        reason: "",
      },
      {
        name: "Pane di pasta madre",
        reason: "",
      },
    ],
    suggest: [
      {
        name: "Caffè in grani",
        reason: "Sta finendo",
      },
      {
        name: "Detersivo per piatti",
        reason: "Sta finendo",
      },
    ],
    add: {
      label: "Nome",
      value: "Spinacini",
      category: "Freschi",
      place: "Frigo",
    },
    use: {
      name: "Latte intero",
      qty: "1 cartone",
    },
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
        a: "Non su un solo telefono: lì tutta l’app è gratis, senza limiti. Sincronizzazione e condivisione richiedono il nostro server, quindi sono HomeMind Household: 14,99 € all’anno o 1,99 € al mese dopo un mese gratis. Un solo piano copre tutta la casa.",
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
    place: "Fatto sul lago di Ginevra, in italiano, inglese, francese e tedesco.",
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
