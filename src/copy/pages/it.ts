import type { PagesCopy } from "./en";

/** Italiano, dando del tu come nell’app. Le etichette tra virgolette sono quelle dell’app in italiano. */
export const it: PagesCopy = {
  support: {
    title: "Assistenza — HomeMind",
    description:
      "Aiuto per l’app HomeMind su iPhone: aggiungere prodotti, promemoria, codici a barre, condividere la casa, esportare o eliminare i dati, e come scriverci.",
    overline: "Assistenza",
    heading: "Come possiamo aiutarti?",
    lead: "Le risposte alle domande più frequenti, con le parole dell’app. Se la tua non c’è, scrivici.",
    topicsLabel: "Argomenti di questa pagina",
    topics: [
      {
        id: "start",
        title: "Per iniziare",
        steps: [
          "Tocca Aggiungi in Home o in Dispensa. Serve solo il nome; quantità, posto e data di scadenza possono arrivare dopo.",
          "Per aggiungere un prodotto con il codice a barre, tocca il pulsante del codice a barre nel campo di ricerca della Dispensa e inquadra la confezione. La volta dopo, scansionare la stessa confezione apre il prodotto.",
          "Quando ne ricompri, apri il prodotto e tocca Aggiungi una confezione: ogni confezione tiene la sua data.",
        ],
      },
      {
        id: "reminders",
        title: "I promemoria non arrivano",
        steps: [
          "In HomeMind: Impostazioni → Promemoria → attiva «Avvisami prima delle scadenze» e scegli l’ora.",
          "Nelle Impostazioni dell’iPhone → Notifiche → HomeMind, consenti le notifiche. Se HomeMind dice che sono disattivate, il suo pulsante Apri Impostazioni porta direttamente lì.",
          "I promemoria riguardano solo i prodotti con una data di scadenza.",
        ],
      },
      {
        id: "barcode",
        title: "Un codice a barre non viene riconosciuto",
        steps: [
          "I nomi dei prodotti vengono da Open Food Facts, un database libero. Non tutti i prodotti ci sono, e la ricerca richiede di aver effettuato l’accesso.",
          "Se non si trova niente, scrivi il nome che usi tu. Il codice a barre viene salvato comunque, così la prossima scansione trova il tuo prodotto.",
        ],
      },
      {
        id: "sync",
        title: "Condivisione e un altro telefono",
        steps: [
          "Accedi con Apple in Impostazioni → Sincronizzazione → Usa più di un telefono. Senza accesso, tutto resta solo su questo telefono.",
          "Per condividere la casa: Impostazioni → Condivisione → Invita qualcuno, e manda il codice. Vale una volta, per due giorni. L’altra persona lo inserisce in Impostazioni → Condivisione → Unisciti a una casa.",
          "Se una modifica non compare sull’altro telefono, tocca Impostazioni → Sincronizzazione → Sincronizza ora. Quello che il server ha rifiutato è elencato sotto «Non salvato», con il motivo.",
          "Sincronizzazione e condivisione fanno parte di HomeMind Household. Se Impostazioni → Sincronizzazione mostra «Sincronizzazione in pausa», il piano manca o è scaduto; sul telefono tutto continua a funzionare.",
        ],
      },
      {
        id: "plan",
        title: "HomeMind Household",
        steps: [
          "Impostazioni → Sincronizzazione → HomeMind Household mostra il piano, il prezzo nella tua valuta e quando si rinnova. Un solo piano copre tutta la casa; chi inviti non paga.",
          "Su un telefono nuovo o con un nuovo account, apri la stessa schermata e tocca Ripristina acquisto.",
          "Per disdire: Impostazioni dell’iPhone → il tuo nome → Abbonamenti → HomeMind. Il piano dura fino alla fine del periodo pagato. Per un rimborso, chiedi ad Apple su reportaproblem.apple.com.",
        ],
      },
      {
        id: "language",
        title: "Lingua",
        steps: [
          "HomeMind parla italiano, francese, tedesco e inglese, e segue la lingua del tuo iPhone. Per usarne un’altra solo per HomeMind: Impostazioni dell’iPhone → HomeMind → Lingua.",
          "Date, numeri e unità seguono la tua regione. Quello che scrivi tu, come i nomi dei prodotti e dei posti, resta esattamente come l’hai scritto.",
        ],
      },
      {
        id: "data",
        title: "I tuoi dati",
        steps: [
          "Impostazioni → I tuoi dati → Esporta tutto ti dà ogni prodotto, confezione, voce della cronologia e voce della lista in un file JSON.",
          "Impostazioni → Sincronizzazione → Elimina account elimina il tuo account dal server e cancella la copia su questo telefono. Una casa condivisa resta agli altri.",
          "L’informativa sulla privacy elenca esattamente cosa viene conservato, dove e per quanto tempo.",
        ],
      },
    ],
    contact: "Contatti",
    writeBefore: "Scrivi a ",
    writeAfter:
      ". Indica il modello di iPhone, la versione di iOS e cosa ti aspettavi. Rispondiamo a ogni messaggio, in italiano, francese, tedesco o inglese.",
    noContact: "Un indirizzo di contatto verrà pubblicato qui prima che la beta apra ai tester.",
    policyBefore: "Leggi l’",
    policyLink: "informativa sulla privacy",
    policyAfter: " per sapere cosa conserva HomeMind.",
    back: "Torna alla pagina di HomeMind",
  },

  privacy: {
    title: "Privacy — HomeMind",
    description:
      "Cosa conserva l’app HomeMind per iPhone sul tuo telefono, cosa conserva il suo server quando accedi, per quanto tempo, e come eliminarlo.",
    overline: "Informativa sulla privacy · aggiornata il",
    heading: "Cosa conserva HomeMind, e per quanto tempo",
    lead: "Questa informativa riguarda l’app HomeMind per iPhone durante la beta su TestFlight. Descrive quello che l’app e il suo server fanno davvero, e cambia quando cambiano loro.",
    original: "Questa pagina traduce la versione inglese, che prevale in caso di differenze.",
    sections: [
      {
        id: "on-the-phone",
        title: "Senza account, niente lascia il tuo telefono",
        body: [
          "HomeMind funziona completamente senza accesso. La tua casa, i prodotti, le scorte, la cronologia e la lista della spesa stanno in un database sul tuo iPhone, e niente viene inviato da nessuna parte.",
          "La fotocamera serve solo a leggere i codici a barre. Le immagini sono elaborate sul telefono e mai conservate né inviate; si conserva solo il numero del codice a barre, sul prodotto a cui appartiene.",
          "I promemoria sono notifiche che il telefono programma da solo. Non è coinvolto nessun server di notifiche.",
        ],
      },
      {
        id: "account",
        title: "Con un account: cosa conserva il server",
        body: [
          "L’accesso avviene con «Accedi con Apple». Il server conserva l’identificativo stabile che Apple gli fornisce, e l’indirizzo email se Apple ne condivide uno (può essere un indirizzo di inoltro privato). HomeMind non vede mai la password del tuo ID Apple.",
          "Ogni telefono collegato ha una sessione che scade da sola; le sessioni scadute vengono eliminate.",
          "Per sincronizzare, il server conserva una copia della tua casa: nome, posti, prodotti, quantità, date, quanto hai usato e quando, e la lista della spesa. Se entri nella casa di qualcun altro, conserva anche il nome che hai scelto di mostrare.",
          "Quando scansioni un codice a barre con l’accesso effettuato, il server cerca il nome del prodotto nel database aperto Open Food Facts. A Open Food Facts arriva solo il numero del codice a barre, non chi sei. I nomi trovati restano in cache 30 giorni; i codici non trovati, 7 giorni.",
        ],
      },
      {
        id: "sharing",
        title: "Condividere una casa",
        body: [
          "Tutti in una casa ne vedono il contenuto e i nomi scelti dagli altri. I codici di invito sono conservati solo come hash non reversibile, valgono una volta, scadono dopo due giorni e vengono eliminati una settimana dopo.",
          "Un membro può uscire quando vuole, e il proprietario può rimuovere un membro. La casa sparisce allora dal suo telefono alla sincronizzazione successiva.",
        ],
      },
      {
        id: "subscription",
        title: "HomeMind Household (l’abbonamento)",
        body: [
          "Il piano si acquista nell’app tramite l’App Store. Apple gestisce il pagamento; HomeMind non vede mai la tua carta, il tuo ID Apple né il tuo indirizzo di fatturazione.",
          "Per sapere chi ha il piano, il server conserva ciò che Apple firma per ogni abbonamento: l’identificativo della transazione, quale piano è, quando è stato acquistato, quando scade e se è stato rimborsato. Apple avvisa anche direttamente il server quando un abbonamento si rinnova, finisce o viene rimborsato.",
          "Un abbonamento viene eliminato un anno dopo la scadenza. Se elimini prima il tuo account, il record resta senza di te, senza dati personali, perché Apple continua ad addebitare finché non disdici nelle impostazioni del tuo ID Apple; potrai poi ripristinarlo su un nuovo account.",
        ],
      },
      {
        id: "logs",
        title: "Log del server e hosting",
        body: [
          "Durante la beta il server gira su Render, a Francoforte (UE). Come ogni server web registra ogni richiesta: l’ora, l’indirizzo richiesto (che può contenere un codice a barre scansionato) e l’indirizzo IP di provenienza. Il fornitore di hosting conserva questi log per il suo periodo standard.",
          "I record tecnici anti-ripetizione, che impediscono di applicare due volte una modifica, vengono eliminati dopo un giorno.",
        ],
      },
      {
        id: "deletion",
        title: "Eliminare l’account",
        body: [
          "Nell’app: Impostazioni → Sincronizzazione → Elimina account. Il server elimina il tuo account, ogni sessione e ogni casa usata solo da te. L’app poi cancella la copia sul tuo telefono.",
          "Una casa condivisa resta alle persone con cui la condividevi, senza di te. Se ne eri il proprietario, passa al membro entrato per primo.",
          "In una casa che esiste ancora, un prodotto eliminato resta come semplice segno, senza scorte, così ogni telefono sa che è stato eliminato.",
        ],
      },
      {
        id: "never",
        title: "Cosa HomeMind non fa",
        body: [
          "Niente pubblicità, niente statistiche, nessun tracciamento tra app o siti web, e nessuna vendita o condivisione dei tuoi dati. L’app non contiene codice di terzi per statistiche o pubblicità.",
        ],
      },
    ],
    questions: "Domande",
    writeBefore: "Scrivi a ",
    writeAfter:
      " per qualsiasi domanda su questa pagina, o per sapere cosa conserva il server su di te.",
    noContact: "Un indirizzo di contatto verrà pubblicato qui prima che la beta apra ai tester.",
    back: "Torna alla pagina di HomeMind",
  },
};
