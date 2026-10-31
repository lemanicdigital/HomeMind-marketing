import type { Copy } from "./en";

/**
 * Français. Les espaces fines insécables avant ? ! : ; sont posées par `typeset` (src/i18n.ts) :
 * le texte s'écrit ici avec des espaces ordinaires.
 */
export const fr: Copy = {
  meta: {
    title: "HomeMind — sachez ce qu’il y a à la maison avant de faire les courses",
    description:
      "HomeMind sait ce que votre foyer a en réserve, ce qui périme en premier et ce qui va manquer, puis écrit la liste de courses pour vous. Bientôt sur iPhone.",
    ogAlt:
      "HomeMind : sachez ce qu’il y a à la maison avant de faire les courses. L’écran d’accueil de l’app, avec ce qu’il faut consommer vite.",
    skip: "Aller au contenu",
  },

  nav: {
    home: "Accueil de HomeMind",
    sections: "Sections de cette page",
    features: "Fonctions",
    screens: "Écrans",
    pricing: "Prix",
    privacy: "Confidentialité",
    faq: "FAQ",
    support: "Aide",
    soon: "Bientôt disponible",
    language: "Langue",
  },

  hero: {
    eyebrow: "Bientôt sur iPhone",
    title: "Sachez ce qu’il y a à la maison avant de faire les courses.",
    lead: "HomeMind sait ce que votre foyer a en réserve, ce qui périme en premier et ce qui va manquer, puis écrit la liste de courses pour vous.",
    primary: "Voir comment ça marche",
    secondary: "Voir l’app",
    promises: ["Fonctionne hors ligne", "Sans pub ni pistage", "À partager avec votre foyer"],
    imageAlt:
      "L’écran d’accueil de HomeMind : trois produits à utiliser maintenant, dont des pousses d’épinard qui expirent aujourd’hui et du lait entier demain.",
    noteWarning: { name: "Lait entier", detail: "À consommer demain" },
    noteSuccess: { name: "Huile d’olive", detail: "Ajoutée à votre liste" },
  },

  features: {
    overline: "Fonctions",
    title: "Les petits calculs du foyer, faits pour vous",
    lead: "Fini le quatrième pot de quelque chose dont vous avez déjà trois, retrouvé une semaine après la date.",
    items: [
      {
        title: "Tout au même endroit",
        body: "Ce que vous avez, combien, et où c’est rangé : le frigo, le placard, l’étagère à côté de la machine à laver.",
      },
      {
        title: "À consommer avant la date",
        body: "Les dates deviennent « à consommer aujourd’hui » et « encore 3 jours », et une seule note tranquille le matin dit ce qu’il faut manger.",
      },
      {
        title: "Une liste qui s’écrit toute seule",
        body: "Un produit épuisé arrive sur la liste de courses. Un produit qui va manquer est suggéré, avec la raison à côté.",
      },
      {
        title: "Scanner plutôt que taper",
        body: "Visez un code-barres et le nom du produit se remplit tout seul. On peut toujours le taper aussi.",
      },
      {
        title: "Un foyer, tous les téléphones",
        body: "Invitez les personnes avec qui vous vivez. Tout le monde voit le même stock et la même liste, synchronisés.",
      },
      {
        title: "Fonctionne sans réseau",
        body: "Votre téléphone garde sa copie, donc le supermarché au sous-sol ne pose aucun problème. Tout se synchronise au retour du réseau.",
      },
    ],
  },

  screens: {
    overline: "Aperçu de l’app",
    title: "Des écrans calmes pour une corvée que personne n’aime",
    lead: "Captures de la version actuelle sur iPhone, avec des données d’exemple. Clair ou sombre, comme votre téléphone. L’app s’affiche en français sur un iPhone réglé en français.",
    items: [
      {
        title: "Aujourd’hui, d’un coup d’œil",
        body: "Ce qu’il faut utiliser d’abord et ce qui va manquer. Rien d’autre ne vient distraire.",
        alt: "L’écran d’accueil : une alerte indique que trois produits sont à utiliser ou vérifier, puis une liste « À consommer vite » avec des pousses d’épinard qui expirent aujourd’hui, du lait entier demain, un yaourt grec dans trois jours et du cheddar affiné dans neuf.",
      },
      {
        title: "Tout ce que vous avez",
        body: "Rangé par catégorie, filtré sur ce qui manque ou expire, avec recherche et scan du code-barres.",
        alt: "L’écran Stock en mode sombre, filtré sur ce qui expire : pousses d’épinard, lait entier, yaourt grec, œufs et cheddar, chacun avec son emplacement et sa date.",
      },
      {
        title: "Un produit, en toute franchise",
        body: "Combien il en reste, quand il en faudra et pourquoi, et chaque paquet avec sa propre date.",
        alt: "La fiche du café en grains : 250 grammes en stock, signalé bientôt fini, d’habitude environ 1000 grammes toutes les trois semaines, à racheter vers le 5 novembre, et un paquet dans le placard de la cuisine.",
      },
      {
        title: "Une liste qui se remplit",
        body: "Ce qui est épuisé s’ajoute tout seul. Ce qui va manquer est suggéré, jamais imposé.",
        alt: "L’écran Courses : sacs poubelle, huile d’olive marquée « Épuisé », bananes et pain au levain à acheter, puis des suggestions pour ce qui va manquer.",
      },
    ],
  },

  how: {
    overline: "Comment ça marche",
    title: "Trois habitudes, aucun tableur",
    steps: [
      {
        title: "Ajoutez ce que vous avez",
        body: "Tapez-le ou scannez le code-barres. Quantité et date sont facultatives ; HomeMind ne fait pas semblant de savoir ce qu’il ne sait pas.",
      },
      {
        title: "Consommez",
        body: "Touchez « J’en ai utilisé un » au fil de l’eau. HomeMind apprend à quel rythme votre foyer consomme chaque chose.",
      },
      {
        title: "Faites vos courses avec une liste fiable",
        body: "Ce qui est épuisé y est déjà, ce qui va manquer est suggéré, et rien de ce qui est dans le placard n’est acheté deux fois.",
      },
    ],
  },

  pricing: {
    overline: "Prix",
    title: "Gratuit sur votre téléphone. Une offre pour tout le foyer.",
    lead: "Vous payez seulement ce qui a besoin de notre serveur : la synchronisation et le partage. Tout le reste est gratuit, sans limite et sans pub.",
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
      name: "HomeMind Household",
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
    overline: "Confidentialité",
    title: "Votre cuisine ne regarde que vous",
    lead: "Un inventaire du foyer en dit long sur une maison. HomeMind le garde d’abord sur votre téléphone et ne collecte que ce dont la synchronisation a besoin.",
    policy: "Lire la politique de confidentialité",
    points: [
      {
        title: "À vous, sans compte",
        body: "Toute l’app fonctionne sur votre seul téléphone. Se connecter ajoute seulement la synchronisation et le partage.",
      },
      {
        title: "Sans pub ni pistage",
        body: "Aucune publicité, aucune analyse de vos courses, et rien n’est vendu à personne.",
      },
      {
        title: "Effacé quand vous le décidez",
        body: "Supprimez votre compte dans les Réglages : il est effacé du serveur et de tous les téléphones.",
      },
    ],
  },

  faq: {
    overline: "FAQ",
    title: "Vos questions, nos réponses",
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
        a: "Pas sur un seul téléphone : toute l’app y est gratuite, sans limite. La synchronisation et le partage ont besoin de notre serveur : c’est HomeMind Household, 14,99 € par an ou 1,99 € par mois après un mois offert. Une seule offre couvre tout le foyer. Pas de pub, pas de revente de données, aucune analyse de vos courses.",
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
    body: "HomeMind est en test. Une bêta publique via TestFlight d’Apple suivra, annoncée ici même. Pas de liste de diffusion à rejoindre.",
    action: "Questions et réponses",
  },

  footer: {
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
