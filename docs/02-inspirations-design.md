# Étape 2 — Direction design (et comment on évite le site « fait par une IA »)

## Le piège, nommé précisément

Tapez « naturopathe » dans n'importe quel générateur : vous obtenez toujours la même page. Beige
délavé, vert sauge pâle, grandes formes organiques floues, photo de mains tenant une tisane, et
trois cartes à icônes « Écoute — Bienveillance — Naturel ». C'est devenu la signature visuelle du
secteur, et pire, la signature visuelle de l'IA.

**La sortie n'est pas de fuir la chaleur et la nature**, qui sont légitimes pour ce métier : c'est
de les traiter avec soin. Palette construite plutôt que pastel générique, arrondis maîtrisés plutôt
que blobs, ombres portées douces et chaudes plutôt que gris bleuté, animations discrètes plutôt
qu'apparitions spectaculaires.

## Recherches Google pour sortir du circuit court de l'IA

Les 20 requêtes utilisées pour aller chercher des références réelles, hors secteur et hors France
(à parcourir et à enrichir au fil des projets) :

1. `herbal apothecary studio website "since 19" -template -wordpress`
2. `japanese acupuncture clinic website minimal serif typography`
3. `swiss herbal tea brand website editorial layout`
4. `mountain lodge pyrenees website design "book a stay" typography`
5. `scandinavian midwife practice website site:*.no OR site:*.dk`
6. `osteopath practice website new zealand editorial serif`
7. `slow food producer website site:*.it "azienda agricola" design`
8. `natural wine importer website minimal editorial grid`
9. `ceramic studio website portfolio serif typography muted palette`
10. `nutrition clinic website australia "book a consultation" clean typography`
11. `austrian alpine spa website design sober`
12. `botanical garden website editorial typography "collections"`
13. `independent bookshop website design serif minimal site:*.uk`
14. `menopause clinic website design editorial not pink`
15. `japanese ryokan website english version typography`
16. `dispensary of medicinal plants website "materia medica" design`
17. `family doctor practice website germany "praxis" clean design`
18. `small hotel website spain "reservar" editorial photography layout`
19. `homeopathy clinic website switzerland sober design`
20. `farm shop website design uk "our produce" serif typography`

Ce qu'on y cherche : des mises en page **asymétriques**, des surfaces claires posées sur un fond
chaud, des blocs d'information pratique traités comme du contenu et pas comme de la décoration, et
des photos cadrées serré plutôt que des banques d'images.

## Le système visuel

### Palette : la Bigorre à la fin de l'été

Une seule famille chromatique, du sable au brun, avec deux accents tirés du paysage : le vert
profond des versants et la terre cuite des toits.

| Rôle | Valeur | Contraste sur le fond | Usage |
|---|---|---|---|
| Fond | `#fbf7f1` sable | — | fond général, blanc chaud |
| Fond secondaire | `#f4ede2` | — | panneaux arrondis |
| Surface | `#fffdf9` | — | cartes, encarts, champs |
| Texte | `#2a241e` écorce | 14,5:1 | texte courant |
| Texte secondaire | `#6b6153` | 5,7:1 | chapôs, légendes |
| Accent principal | `#3e5540` forêt | 7,6:1 | boutons, surtitres, liens |
| Terre cuite | `#b5653a` | 4,0:1 | décor uniquement (pastilles, filets) |
| Terre cuite texte | `#9a4e28` | 5,6:1 | erreurs, survols, chiffres |
| Doré | `#d9a441` miel | — | halo du hero, dégradé du surtitre |

La règle qui tient la palette : **une couleur qui porte du texte doit passer 4,5:1**. La terre cuite
d'origine ne passe pas, d'où sa version foncée. Les deux ne sont jamais interchangeables.

### Formes et matière

- **Arrondis gradués** : 10 px sur les petits éléments, 18 px sur les champs et la FAQ, 26 px sur
  les cartes, 34 px sur les panneaux et les photos, pilule complète sur les boutons. Un seul rayon
  partout donnerait un rendu de gabarit ; la gradation donne une hiérarchie.
- **Ombres chaudes**, jamais grises : `rgba(42, 36, 30, …)`, très diffuses, à peine posées. Trois
  niveaux seulement (repos, survol, flottant).
- **Panneaux détachés** : les sections crème sont des blocs arrondis légèrement rentrés des bords,
  pas des bandes pleine largeur. C'est ce qui donne l'impression de pages posées les unes sur les
  autres.
- **Halo du hero** : deux dégradés radiaux très légers (miel et forêt) derrière le premier écran.
  Ils sont contenus par un `overflow: hidden`, sinon ils élargissent la page.

### Typographie

- **Titres : Newsreader** (serif éditorial variable, Google Fonts), graisse 450, jamais 700.
- **Chapôs en serif** eux aussi : c'est ce qui donne le ton « revue » plutôt que « plaquette ».
- **Texte courant : pile système** à 17,5 px, interligne 1,7, largeur bloquée à 68 caractères.
- **Surtitres** en petites capitales espacées, précédés d'un court trait dégradé terre cuite / miel.

### Animations

Discrètes, courtes, et jamais indispensables à la lecture.

- **Apparition au défilement** : opacité et 18 px de translation, 620 ms, décalage de 90 ms entre
  voisins, plafonné à trois crans. Un bloc déjà à l'écran apparaît immédiatement.
- **Survols** : élévation de 2 à 4 px sur les cartes, boutons et photos, flèche des liens qui
  avance de 4 px, ouverture de FAQ avec un « + » qui pivote en croix.
- **En-tête collant** translucide, avec flou d'arrière-plan ; le filet et l'ombre n'apparaissent
  qu'une fois la page défilée.
- **Trois garde-fous** : rien n'est masqué si JavaScript ne s'exécute pas (la classe `anime` est
  posée par un script en-tête, pas par le CSS), tout est neutralisé sous
  `prefers-reduced-motion: reduce`, et un balayage au défilement prend le relais si
  `IntersectionObserver` reste muet.

### Ce qui reste interdit

Dégradés criards, ombres bleutées, blobs organiques, verre dépoli, cartes à icônes en triptyque,
emojis, effets de parallaxe, compteurs animés, et toute animation qui dure plus d'une seconde.

## Sections réutilisables

`hero-editorial` (titre, chapô, deux actions, fiche pratique), `bandeau-faits` (4 chiffres dans une
carte flottante), `liste-numerotee` (pastilles terre cuite), `duo-texte-media`, `citation`
(guillemet géant en filigrane), `grille-liens`, `faq-accordeon` (`<details>` natifs),
`bloc-contact`, `avertissement-sante`.

## Gabarits de page

| Gabarit | Pages concernées |
|---|---|
| `accueil` | `/` |
| `pilier` | `/naturopathie/`, `/consultations/` |
| `motif` | les 3 pages de motifs de consultation |
| `article` | les 3 ressources (colonne unique, sans animation d'apparition) |
| `pratique` | `/tarifs/`, `/cabinet-tarbes/`, `/contact/` |
| `institutionnel` | `/a-propos/`, mentions légales, confidentialité |

Un dossier = un gabarit. C'est ce qui fait qu'ajouter une page plus tard prend dix minutes et que le
site reste cohérent.
