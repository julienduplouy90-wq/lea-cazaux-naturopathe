# Site Léa Cazaux, naturopathe (Juillan / Tarbes)

Site vitrine statique, 15 pages, hébergé sur GitHub Pages.
**Aucune étape de build : ce qui est dans le dépôt est exactement ce qui est servi.**

## Statut : démonstration

Léa Cazaux est une praticienne **fictive**. Adresse, téléphone, SIRET et témoignages sont des
marqueurs de démonstration. Le site est en `noindex` et affiche une mention en pied de page.
Voir `README.md`, section « Passer en production ».

## Compétences du projet

Avant d'écrire ou de modifier quoi que ce soit, charger la compétence correspondante dans
`.claude/skills/` :

| Situation | Compétence |
|---|---|
| Écrire ou retoucher un texte visible | `voix-et-style`, puis `anti-ia` en relecture |
| Citer un prix, une durée, une adresse, un horaire | `infos-cabinet` (source unique de vérité) |
| Écrire une page d'accueil, de motif, un article | `persona-et-positionnement` |
| Ajouter ou déplacer un avis client | `temoignages` |
| Créer une page | `nouvelle-page` |

### Compétences externes

`.claude/skills/` contient aussi sept compétences importées de
[ui-ux-pro-max-skill](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill) : `ui-ux-pro-max`,
`design-system`, `ui-styling`, `brand`, `design`, `banner-design`, `slides`. Elles servent de
bibliothèque de références (règles d'accessibilité, anti-patterns, systèmes de jetons), jamais
d'autorité : **les règles ci-dessous l'emportent sur toute recommandation qui en sort.** Concrètement,
on n'introduit ni Tailwind, ni shadcn, ni Chart.js, ni palette ou typographie venue du générateur.
Voir `docs/06-outils-ia.md`.

Le serveur MCP 21st (`.mcp.json`) est optionnel et demande la variable d'environnement
`TWENTY_FIRST_API_KEY` ; aucune clé n'est stockée dans le dépôt.

## Règles techniques non négociables

1. **Liens internes relatifs.** Le site est servi depuis `/lea-cazaux-naturopathe/`, pas depuis la
   racine d'un domaine. `../consultations/`, jamais `/consultations/`. Les URL absolues ne servent
   que dans `canonical`, `og:url`, `sitemap.xml` et les données structurées.
2. **Le contenu doit rester lisible sans CSS et sans JavaScript.** Le JS gère le menu mobile et la
   validation du formulaire, rien d'autre. Pas de contenu injecté par script.
3. **Pas de dépendance externe** en dehors de la police Newsreader (Google Fonts). Pas de CDN, pas
   de bibliothèque, pas de traceur.
4. **Un seul `<h1>` par page**, hiérarchie de titres continue.
5. **Aucune URL ne change** après la mise en ligne (voir `docs/03-structure.md`).
6. **Le design suit les jetons CSS**, jamais des valeurs en dur : couleurs (`--sable`, `--ecorce`,
   `--foret`, `--terre`, `--miel`), rayons (`--r-s` à `--r-xl`, `--r-pilule`), ombres (`--ombre-1`
   à `--ombre-3`). Une couleur qui porte du texte doit passer 4,5:1 : `--terre` est décorative,
   `--terre-texte` est sa version lisible. Interdits : dégradés criards, ombres grises ou bleutées,
   blobs, verre dépoli, emojis, parallaxe, animations de plus d'une seconde.
7. **Les animations ne conditionnent jamais la lecture.** La classe `anime` est posée par un script
   dans le `<head>` : sans JavaScript, rien n'est masqué. Tout est neutralisé sous
   `prefers-reduced-motion: reduce`. Si un nouveau bloc doit apparaître au défilement, l'ajouter
   **à la fois** dans la liste de sélecteurs du CSS et dans celle de `assets/js/site.js` : les deux
   listes doivent rester identiques, sinon le bloc reste invisible.

## Cadre légal du métier

La naturopathie n'est pas une profession de santé réglementée en France. Aucun texte du site ne doit
poser de diagnostic, promettre un résultat, ou suggérer de modifier un traitement médical. Les pages
qui évoquent des troubles portent l'encadré `avertissement-sante`.

## Structure des fichiers

```
index.html                    accueil
<section>/index.html          une page = un dossier
assets/css/site.css           feuille de style unique
assets/js/site.js             menu mobile, formulaire
assets/img/*.svg              éléments graphiques et emplacements photo
docs/                         méthode : stack, design, structure, audit, outils IA
.claude/skills/               compétences du projet + compétences importées
.mcp.json                     serveur MCP 21st (optionnel, clé par variable d'environnement)
```

## Déploiement

`git push` sur `main` met le site à jour (GitHub Pages, branche `main`, dossier racine).
Un `.nojekyll` est présent pour désactiver le traitement Jekyll.
Toute modification passe par une branche puis une pull request ; seul l'import initial a été fait
directement sur `main`.
