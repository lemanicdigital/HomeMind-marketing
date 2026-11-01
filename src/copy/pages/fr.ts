import type { PagesCopy } from "./en";

/** Français. Les libellés entre guillemets sont ceux de l’app en français. */
export const fr: PagesCopy = {
  support: {
    title: "Aide — HomeMind",
    description:
      "De l’aide pour l’app HomeMind sur iPhone : ajouter des produits, rappels, codes-barres, partage du foyer, export ou suppression de vos données, et comment nous écrire.",
    overline: "Aide",
    heading: "Comment pouvons-nous aider ?",
    lead: "Les réponses aux questions les plus fréquentes, avec les mots de l’app. Si la vôtre n’y est pas, écrivez-nous.",
    topicsLabel: "Sujets de cette page",
    topics: [
      {
        id: "start",
        title: "Premiers pas",
        steps: [
          "Touchez Ajouter dans Accueil ou Stock. Seul le nom est nécessaire ; la quantité, l’emplacement et la date de péremption peuvent venir plus tard.",
          "Pour ajouter un produit avec son code-barres, touchez le bouton code-barres dans le champ de recherche de Stock et visez l’emballage. La fois suivante, scanner le même paquet ouvre le produit.",
          "Quand vous en rachetez, ouvrez le produit et touchez Ajouter un paquet : chaque paquet garde sa propre date.",
        ],
      },
      {
        id: "reminders",
        title: "Les rappels n’arrivent pas",
        steps: [
          "Dans HomeMind : Réglages → Rappels → activez « Me prévenir avant les dates », et choisissez l’heure.",
          "Dans les Réglages de l’iPhone → Notifications → HomeMind, autorisez les notifications. Si HomeMind indique qu’elles sont désactivées, son bouton Ouvrir Réglages y mène directement.",
          "Les rappels ne concernent que les produits qui ont une date.",
        ],
      },
      {
        id: "barcode",
        title: "Un code-barres n’est pas reconnu",
        steps: [
          "Les noms de produits viennent d’Open Food Facts, une base de données libre. Tous les produits n’y figurent pas, et la recherche demande d’être connecté.",
          "Si rien n’est trouvé, tapez le nom que vous utilisez. Le code-barres est quand même enregistré : le prochain scan retrouvera votre produit.",
        ],
      },
      {
        id: "sync",
        title: "Partage et autre téléphone",
        steps: [
          "Connectez-vous avec Apple dans Réglages → Synchronisation → Utiliser plusieurs téléphones. Sans connexion, tout reste sur ce téléphone.",
          "Pour partager votre foyer : Réglages → Partage → Inviter quelqu’un, puis envoyez le code. Il sert une fois, pendant deux jours. L’autre personne le saisit dans Réglages → Partage → Rejoindre une maison.",
          "Si une modification n’apparaît pas sur l’autre téléphone, touchez Réglages → Synchronisation → Synchroniser. Ce que le serveur a refusé est listé sous « Non enregistré », avec la raison.",
          "La synchronisation et le partage font partie de HomeMind Household. Si Réglages → Synchronisation affiche « Synchronisation en pause », l’offre manque ou a pris fin ; tout continue de fonctionner sur le téléphone.",
        ],
      },
      {
        id: "plan",
        title: "HomeMind Household",
        steps: [
          "Réglages → Synchronisation → HomeMind Household montre l’offre, son prix dans votre monnaie et sa date de renouvellement. Une seule offre couvre tout le foyer ; les personnes invitées ne paient pas.",
          "Sur un nouveau téléphone ou un nouveau compte, ouvrez le même écran et touchez Restaurer l’achat.",
          "Pour résilier : Réglages de l’iPhone → votre nom → Abonnements → HomeMind. L’offre court jusqu’à la fin de la période payée. Pour un remboursement, adressez-vous à Apple sur reportaproblem.apple.com.",
        ],
      },
      {
        id: "language",
        title: "Langue",
        steps: [
          "HomeMind parle français, allemand, italien et anglais, et suit la langue de votre iPhone. Pour choisir une autre langue pour HomeMind seulement : Réglages de l’iPhone → HomeMind → Langue.",
          "Les dates, les nombres et les unités suivent votre région. Ce que vous tapez, comme le nom des produits et des emplacements, reste tel que vous l’avez écrit.",
        ],
      },
      {
        id: "data",
        title: "Vos données",
        steps: [
          "Réglages → Vos données → Tout exporter vous donne chaque produit, paquet, entrée d’historique et article de liste dans un fichier JSON.",
          "Réglages → Synchronisation → Supprimer le compte supprime votre compte du serveur et efface la copie de ce téléphone. Un foyer partagé reste aux autres membres.",
          "La politique de confidentialité indique exactement ce qui est conservé, où, et pour combien de temps.",
        ],
      },
    ],
    contact: "Contact",
    writeBefore: "Écrivez à ",
    writeAfter:
      ". Précisez votre modèle d’iPhone, votre version d’iOS et ce que vous attendiez. Nous répondons à chaque message, en français, en allemand, en italien ou en anglais.",
    noContact: "Une adresse de contact sera publiée ici avant l’ouverture de la bêta.",
    policyBefore: "Lisez la ",
    policyLink: "politique de confidentialité",
    policyAfter: " pour savoir ce que HomeMind conserve.",
    back: "Retour à la page HomeMind",
  },

  privacy: {
    title: "Confidentialité — HomeMind",
    description:
      "Ce que l’app HomeMind pour iPhone garde sur votre téléphone, ce que son serveur conserve quand vous vous connectez, pendant combien de temps, et comment le supprimer.",
    overline: "Politique de confidentialité · mise à jour le",
    heading: "Ce que HomeMind garde, et jusqu’à quand",
    lead: "Cette politique couvre l’app HomeMind pour iPhone pendant sa bêta TestFlight. Elle décrit ce que l’app et son serveur font réellement, et elle change quand ils changent.",
    original: "Cette page traduit la version anglaise, qui fait foi en cas de différence.",
    sections: [
      {
        id: "on-the-phone",
        title: "Sans compte, rien ne quitte votre téléphone",
        body: [
          "HomeMind fonctionne entièrement sans connexion. Votre foyer, vos produits, votre stock, votre historique et votre liste de courses sont gardés dans une base de données sur votre iPhone, et rien n’est envoyé nulle part.",
          "L’appareil photo sert uniquement à lire les codes-barres. Les images sont traitées sur le téléphone, jamais conservées ni envoyées ; seul le numéro du code-barres est gardé, sur le produit concerné.",
          "Les rappels sont des notifications que votre téléphone programme lui-même. Aucun serveur de notifications n’intervient.",
        ],
      },
      {
        id: "account",
        title: "Avec un compte : ce que le serveur conserve",
        body: [
          "La connexion passe par « Se connecter avec Apple ». Le serveur conserve l’identifiant stable qu’Apple lui fournit, et l’adresse e-mail si Apple en partage une (ce peut être une adresse relais privée). HomeMind ne voit jamais le mot de passe de votre identifiant Apple.",
          "Chaque téléphone connecté a une session qui expire d’elle-même ; les sessions expirées sont supprimées.",
          "Pour synchroniser, le serveur garde une copie de votre foyer : son nom, ses emplacements, les produits, les quantités, les dates, ce que vous avez utilisé et quand, et la liste de courses. Si vous rejoignez le foyer de quelqu’un, il garde aussi le nom que vous avez choisi de lui montrer.",
          "Quand vous scannez un code-barres en étant connecté, le serveur cherche le nom du produit dans la base ouverte Open Food Facts. Seul le numéro du code-barres est envoyé à Open Food Facts, pas votre identité. Les noms trouvés sont gardés en cache 30 jours ; les codes introuvables, 7 jours.",
        ],
      },
      {
        id: "sharing",
        title: "Partager un foyer",
        body: [
          "Chaque membre d’un foyer voit son contenu et les noms choisis par les autres. Les codes d’invitation ne sont conservés que sous forme d’empreinte à sens unique, servent une fois, expirent après deux jours et sont supprimés une semaine plus tard.",
          "Un membre peut partir à tout moment, et le propriétaire peut retirer un membre. Le foyer disparaît alors de son téléphone à la synchronisation suivante.",
        ],
      },
      {
        id: "subscription",
        title: "HomeMind Household (l’abonnement)",
        body: [
          "L’offre s’achète dans l’app via l’App Store. Apple gère le paiement ; HomeMind ne voit jamais votre carte, votre identifiant Apple ni votre adresse de facturation.",
          "Pour savoir qui a l’offre, le serveur conserve ce qu’Apple signe pour chaque abonnement : son identifiant de transaction, la formule, la date d’achat, la date de fin et s’il a été remboursé. Apple informe aussi directement le serveur quand un abonnement est renouvelé, prend fin ou est remboursé.",
          "Un abonnement est supprimé un an après sa fin. Si vous supprimez votre compte avant, l’enregistrement reste sans vous, sans aucune donnée personnelle, car Apple continue de facturer tant que vous ne résiliez pas dans les réglages de votre identifiant Apple ; vous pouvez alors le restaurer sur un nouveau compte.",
        ],
      },
      {
        id: "logs",
        title: "Journaux du serveur et hébergement",
        body: [
          "Pendant la bêta, le serveur tourne chez Render, à Francfort (UE). Comme tout serveur web, il journalise chaque requête : l’heure, l’adresse demandée (qui peut contenir un code-barres scanné) et l’adresse IP d’origine. L’hébergeur conserve ces journaux pendant sa durée habituelle.",
          "Les enregistrements techniques anti-rejeu, qui empêchent d’appliquer deux fois une modification, sont supprimés au bout d’un jour.",
        ],
      },
      {
        id: "deletion",
        title: "Supprimer votre compte",
        body: [
          "Dans l’app : Réglages → Synchronisation → Supprimer le compte. Le serveur supprime votre compte, toutes vos sessions et chaque foyer que vous étiez seul à utiliser. L’app efface ensuite la copie de votre téléphone.",
          "Un foyer partagé reste aux personnes avec qui vous le partagiez, sans vous. Si vous en étiez propriétaire, il passe au membre arrivé le premier.",
          "Dans un foyer qui existe encore, un produit supprimé est gardé comme simple marque, sans son stock, pour que chaque téléphone apprenne sa suppression.",
        ],
      },
      {
        id: "never",
        title: "Ce que HomeMind ne fait pas",
        body: [
          "Pas de publicité, pas de statistiques, pas de pistage entre apps ou sites web, et aucune vente ni aucun partage de vos données. L’app ne contient aucun code tiers de statistiques ou de publicité.",
        ],
      },
    ],
    questions: "Questions",
    writeBefore: "Écrivez à ",
    writeAfter:
      " pour toute question sur cette page, ou pour demander ce que le serveur détient sur vous.",
    noContact: "Une adresse de contact sera publiée ici avant l’ouverture de la bêta.",
    back: "Retour à la page HomeMind",
  },
};
