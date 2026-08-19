---
name: nouvelle-page
description: Procédure complète pour ajouter une page au site Léa Cazaux (gabarit HTML, maillage interne, données structurées, sitemap, checklist SEO). À suivre pour toute création de page ou d'article.
---

# Ajouter une page au site

## 1. Décider de l'emplacement

Un dossier = un gabarit (voir `docs/03-structure.md`). Si la nouvelle page n'entre dans aucun
dossier existant, c'est le signe qu'il faut d'abord réfléchir à l'arborescence, pas créer la page.

Créer `chemin/de/la-page/index.html`. URL en minuscules, avec tirets, sans accent, slash final.

## 2. Partir du bon fichier

Copier la page existante la plus proche **du même gabarit** (par exemple
`consultations/digestion/index.html` pour un nouveau motif) plutôt que d'écrire depuis zéro. En-tête,
navigation, pied de page et blocs sont ainsi cohérents d'office.

## 3. Ajuster la profondeur des liens relatifs

Le site est servi depuis un sous-chemin GitHub Pages : **tous les liens internes sont relatifs**.

- Page à un niveau (`/tarifs/`) : `../` pour la racine, `../assets/css/site.css`.
- Page à deux niveaux (`/consultations/digestion/`) : `../../`.

Une erreur de profondeur casse le CSS de la page sans autre symptôme visible. À vérifier en premier
si une page s'affiche sans style.

## 4. Ce qu'il faut renseigner dans le `<head>`

- `<title>` : 60 caractères maximum, mot-clé en tête, `| Léa Cazaux` en fin.
- `<meta name="description">` : 150 à 160 caractères, une information concrète et une action.
- `<link rel="canonical">` : URL **absolue** de production.
- `og:title`, `og:description`, `og:url`, `og:image`.
- `<meta name="robots" content="noindex,nofollow">` tant que le site est en démonstration. À retirer
  page par page à la mise en production réelle.

## 5. Données structurées

- Toutes les pages : `BreadcrumbList`.
- Pages de motif et pages pratiques : rien de plus, sauf si la page contient une vraie FAQ, auquel
  cas `FAQPage` (uniquement pour des questions réellement affichées).
- `/` et `/cabinet-tarbes/` : `LocalBusiness`. Ne jamais dupliquer ce bloc ailleurs.
- Articles : `Article` avec `datePublished` et `author`.

## 6. Maillage interne

Une nouvelle page ne vit pas seule. À chaque ajout :
- lier depuis la page parente (hub) ;
- lier vers au moins deux pages du site depuis le corps du texte ;
- si c'est un article, lier vers la page de motif correspondante, et ajouter le lien retour depuis
  cette page de motif.

## 7. Déclarer la page

Ajouter l'URL dans `sitemap.xml` avec sa `<lastmod>`. L'ajouter à la navigation seulement s'il
s'agit d'une page de premier niveau : le menu compte six entrées, il ne doit pas grossir.

## 8. Checklist avant commit

- [ ] Un seul `<h1>`, hiérarchie `h2`/`h3` sans saut de niveau.
- [ ] Toutes les images ont un `alt`, un `width` et un `height`.
- [ ] La page reste lisible avec CSS et JavaScript désactivés.
- [ ] Testée à 375, 768 et 1280 px de large.
- [ ] Aucun lien mort (`node tools/check-liens.mjs` si le script est présent, sinon vérification manuelle).
- [ ] Texte relu avec les compétences [voix-et-style](../voix-et-style/SKILL.md) et [anti-ia](../anti-ia/SKILL.md).
- [ ] Chiffres et coordonnées repris de [infos-cabinet](../infos-cabinet/SKILL.md), jamais réinventés.
- [ ] Avertissement santé présent si la page évoque des troubles.
