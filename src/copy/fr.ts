import type { Copy } from "./en";

/**
 * Français. Les espaces fines insécables avant ? ! : ; sont posées par `typeset` (src/i18n.ts) :
 * le texte s'écrit ici avec des espaces ordinaires.
 */
export const fr: Copy = {
  meta: {
    title: "Homesky — sachez ce qu’il y a à la maison avant de faire les courses",
    description:
      "Homesky sait ce que votre foyer a en réserve, ce qui périme en premier et ce qui va manquer, puis écrit la liste de courses pour vous. Bientôt sur iPhone.",
    ogAlt:
      "Homesky : sachez ce qu’il y a à la maison avant de faire les courses. L’écran d’accueil de l’app, avec ce qu’il faut consommer vite.",
    skip: "Aller au contenu",
  },

  nav: {
    home: "Accueil de Homesky",
    sections: "Sections de cette page",
    features: "Fonctions",
    pricing: "Prix",
    privacy: "Confidentialité",
    faq: "FAQ",
    support: "Aide",
    soon: "Bientôt disponible",
    language: "Langue",
  },

  hero: {
    title: "Sachez ce qui reste avant les courses.",
    lead: "Homesky sait ce que votre foyer a en réserve, ce qui périme en premier et ce qui va manquer, puis écrit la liste de courses pour vous.",
    primary: "Voir comment ça marche",
    timeLabel: "Voir l’accueil à",
    times: [
      {
        label: "7:00",
        caption:
          "Petit-déjeuner. Une seule note tranquille dit ce qu’il faut utiliser aujourd’hui.",
      },
      {
        label: "13:00",
        caption: "Au magasin. La liste sait déjà ce qui est épuisé.",
      },
      {
        label: "18:30",
        caption: "Les courses arrivent. Scannez-les en les rangeant.",
      },
      {
        label: "22:00",
        caption: "Tard le soir. Tout reste sur votre téléphone, rien n’est mesuré.",
      },
    ],
    imageAlt:
      "L’écran d’accueil de Homesky : les pousses d’épinards sont à consommer aujourd’hui, le lait entier demain et le yaourt grec expire dans 3 jours ; le café en grains et le liquide vaisselle sont bientôt finis.",
  },

  day: {
    chapters: [
      {
        time: "7:00",
        title: "À consommer avant la date",
        body: "Au petit-déjeuner, une seule note tranquille dit ce qu’il faut manger. Les dates deviennent « À consommer aujourd’hui » et « Expire dans 3 jours ».",
      },
      {
        time: "13:00",
        title: "Une liste qui s’écrit toute seule",
        body: "Un produit épuisé arrive sur la liste de courses. Un produit qui va manquer est suggéré, avec la raison à côté.",
      },
      {
        time: "18:30",
        title: "Scanner plutôt que taper",
        body: "Visez un code-barres et le nom se remplit tout seul. Seul le nom est nécessaire, et taper marche toujours.",
      },
    ],
  },

  showcase: {
    title: "Des écrans calmes pour une corvée",
    inventory: {
      name: "Tout ce que vous avez",
      fact: "Rangé par catégorie, chacune avec sa couleur.",
      alt: "L’écran Stock : huit produits, un de chaque catégorie, chacun avec sa couleur : pâtes, pousses d’épinards, café en grains, petits pois surgelés, lessive, dentifrice, pâtée pour chat et piles.",
    },
    list: {
      name: "Une liste qui se remplit",
      fact: "Ce qui est épuisé s’ajoute. Ce qui va manquer est seulement suggéré.",
      alt: "L’écran Courses : l’huile d’olive et les sacs poubelle sont épuisés, des bananes et un pain au levain sont à acheter, puis le café en grains et le liquide vaisselle sont suggérés car bientôt finis.",
    },
  },

  how: {
    title: "Trois habitudes, aucun tableur",
    steps: [
      {
        title: "Ajoutez ce que vous avez",
        body: "Tapez-le ou scannez le code-barres. Quantité et date sont facultatives ; Homesky ne fait pas semblant de savoir ce qu’il ne sait pas.",
      },
      {
        title: "Consommez",
        body: "Touchez « J’en ai utilisé un » au fil de l’eau. Homesky apprend à quel rythme votre foyer consomme chaque chose.",
      },
      {
        title: "Faites vos courses avec une liste fiable",
        body: "Ce qui est épuisé y est déjà, et ce qui va manquer est suggéré. Ce qui reste dans le placard n’y figure pas.",
      },
    ],
  },

  pricing: {
    sentence: {
      before: "Homesky Household coûte ",
      price: "14,99 €",
      after: " par an pour tout le foyer, ou 1,99 € par mois. Le premier mois est offert.",
    },
    title: "Gratuit seul. Une offre pour le foyer.",
    lead: "Vous payez seulement ce qui a besoin de notre serveur : la synchronisation et le partage. Tout le reste est gratuit, quel que soit le nombre de produits.",
    free: {
      name: "Gratuit",
      price: "0 €",
      tagline: "Pour un téléphone, pour toujours.",
      items: [
        "Tout sur un iPhone, sans limite",
        "Dates de péremption, rappels et liste de courses",
        "Scan des codes-barres avec le nom des produits",
        "Export de toutes vos données, à tout moment",
      ],
    },
    household: {
      name: "Homesky Household",
      badge: "Premier mois offert",
      price: "14,99 €",
      per: "par an",
      tagline: "Ou 1,99 € par mois. Une seule offre couvre tout le foyer.",
      everything: "Tout ce qui est gratuit",
      items: [
        "Vos produits sur tous vos téléphones, toujours à jour",
        "Partage du foyer : les personnes invitées sont gratuites",
        "Une copie hors du téléphone, pour un iPhone neuf ou réinitialisé",
      ],
    },
    note: "S’achète dans l’app via l’App Store, qui affiche le prix dans votre monnaie. Résiliable à tout moment dans les réglages d’abonnement de votre identifiant Apple. Si l’offre prend fin, la synchronisation se met en pause et rien n’est supprimé de vos téléphones.",
  },

  privacy: {
    time: "22:00",
    title: "Votre cuisine ne regarde que vous",
    lead: "Un inventaire du foyer en dit long sur une maison. Homesky le garde d’abord sur votre téléphone et ne collecte que ce dont la synchronisation a besoin.",
    policy: "Lire la politique de confidentialité",
  },

  app: {
    household: "Chez nous",
    date: "samedi 7 novembre",
    tabs: {
      home: "Accueil",
      inventory: "Stock",
      add: "Ajouter",
      cook: "Cuisine",
      shopping: "Courses",
    },
    useSoon: "À consommer vite",
    runningOut: "Bientôt finis",
    toBuy: "À acheter",
    suggested: "Suggestions",
    usedOne: "J’en ai utilisé un",
    soon: [
      {
        name: "Pousses d’épinards",
        detail: "Frigo · À consommer aujourd’hui",
        qty: "1 sachet",
        kind: "fresh",
      },
      {
        name: "Lait entier",
        detail: "Frigo · À consommer demain",
        qty: "1 brique",
        kind: "beverages",
      },
      {
        name: "Yaourt grec",
        detail: "Frigo · Expire dans 3 jours",
        qty: "2 pots",
        kind: "fresh",
      },
    ],
    low: [
      {
        name: "Café en grains",
        detail: "Placard · Bientôt fini",
        qty: "250 g",
        kind: "beverages",
      },
      {
        name: "Liquide vaisselle",
        detail: "Sous l’évier · Bientôt fini",
        qty: "1 flacon",
        kind: "cleaning",
      },
    ],
    count: "8 produits",
    shelf: [
      {
        name: "Pâtes",
        detail: "Placard",
        qty: "2 paquets",
        kind: "pantry",
      },
      {
        name: "Pousses d’épinards",
        detail: "Frigo · À consommer aujourd’hui",
        qty: "1 sachet",
        kind: "fresh",
      },
      {
        name: "Café en grains",
        detail: "Placard · Bientôt fini",
        qty: "250 g",
        kind: "beverages",
      },
      {
        name: "Petits pois surgelés",
        detail: "Congélateur",
        qty: "1 sachet",
        kind: "frozen",
      },
      {
        name: "Lessive",
        detail: "Étagère près de la machine à laver",
        qty: "1 bidon",
        kind: "cleaning",
      },
      {
        name: "Dentifrice",
        detail: "Armoire de toilette",
        qty: "2 tubes",
        kind: "bathroom",
      },
      {
        name: "Pâtée pour chat",
        detail: "Placard de l’entrée",
        qty: "6 boîtes",
        kind: "pet",
      },
      {
        name: "Piles",
        detail: "Tiroir de la cuisine",
        qty: "4 piles",
        kind: "other",
      },
    ],
    toBuyCount: "4 à acheter",
    buy: [
      {
        name: "Huile d’olive",
        reason: "Épuisé",
      },
      {
        name: "Sacs poubelle",
        reason: "Épuisé",
      },
      {
        name: "Bananes",
        reason: "",
      },
      {
        name: "Pain au levain",
        reason: "",
      },
    ],
    suggest: [
      {
        name: "Café en grains",
        reason: "Bientôt fini",
      },
      {
        name: "Liquide vaisselle",
        reason: "Bientôt fini",
      },
    ],
    add: {
      label: "Nom",
      value: "Pousses d’épinards",
      category: "Frais",
      place: "Frigo",
    },
    use: {
      name: "Lait entier",
      qty: "1 brique",
    },
  },

  faq: {
    title: "Questions et réponses",
    items: [
      {
        q: "Pourquoi l’iPhone d’abord ?",
        a: "Nous préférons bien faire un téléphone que deux à moitié. Android est prévu, et l’app est conçue pour suivre sans tout recommencer.",
      },
      {
        q: "Faut-il des étagères connectées, une douchette ou un boîtier ?",
        a: "Non. L’appareil photo de votre iPhone lit les codes-barres, et on peut toujours taper. Un code scanné sert uniquement à retrouver le nom du produit.",
      },
      {
        q: "En quelles langues ?",
        a: "Français, allemand, italien et anglais, selon la langue de votre iPhone, avec les dates, les nombres et les unités comme on les écrit chez vous. L’arabe suivra.",
      },
      {
        q: "Où sont mes données ?",
        a: "Sur votre téléphone, pour que l’app marche même au sous-sol sans réseau. Se connecter est facultatif et ajoute une sauvegarde, un deuxième téléphone et le partage. Les données synchronisées sont hébergées dans l’UE (Francfort).",
      },
      {
        q: "Que se passe-t-il si je supprime mon compte ?",
        a: "Il est supprimé du serveur, tous les téléphones sont déconnectés et la copie de ce téléphone est effacée. Un foyer partagé reste aux autres membres ; un foyer que vous utilisiez seul part avec votre compte.",
      },
      {
        q: "Comment fonctionne le partage ?",
        a: "Une personne invite, l’autre saisit un code. Le code sert une fois et expire après deux jours. Les membres peuvent partir quand ils veulent ; le propriétaire peut retirer n’importe qui.",
      },
      {
        q: "Est-ce payant ?",
        a: "Pas sur un seul téléphone : toute l’app y est gratuite, sans limite. La synchronisation et le partage ont besoin de notre serveur : c’est Homesky Household, 14,99 € par an ou 1,99 € par mois après un mois offert. Une seule offre couvre tout le foyer.",
      },
      {
        q: "Puis-je tester la bêta ?",
        a: "Pas encore. La bêta ouvrira sur TestFlight, et elle sera annoncée sur cette page.",
      },
      {
        q: "Pourquoi ce site n’a ni cookies, ni polices externes, ni statistiques ?",
        a: "Un site qui parle de garder un œil sur votre cuisine ne devrait pas garder un œil sur vous. Rien de tiers ne se charge ici, et rien n’est mesuré.",
      },
    ],
  },

  launch: {
    title: "Bientôt sur iPhone",
    body: "Homesky est en test. Une bêta publique via TestFlight d’Apple suivra, annoncée ici même. Pas de liste de diffusion à rejoindre.",
    action: "Questions et réponses",
  },

  footer: {
    place: "Fait au bord du Léman, en français, anglais, allemand et italien.",
    tagline: "L’inventaire du foyer pour iPhone. Ce site ne dépose aucun cookie et ne mesure rien.",
    product: "Produit",
    help: "Aide",
    legal: "Mentions",
    features: "Fonctions",
    how: "Comment ça marche",
    screens: "Écrans",
    support: "Aide",
    faq: "FAQ",
    availability: "Disponibilité",
    policy: "Politique de confidentialité",
    promise: "Notre engagement",
    rights: "Tous droits réservés.",
  },
};
