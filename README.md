# Léa Cazaux, naturopathe — site vitrine

Site statique de 15 pages (plus une 404), sans build ni dépendance, hébergé sur GitHub Pages.

**En ligne : https://julienduplouy90-wq.github.io/lea-cazaux-naturopathe/**

---

## ⚠️ Site de démonstration

**Léa Cazaux est une praticienne fictive.** Ce dépôt est une démonstration de méthode, réalisée pour
l'agence : il montre à quoi ressemble un site de praticien de santé naturelle construit avec Claude
Code, du cadrage jusqu'à la mise en ligne.

Sont fictifs et à remplacer intégralement avant toute exploitation : le nom, l'adresse (Juillan), le
téléphone, l'e-mail, le SIRET, la formation, les tarifs et **les cinq témoignages**. Les photos sont
des emplacements SVG, pas des images réelles.

Deux garde-fous sont en place pour éviter qu'un site fictif ne soit pris pour un vrai cabinet :
toutes les pages portent `<meta name="robots" content="noindex, nofollow">`, `robots.txt` interdit
l'indexation, et le pied de page affiche la mention « site de démonstration ».

## Structure

```
index.html                                accueil
naturopathie/                             page pilier, cadre et limites du métier
consultations/                            hub, déroulé du bilan de vitalité
  consultations/digestion/                motif 1
  consultations/fatigue-sommeil/          motif 2
  consultations/cycle-feminin/            motif 3
tarifs/                                   tarifs et modalités
cabinet-tarbes/                           accès, communes couvertes, visio
a-propos/                                 parcours et cadre de travail
ressources/                               hub des articles
  ressources/ballonnements-apres-repas/
  ressources/fatigue-bilan-normal/
  ressources/rituel-du-soir-sommeil/
contact/                                  formulaire et coordonnées
mentions-legales/
politique-de-confidentialite/
404.html
assets/css/site.css                       feuille de style unique (25 ko)
assets/js/site.js                         menu, apparitions, formulaire (9 ko)
assets/img/                               monogramme, favicon, emplacements photo, image de partage
docs/                                     la méthode suivie, étape par étape
.claude/skills/                           compétences du projet (voix, faits, persona, gabarits)
CLAUDE.md                                 règles à charger avant toute modification
```

## Travailler sur ce site

Aucune installation : ouvrez le dossier, éditez le HTML. Pour un aperçu fidèle à la production
(le site est servi depuis un sous-chemin), servez le dossier parent et ouvrez
`/lea-cazaux-naturopathe/`.

Avant toute modification, lisez `CLAUDE.md` : il renvoie vers les compétences du projet
(`.claude/skills/`) qui contiennent la voix, les faits du cabinet et la procédure d'ajout de page.

**La règle technique qui casse tout si on l'oublie : les liens internes sont relatifs**
(`../consultations/`), jamais absolus. Le site vit dans un sous-dossier, pas à la racine d'un
domaine.

## Documentation de la méthode

| Fichier | Contenu |
|---|---|
| `docs/01-stack.md` | Pourquoi du HTML/CSS/JS et pas Astro ni WordPress, et à quel moment migrer |
| `docs/02-inspirations-design.md` | Comment éviter le design IA générique, palette, typographie, blocs |
| `docs/03-structure.md` | Personas, arborescence, correspondance intention de recherche / page |
| `docs/05-audit.md` | Toutes les vérifications passées avant mise en ligne, et leurs résultats |

## Passer en production (pour un vrai cabinet)

1. Remplacer chaque champ marqué `[À REMPLACER]` dans `.claude/skills/infos-cabinet/SKILL.md`, puis
   répercuter partout : nom, adresse, téléphone, e-mail, SIRET, formation, horaires, tarifs.
2. Remplacer les cinq témoignages de `.claude/skills/temoignages/SKILL.md` par de vrais avis,
   recueillis avec accord écrit, et retirer les mentions « témoignages de démonstration » des pages
   `/`, `/consultations/*` et `/a-propos/`.
3. Ajouter les vraies photos (portrait 3:4, cabinet 4:3) en WebP, avec `width`, `height` et `alt`,
   à la place des SVG `*-a-venir.svg`. Refaire l'image de partage `assets/img/og-image.png`.
4. Retirer la ligne `<meta name="robots" content="noindex, nofollow">` des 17 fichiers HTML, et
   activer la version production du `robots.txt` (commentée dans le fichier).
5. Retirer la mention « site de démonstration » du pied de page (fin de chaque `index.html`).
6. Vérifier les coordonnées GPS dans le bloc `LocalBusiness` (`/` et `/cabinet-tarbes/`).
7. Brancher un service de formulaire : renseigner l'attribut `data-endpoint` du formulaire dans
   `contact/index.html`. Sans endpoint, le formulaire reste en `mailto:`.
8. Soumettre `sitemap.xml` à la Search Console, puis contrôler l'indexation.
9. Créer la fiche Google Business Profile : c'est elle qui fait la majorité du référencement local,
   le site vient en appui.

## Hébergement

GitHub Pages, branche `main`, dossier racine. Un `push` met le site à jour en une à deux minutes.
Le fichier `.nojekyll` désactive le traitement Jekyll.

Le dépôt est **public** parce que GitHub Pages ne sert que des dépôts publics sur un compte gratuit.
Il ne contient aucun secret, aucune donnée client, aucun formulaire connecté à une base.
