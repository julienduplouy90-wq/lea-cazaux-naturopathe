# Étape 2 — Direction design (et comment on évite le site « fait par une IA »)

## Le piège, nommé précisément

Tapez « naturopathe » dans n'importe quel générateur : vous obtenez toujours la même page. Fond
beige, vert sauge, grandes formes organiques floues, photo de mains tenant une tisane, coins
arrondis partout, ombres douces, et trois cartes à icônes « Écoute — Bienveillance — Naturel ».
C'est devenu la signature visuelle du secteur, et pire, la signature visuelle de l'IA. Un visiteur
qui a vu dix sites de praticiens reconnaît le onzième au premier écran, et le range mentalement dans
« encore un ».

**Décision : on ne fait pas ça.** On part sur une esthétique de revue imprimée — sobre, dense en
information, typographique — appliquée à un cabinet de santé naturelle en Bigorre.

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
11. `austrian alpine spa website website design sober`
12. `botanical garden website editorial typography "collections"`
13. `independent bookshop website design serif minimal site:*.uk`
14. `menopause clinic website design editorial not pink`
15. `japanese ryokan website english version typography`
16. `dispensary of medicinal plants website "materia medica" design`
17. `family doctor practice website germany "praxis" clean design`
18. `small hotel website spain "reservar" editorial photography layout`
19. `homeopathy clinic website switzerland sober design`
20. `farm shop website design uk "our produce" serif typography`

Ce qu'on va y chercher, concrètement : des mises en page **asymétriques**, des filets fins à la
place des ombres, des blocs d'information pratique traités comme du contenu et pas comme de la
décoration, et des photos cadrées serré plutôt que des banques d'images.

## Le système visuel retenu

### Palette — la Bigorre, pas le spa générique

| Rôle | Valeur | D'où ça vient |
|---|---|---|
| Fond | `#F6F3ED` | Papier non blanchi, chaud sans être beige « wellness » |
| Fond secondaire | `#EDE8DE` | Bandes alternées, cartes |
| Texte | `#1B1E1A` | Encre, pas noir pur |
| Texte secondaire | `#5A625A` | |
| Accent | `#3E5B4A` | Vert lichen profond des versants pyrénéens — soutenu, pas pastel |
| Accent secondaire | `#A8622F` | Ocre / terre cuite, réservé aux détails (chiffres, filets, hover) |
| Filet | `rgba(27,30,26,.14)` | Toutes les séparations sont des traits de 1px |

Interdits explicites : dégradés, ombres portées, `border-radius` au-delà de 2px sur les blocs,
verre dépoli, blobs, animations d'apparition au scroll sur tout ce qui bouge.

### Typographie

- **Titres : Newsreader** (serif éditorial variable, Google Fonts). Graisse 400-500, jamais 700 :
  c'est le corps du texte qui porte, pas le gras.
- **Texte courant : pile système** (`-apple-system, Segoe UI, Roboto…`) à 17-18px, interligne 1.65,
  largeur de ligne bloquée à 68 caractères.
- **Surtitres** en petites capitales espacées (`letter-spacing: .14em`), c'est la seule fantaisie.

### Sections réutilisables (le « système » du site)

Chaque bloc est écrit une fois, puis réemployé. Ils constituent la bibliothèque du projet :

- `hero-editorial` — titre + chapô + deux actions + encart pratique (lieu, durée, tarif) dès le
  premier écran. L'info pratique en haut, c'est ce qui convertit sur un site de praticien.
- `bandeau-faits` — 4 faits chiffrés séparés par des filets (durée, format, délai de réponse, zone).
- `liste-numerotee` — « Pour qui », « Le déroulé » : des numéros `01 / 02 / 03` en ocre, un filet,
  du texte. Pas de cartes à icônes.
- `duo-texte-media` — texte à gauche, cadre portrait 3:4 à droite, alterné d'une section à l'autre.
- `citation-pleine` — un témoignage en gros serif, sans guillemets décoratifs ni carte.
- `grille-liens` — accès aux pages filles (motifs de consultation, articles).
- `faq-accordeon` — `<details>/<summary>` natifs, donc lisibles sans JavaScript.
- `bloc-contact` — rappel des coordonnées + bouton, en fin de chaque page.
- `avertissement-sante` — encadré sobre rappelant que la naturopathie ne remplace pas un médecin.
  Obligatoire sur toutes les pages qui parlent de troubles.

### Gabarits de page

| Gabarit | Pages concernées |
|---|---|
| `accueil` | `/` |
| `pilier` | `/naturopathie/`, `/consultations/` |
| `motif` | les 3 pages de motifs de consultation |
| `article` | les 3 ressources |
| `pratique` | `/tarifs/`, `/cabinet-tarbes/`, `/contact/` |
| `institutionnel` | `/a-propos/`, mentions légales, confidentialité |

Un dossier = un gabarit. C'est ce qui fait qu'ajouter une page plus tard prend dix minutes et que le
site reste cohérent.
