// Contenu du voyage — source : présentation Canva « Voyage au cœur du Sauvage 2026 ».
// Tout fait (date, prix, condition) modifié ici se met à jour partout sur la page.

// ── À REMPLACER avant mise en ligne : lien de réservation réel
// (formulaire, Calendly, WhatsApp ou adresse e-mail de Pauline).
export const LIEN_RESERVATION =
  'mailto:contact@yoga-liberte.example?subject=R%C3%A9servation%20%E2%80%94%20Voyage%20au%20c%C5%93ur%20du%20Sauvage';

export const infos = {
  titre: 'Voyage au cœur du Sauvage',
  dates: 'Du 5 au 17 novembre 2026',
  datesCourtes: '5 → 17 nov. 2026',
  destination: 'Afrique du Sud',
  duree: '13 jours · 12 nuits',
  prix: '2 800 €',
  prixDetail: 'par personne · 12 nuits / 13 jours',
};

export const chiffres = [
  { valeur: '13', legende: 'jours hors du temps' },
  { valeur: '7', legende: 'safaris & game drives' },
  { valeur: '3', legende: 'régions traversées' },
  { valeur: '1', legende: 'tapis de yoga face au sauvage' },
];

// Galerie faune sous le héros. Chaque photo existe en .webp + .jpg dans
// `public/img/faune/`, au format portrait 3:4 (540 × 720).
// (`type: 'scene'` reste disponible pour afficher un portrait d'art SVG
// de SceneFaune si une photo venait à manquer.)
export const faune = [
  {
    type: 'photo',
    src: '/img/faune/lion',
    alt: 'Lion mâle de profil dans les herbes dorées de la savane',
    nom: 'Le lion',
    note: 'Celui que l’on espère à chaque game drive, au lever du jour.',
  },
  {
    type: 'photo',
    src: '/img/faune/hippo',
    alt: 'Hippopotame émergeant d’une rivière bordée de végétation',
    nom: 'L’hippopotame',
    note: 'Maître discret des points d’eau du Kruger.',
  },
  {
    type: 'photo',
    src: '/img/faune/girafe',
    alt: 'Girafe broutant la cime d’un acacia',
    nom: 'La girafe',
    note: 'L’élégante des plaines, à la cime des acacias.',
  },
  {
    type: 'photo',
    src: '/img/faune/impala',
    alt: 'Impala mâle dans la lumière dorée, troupeau d’éléphants au loin',
    nom: 'L’impala',
    note: 'La grâce même, dans la lumière dorée du soir.',
  },
];

export const etapes = [
  {
    id: 'cap',
    scene: 'cap',
    photo: '/img/etapes/cap',
    alt: 'La montagne de la Table et la baie du Cap depuis la plage',
    nom: 'Le Cap',
    dates: '5 → 10 novembre',
    mots: 'Océan · Rando · Liberté',
    texte:
      'L’océan d’un côté, la montagne de l’autre. Les premiers jours posent le rythme : randonnée au lever du soleil, yoga face à l’Atlantique, dîners au bord de l’eau.',
    lieux: ['Lion’s Head', 'Boulders Beach', 'Camps Bay', 'Cape Point', 'Table Mountain'],
  },
  {
    id: 'panorama',
    scene: 'panorama',
    photo: '/img/etapes/panorama',
    alt: 'Route en lacets surplombant le Blyde River Canyon et les Three Rondavels',
    nom: 'Route Panorama',
    dates: '10 → 13 novembre',
    mots: 'Cascades · Canyon · Route mythique',
    texte:
      'Cap vers le nord par l’une des routes les plus spectaculaires du monde. Falaises rouges, cascades, points de vue vertigineux — et le silence des grands espaces.',
    lieux: ['Blyde River Canyon', 'God’s Window', 'Three Rondavels'],
  },
  {
    id: 'kruger',
    scene: 'kruger',
    photo: '/img/etapes/kruger',
    alt: 'Éléphant traversant une piste devant un véhicule de safari, près d’un point d’eau',
    nom: 'Parc Kruger',
    dates: '13 → 17 novembre',
    mots: 'Safari · Nature sauvage · Lever de soleil',
    texte:
      'Le cœur du voyage. Game drives à l’aube, nuits au sein même du parc, et ces instants suspendus où la savane décide de tout.',
    lieux: ['Game drives', 'Rivière Olifants', 'Observation animale'],
  },
];

