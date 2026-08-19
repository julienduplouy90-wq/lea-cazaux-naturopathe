# Étape 1 — Choix de la stack technique

## Le projet en une ligne

Site vitrine pour Léa Cazaux, naturopathe installée à Juillan (5 min de Tarbes, Hautes-Pyrénées),
qui reçoit au cabinet et en visio. Objectif : générer des demandes de rendez-vous depuis Google
et les moteurs de réponse (ChatGPT, Perplexity, aperçus IA) sur des requêtes locales.

## Contraintes retenues

| Critère | Réalité du projet |
|---|---|
| Nombre de pages | 15 au lancement, ~25 dans 2 ans (les articles ressources s'ajoutent) |
| Fonctionnalités | Pages de contenu, formulaire de contact, pas de compte client, pas de paiement |
| Contenu mis à jour par | Le développeur (Claude Code), pas la cliente — pas besoin de back-office |
| Budget hébergement | 0 € — GitHub Pages |
| Compétence technique cliente | Nulle. Elle ne doit jamais avoir à toucher au code |

## Décision : HTML / CSS / JavaScript, sans build

Sous la barre des 20 pages, la règle de la méthode s'applique telle quelle : du statique écrit à la
main. Concrètement :

- **Zéro dépendance npm, zéro étape de build.** Ce qui est dans le dépôt est exactement ce qui est
  servi. Pas de `node_modules` à mettre à jour, pas de framework qui casse dans 18 mois.
- **Un seul CSS (`/assets/css/site.css`) et un seul JS (`/assets/js/site.js`)**, tous deux petits.
  Le JS ne sert qu'au menu mobile, à l'accordéon FAQ et à la validation du formulaire : le site
  reste entièrement lisible sans lui.
- **Une page = un dossier = un `index.html`.** URL propres (`/consultations/digestion/`) sans
  serveur applicatif ni règle de réécriture.
- **Polices : une seule famille distante** (Newsreader, via Google Fonts, avec `preconnect` et
  `display=swap`), le reste en polices système. Une requête réseau, pas dix.
- **Images en SVG** pour les éléments graphiques (monogramme, motifs, cadres photo). Les vraies
  photos seront en WebP + `width`/`height` + `loading="lazy"`.

## Alternatives écartées

**Astro + Tailwind + MDX.** C'est la bonne stack au-delà de 20 pages, et ce serait le choix si la
cliente publiait un article par semaine. Ici, 3 articles au lancement et peut-être un par trimestre :
la duplication des en-têtes et pieds de page sur 15 fichiers coûte moins cher que l'entretien d'une
chaîne de build, surtout quand c'est Claude Code qui édite les 15 fichiers d'un coup.
**Point de bascule assumé : au-delà de 20-25 pages, on migre vers Astro.**

**WordPress.** Mises à jour mensuelles, extensions payantes pour des fonctions basiques, base de
données à sauvegarder, et des performances qu'il faut aller chercher avec du cache. Pour un site
vitrine de 15 pages sans rédacteur interne, c'est de la dette technique offerte au client.

**Un constructeur type Wix / Squarespace.** Abonnement à vie, HTML qu'on ne maîtrise pas, contenu
prisonnier de la plateforme. Écarté d'office pour un site qu'on veut voir tenir 5 ans.

## Hébergement : GitHub Pages

Gratuit, HTTPS inclus, déploiement à chaque `push`, aucune administration serveur. La limite connue :
sur un compte gratuit, **Pages ne sert que depuis un dépôt public**. Le dépôt ne contient aucune
donnée sensible (pas de secret, pas de base clients), donc le compromis est acceptable — c'est déjà
le choix retenu pour le site Élise Vasseur.

Conséquence technique à ne jamais perdre de vue : le site est servi depuis un **sous-chemin**
(`/lea-cazaux-naturopathe/`), pas depuis la racine du domaine. Tous les liens internes du site sont
donc **relatifs** (`../consultations/`), jamais absolus (`/consultations/`). Seuls les `canonical`,
l'`og:url`, le `sitemap.xml` et les données structurées utilisent l'URL absolue de production.
