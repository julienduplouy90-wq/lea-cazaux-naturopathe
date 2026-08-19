# Étape 5 — Vérifications passées sur les premières pages

Le principe de la méthode : ne pas industrialiser avant d'avoir vérifié. Ici, les 17 fichiers HTML
sortent du même gabarit, donc une erreur de gabarit serait une erreur sur 17 pages. Tout a été
contrôlé avant la mise en ligne.

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

Poids des pages : de 5,9 ko (404) à 19,3 ko (accueil), HTML non compressé. Une seule feuille de
style (13 ko), un seul script (5 ko), aucune bibliothèque.

## Ce qui a été vérifié dans le navigateur

**Débordement horizontal.** Les 17 pages chargées successivement dans un cadre de 375, 768 et
1280 px de large : aucun débordement (`scrollWidth` égal à la largeur du cadre dans les 51 cas).

**Menu mobile.** Ouverture au clic, `aria-expanded` mis à jour, fermeture à la touche Échap avec
retour du focus sur le bouton. Bouton de 44 × 44 px, liens du menu ouvert de 46 à 53 px de haut,
donc au-dessus du seuil recommandé de 44 px pour une cible tactile.

**Formulaire de contact.** Trois cas testés :
- envoi à vide : cinq messages d'erreur affichés, focus placé sur le premier champ fautif ;
- e-mail incomplet et message de six caractères : deux erreurs ciblées, les autres champs restent
  valides ;
- envoi complet : aucune erreur, message de confirmation affiché, ouverture du client de messagerie
  avec sujet et corps pré-remplis.

Un champ piège (`name="site"`, masqué hors écran) bloque les envois automatisés des robots.

**Chargement.** Aucune erreur en console. Requêtes réseau : le HTML, une feuille de style, un
script, les SVG. La police Newsreader se charge depuis Google Fonts et `document.fonts.check` la
confirme active.

**Accessibilité des couleurs.** Contrastes calculés sur le fond papier `#f6f3ed` :

| Couleur | Usage | Contraste | Verdict |
|---|---|---|---|
| `#1b1e1a` encre | texte courant | 15,3:1 | AAA |
| `#5a625a` encre douce | chapô, légendes | 5,7:1 | AA |
| `#3e5b4a` lichen | surtitres, liens | 6,8:1 | AA |
| `#a8622f` ocre | filets, chiffres décoratifs | 4,3:1 | insuffisant pour du texte |
| `#8f4f22` ocre foncé | messages d'erreur, survol de lien | 5,8:1 | AA |

**Correction appliquée pendant l'audit :** l'ocre d'origine servait aussi aux messages d'erreur et
au survol des liens, sous le seuil de 4,5:1. Une variante foncée (`--ocre-texte`) a été introduite
pour tous les usages textuels, l'ocre d'origine restant réservé aux filets et aux numéros.

## Ce qu'il reste à vérifier à la main, après mise en ligne réelle

- PageSpeed Insights et GTmetrix sur l'URL de production (le local ne mesure pas la latence réseau).
- Rendu sans CSS et sans JavaScript dans le navigateur : la structure est du HTML sémantique et
  aucun contenu n'est injecté par script, mais le contrôle visuel reste à faire.
- Affichage sur un vrai téléphone, pas seulement dans les outils de développement.
- Aperçu des cartes de partage (Open Graph) une fois le domaine en ligne.

## Points connus, assumés pour l'instant

1. **En-tête et pied de page dupliqués dans 17 fichiers.** Choix assumé à ce volume : pas de build,
   pas de dépendance. Toute modification globale se fait en une passe sur les 17 fichiers. Au-delà
   de 25 pages, migrer vers Astro (voir `docs/01-stack.md`).
2. **Police servie par Google Fonts.** Une requête vers un tiers, et l'adresse IP du visiteur qui
   part chez Google : c'est signalé dans la politique de confidentialité. Pour supprimer ce point,
   héberger les fichiers `.woff2` dans `assets/fonts/`.
3. **Formulaire en `mailto:`.** Suffisant pour démarrer, dépendant du client de messagerie du
   visiteur. Le passage à un service de formulaire ne demande qu'à renseigner l'attribut
   `data-endpoint` du formulaire, le script bascule alors en envoi direct.