export const tempsForts = [
  { icone: 'vague', titre: 'Océan & plages', texte: 'Yoga au coucher du soleil sur les plages du Cap' },
  { icone: 'baleine', titre: 'Baleines & requins', texte: 'Tête-à-tête avec les baleines à Hermanus, plongée en cage à Gansbaai' },
  { icone: 'montagne', titre: 'Montagnes', texte: 'Table Mountain au lever du jour, au-dessus des nuages' },
  { icone: 'soleil', titre: 'Safaris à l’aube', texte: 'Sept game drives dans le Kruger et ses environs' },
  { icone: 'lotus', titre: 'Yoga & bien-être', texte: 'Yoga, méditation et shiatsu, au rythme du voyage' },
  { icone: 'assiette', titre: 'Découvertes culinaires', texte: 'Dîners face à l’océan, saveurs d’Afrique du Sud' },
];

export const itineraire = [
  {
    etape: 'Le Cap',
    sousTitre: 'Entre océan, montagne & liberté — 5 nuits',
    couleur: 'ocean',
    jours: [
      {
        date: '5 nov.',
        titre: 'La Zen attitude',
        moments: [
          { label: 'Matin', texte: 'Arrivée à Cape Town et installation à Camps Bay.' },
          { label: 'Après-midi', texte: 'Yoga au coucher de soleil sur la plage de Clifton.' },
          { label: 'Soir', texte: 'Dîner face à l’océan et première immersion à View Point.' },
        ],
      },
      {
        date: '6 nov.',
        titre: 'Découverte de la Péninsule',
        moments: [
          {
            label: 'Journée',
            texte:
              'Road trip sur l’une des plus belles routes d’Afrique du Sud : Camps Bay, Chapman’s Peak, Cape Point, Boulders Beach.',
          },
          { label: 'Moment fort', texte: 'Méditation face à l’océan, à la pointe du Cap.' },
          { label: 'Soir', texte: 'Installation à Boulders Beach pour deux nuits.' },
        ],
      },
      {
        date: '7 nov.',
        titre: 'Table Mountain',
        moments: [
          {
            label: 'Lever du jour',
            texte: 'Randonnée au lever du soleil à Table Mountain, au-dessus de l’océan et des nuages.',
          },
          {
            label: 'Après-midi',
            texte: 'Exploration du jardin botanique de Kirstenbosch, au cœur d’une nature unique.',
          },
          { label: 'Soir', texte: 'Yoga de fin de journée, deuxième nuit à Boulders Beach.' },
        ],
      },
      {
        date: '8 nov.',
        titre: 'Hermanus et ses baleines',
        moments: [
          {
            label: 'Lever du soleil',
            texte:
              'Route vers Hermanus, l’un des meilleurs endroits au monde pour observer les baleines depuis la côte.',
          },
          {
            label: 'Matin',
            texte: 'Excursion en bateau : rencontre inoubliable avec les baleines dans leur habitat naturel.',
          },
          { label: 'Après-midi', texte: 'Yoga face à l’océan. Nuit à Hermanus.' },
        ],
      },
      {
        date: '9 nov.',
        titre: 'Frissons garantis',
        moments: [
          {
            label: 'Matin',
            texte:
              'Route vers Gansbaai, capitale mondiale du cage diving avec les requins. Briefing sécurité et préparation à l’aventure.',
          },
          {
            label: 'Après-midi',
            texte: 'Après cette expérience unique, repos bien mérité avec un shiatsu pour clore ce séjour au Cap.',
          },
          {
            label: 'Soir',
            texte: 'Temps libre pour se poser et partager nos émotions autour d’un bon dîner. Nuit à Gansbaai.',
          },
        ],
      },
    ],
  },
  {
    etape: 'Route Panorama',
    sousTitre: 'Cascades, canyon & route mythique',
    couleur: 'terre',
    jours: [
      {
        date: '10 nov.',
        titre: 'Changement de décor',
        moments: [
          {
            label: 'Matin',
            texte: 'Retour à Cape Town et envol vers Hoedspruit, porte d’entrée du parc Kruger.',
          },
          {
            label: 'Après-midi',
            texte:
              'Rencontre avec notre guide Kim, flânerie à Hoedspruit : artisanat local, souvenirs, ambiance de village.',
          },
          {
            label: 'En option',
            texte:
              'Visite d’un centre de réhabilitation d’animaux ou d’un atelier de bijoux créés à partir de pièges recyclés — un moment engagé pour la faune et les communautés locales.',
          },
        ],
      },
      {
        date: '11 nov.',
        titre: 'Blyde River Canyon',
        moments: [
          { label: 'Matin', texte: 'Départ sur la mythique Panorama Route. La journée s’écrit en points de vue.' },
          {
            label: 'Après-midi',
            texte:
              'Randonnée au cœur du Blyde River Canyon : nature sauvage, baignade et points de vue incroyables. Yoga en pleine nature.',
          },
          { label: 'Soir', texte: 'Nuitée à Blyde River Canyon, soirée paisible entourée par la nature.' },
        ],
      },
      {
        date: '12 nov.',
        titre: 'La Route Panorama',
        moments: [
          {
            label: 'Journée',
            texte:
              'Exploration des incontournables : God’s Window, Lisbon Falls, Three Rondavels.',
          },
          { label: 'Yoga', texte: 'Méditation et temps d’écriture dans un endroit complètement hors norme.' },
          { label: 'Soir', texte: 'Nuitée à Hazyview, détente après cette journée pleine d’émotions.' },
        ],
      },
    ],
  },
  {
    etape: 'Parc Kruger',
    sousTitre: 'Immersion au cœur du sauvage — jusqu’au 17 novembre',
    couleur: 'bush',
    jours: [
      {
        date: '13 nov.',
        titre: 'Birder day & Kruger',
        moments: [
          {
            label: 'Matin',
            texte: 'Sortie guidée au lever du soleil avec un birder, à la découverte des oiseaux emblématiques de la région.',
          },
          {
            label: 'Après-midi',
            texte: 'Route vers le parc Kruger par la célèbre Kruger Gate. Première immersion dans la beauté sauvage du bush.',
          },
          {
            label: 'Soir',
            texte:
              'Installation au mythique camp de Skukuza, au cœur du parc. Yoga de gratitude pour ouvrir cette aventure unique.',
          },
        ],
      },
      {
        date: '14 & 15 nov.',
        titre: 'Game drives',
        moments: [
          {
            label: 'Matin',
            texte: 'Game drive au lever du soleil : les animaux s’éveillent, la savane s’illumine, l’aventure commence.',
          },
          { label: 'Après-midi', texte: 'Safari au cœur du parc, à la recherche de moments magiques avec notre guide Kim.' },
          {
            label: 'Soir',
            texte: 'Yoga doux pour intégrer les merveilles vécues. Nuits à Skukuza puis à Olifants River.',
          },
        ],
      },
      {
        date: '16 nov.',
        titre: 'Rivière Olifants & Grietjie',
        moments: [
          { label: 'Matin', texte: 'Game drive. Chaque instant réserve son lot de surprises — laissons la vie nous étonner.' },
          {
            label: 'Après-midi',
            texte: 'Yoga au bord de la rivière Olifants, un moment de paix absolue face à une vue incroyable.',
          },
          { label: 'Soir', texte: 'Route vers Grietjie pour notre dernière nuit ensemble. Soirée de partage et de liberté.' },
        ],
      },
      {
        date: '17 nov.',
        titre: 'Le dernier lever de soleil',
        moments: [
          { label: 'Lever du jour', texte: 'Dernier game drive au lever du soleil. La savane, une dernière fois, rien que pour vous.' },
          { label: 'Départ', texte: 'Retour vers Hoedspruit et envol vers de nouvelles aventures…' },
        ],
      },
    ],
  },
];

