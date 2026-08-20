# Voyage au cœur du Sauvage — landing page

Site one-page pour la retraite **yoga & safari en Afrique du Sud** de Yoga Liberté
(du 5 au 17 novembre 2026) : Le Cap → Route Panorama → Parc Kruger.

Construit avec [Astro](https://astro.build), pensé **mobile first** et optimisé vitesse :

- une seule page HTML d'environ 60 Ko, CSS inliné, **zéro requête JavaScript** (deux
  micro-scripts inlinés gèrent les apparitions au défilement, la barre de réservation
  mobile et la mise en pause de la vidéo hors écran) ;
- police Fraunces auto-hébergée (woff2), aucune dépendance externe, aucun traceur ;
- illustrations en SVG inline (savane, Cap, canyon, Kruger) — pas d'images lourdes ;
- vidéo du héros en H.264 (2,6 Mo), coupée automatiquement hors écran et désactivée
  sous `prefers-reduced-motion` ;
- lisible sans JavaScript et sans CSS, un seul `h1`, accordéons en `<details>` natifs ;
- données structurées `Event` (schema.org) pour le référencement.

## Développement

```bash
npm install
npm run dev        # serveur local
npm run build      # génère dist/
npm run preview    # sert dist/ en local
```

## Contenu

Tous les faits (dates, tarifs, itinéraire, guides, conditions) vivent dans
`src/data/voyage.js` — une modification s'y répercute partout sur la page.

## Avant la mise en ligne — à remplacer

1. **Le lien de réservation** : `LIEN_RESERVATION` dans `src/data/voyage.js`
   (adresse e-mail réelle de Pauline, formulaire, Calendly ou WhatsApp).
2. **Le domaine** : `site` dans `astro.config.mjs` (URL canonique et Open Graph).
3. Facultatif : remplacer les scènes SVG par de vraies photos du voyage
   (composants `src/components/Scene*.astro`) — garder des images compressées
   (AVIF/WebP, ≤ 200 Ko) pour préserver la vitesse.

## Déploiement

`npm run build` produit un site 100 % statique dans `dist/`, déployable tel quel
(Netlify, Vercel, Cloudflare Pages, GitHub Pages…). Pour GitHub Pages sous un
sous-chemin (`/mon-repo/`), renseigner aussi `base: '/mon-repo/'` dans
`astro.config.mjs`.
