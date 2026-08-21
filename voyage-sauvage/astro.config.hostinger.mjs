import { defineConfig } from 'astro/config';

// Build pour un hébergement à la racine d'un domaine (Hostinger, domaine
// temporaire *.hostingersite.com, ou futur domaine dédié) :
//   npm run build:hostinger
// Quand le domaine définitif est connu, renseigner `site` pour activer
// les URL canoniques et Open Graph.
export default defineConfig({
  compressHTML: true,
  build: {
    inlineStylesheets: 'always',
  },
});