export const guides = [
  {
    initiale: 'P',
    nom: 'Pauline',
    role: 'Fondatrice de Yoga Liberté',
    tags: ['Yoga', 'Bien-être', 'Rando & trek', 'Voyage'],
    bio: 'Nomade depuis plus de dix ans, Pauline explore le monde à travers le yoga, la nature, le sauvage et les rencontres humaines. Avec Yoga Liberté, elle crée des expériences immersives mêlant aventure, reconnexion à soi et exploration du vivant.',
    citation: 'N’oublie jamais : tu es magnifique tel·le que tu es !',
  },
  {
    initiale: 'K',
    nom: 'Kim',
    role: 'Guide safari locale',
    tags: ['Safari', 'Nature', 'Culture locale', 'Partage'],
    bio: 'Née d’une double culture sud-africaine et allemande, Kim est passionnée par la nature, les animaux sauvages et les grands espaces. Son regard authentique et sa bonne humeur accompagnent toute l’étape du Kruger et de ses environs.',
    citation: null,
  },
];

export const inclus = [
  'Tous les hébergements (12 nuits)',
  'Location des véhicules + essence',
  'Entrées des parcs & activités mentionnées',
  'Sortie bateau à la rencontre des baleines',
  'Excursion cage diving avec les requins',
  'Yoga, méditation & shiatsu',
  '7 safaris & game drives',
  'Accompagnement tout au long du voyage',
];

export const nonInclus = [
  'Repas & boissons',
  'Vols internationaux et nationaux',
  'Assurance voyage',
  'Dépenses personnelles',
  'Pourboires',
];

export const conditions = [
  'Acompte de 50 % à la réservation',
  'Paiement du solde 45 jours avant le départ',
  'Annulation gratuite jusqu’à 45 jours avant le départ',
];
