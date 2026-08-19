# Étape 5 — Vérifications passées sur les pages

Le principe de la méthode : ne pas industrialiser avant d'avoir vérifié. Ici, les 17 fichiers HTML
sortent du même gabarit, donc une erreur de gabarit serait une erreur sur 17 pages. Tout a été
contrôlé avant la mise en ligne, puis re-contrôlé après la refonte visuelle.

## Ce qui a été vérifié automatiquement

Un script d'audit (exécuté hors dépôt, à relancer à chaque ajout de page) parcourt tous les fichiers
HTML et contrôle :

| Contrôle | Résultat |
|---|---|
| `<title>` présent et ≤ 60 caractères | 17/17 |
| `<meta name="description">` présente, entre 110 et 160 caractères | 17/17 |
| `<link rel="canonical">` présent | 17/17 |
| Un seul `<h1>` par page | 17/17 |
| Aucun saut de niveau de titre (h2 → h4) | 17/17 |
| Toutes les images ont `alt`, `width` et `height` | 17/17 |
| JSON-LD parsable | 17/17 |
| Liens internes pointant vers un fichier existant | 0 lien mort |
| Aucun tiret cadratin dans le contenu visible (règle anti-IA) | 17/17 |

Poids des pages : de 6,4 ko (404) à 20 ko (accueil), HTML non compressé. Une seule feuille de style
(25 ko), un seul script (9 ko), aucune bibliothèque.

## Ce qui a été vérifié dans le navigateur

**Débordement horizontal.** Les pages chargées dans un cadre de 375, 768 et 1280 px de large :
aucun débordement. Un cas a été corrigé au passage : le halo dégradé du hero, qui déborde
volontairement des marges, élargissait la page de 38 px sur mobile. Il est maintenant contenu par
un `overflow: hidden` sur le hero.

**En-tête.** Bascule vers le menu déroulant en dessous de 1080 px (et non 980 px : à 990 px, le
bouton « Prendre rendez-vous » passait sur deux lignes). Au-dessus, la barre complète laisse 80 à
122 px de marge entre le logo et la navigation. Bouton de menu de 46 × 46 px, entrées du menu
ouvert de 46 à 53 px de haut, au-dessus du seuil de 44 px recommandé pour une cible tactile.

**Menu mobile.** Ouverture au clic, `aria-expanded` mis à jour, fermeture à la touche Échap avec
retour du focus sur le bouton.

**Animations.** Vérifié en neutralisant les transitions (le panneau d'aperçu ne compose pas
d'images, une valeur en cours de transition y resterait figée) :
- bloc masqué au départ : opacité 0 ;
- bloc portant `est-visible` : opacité 1, aucune translation résiduelle ;
- document sans la classe `anime` (cas « JavaScript désactivé ») : tout est visible.

Trois garde-fous sont en place pour qu'aucun contenu ne puisse rester invisible : le script en-tête
retire la classe si `site.js` ne prend pas le relais en 2,5 s, un balayage au défilement double
l'`IntersectionObserver`, et la règle est entièrement neutralisée sous
`prefers-reduced-motion: reduce`.

**Formulaire de contact.** Trois cas testés :
- envoi à vide : cinq messages d'erreur affichés, focus placé sur le premier champ fautif ;
- e-mail incomplet et message de six caractères : deux erreurs ciblées ;
- envoi complet : aucune erreur, message de confirmation affiché, ouverture du client de messagerie
  avec sujet et corps pré-remplis.

Un champ piège (`name="site"`, masqué hors écran) bloque les envois automatisés.

**Chargement.** Aucune erreur en console. Requêtes : le HTML, une feuille de style, un script, les
SVG. La police Newsreader se charge depuis Google Fonts et `document.fonts.check` la confirme
active.

**Accessibilité des couleurs.** Contrastes calculés sur le fond sable `#fbf7f1` :

| Couleur | Usage | Contraste | Verdict |
|---|---|---|---|
| `#2a241e` écorce | texte courant | 14,5:1 | AAA |
| `#6b6153` écorce douce | chapôs, légendes | 5,7:1 | AA |
| `#3e5540` forêt | surtitres, liens, boutons | 7,6:1 | AA |
| `#b5653a` terre cuite | pastilles, filets, décor | 4,0:1 | insuffisant pour du texte |
| `#9a4e28` terre cuite foncée | erreurs, survols, chiffres | 5,6:1 | AA |
| `#fbf7f1` sur `#3e5540` | texte des boutons | 7,6:1 | AA |

Les mêmes couleurs restent conformes sur le fond crème `#f4ede2` (5,2:1 au minimum).

## Ce qu'il reste à vérifier à la main, après mise en ligne réelle

- PageSpeed Insights et GTmetrix sur l'URL de production (le local ne mesure pas la latence réseau).
- Rendu sans CSS et sans JavaScript dans le navigateur : la structure est du HTML sémantique et
  aucun contenu n'est injecté par script, mais le contrôle visuel reste à faire.
- Affichage sur un vrai téléphone, pas seulement dans les outils de développement, en particulier
  le flou d'arrière-plan de l'en-tête collant, coûteux sur les appareils anciens.
- Aperçu des cartes de partage (Open Graph) une fois le domaine en ligne.

## Points connus, assumés pour l'instant

1. **En-tête et pied de page dupliqués dans 17 fichiers.** Choix assumé à ce volume : pas de build,
   pas de dépendance. Au-delà de 25 pages, migrer vers Astro (voir `docs/01-stack.md`).
2. **Police servie par Google Fonts.** Une requête vers un tiers, signalée dans la politique de
   confidentialité. Pour la supprimer, héberger les `.woff2` dans `assets/fonts/`.
3. **Formulaire en `mailto:`.** Suffisant pour démarrer. Le passage à un service de formulaire ne
   demande qu'à renseigner l'attribut `data-endpoint`.
4. **Deux listes de sélecteurs à garder synchronisées** pour les apparitions au défilement, une
   dans `site.css`, une dans `site.js`. C'est le prix à payer pour n'avoir aucun attribut
   d'animation dans le HTML.
