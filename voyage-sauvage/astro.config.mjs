import { defineConfig } from 'astro/config';

// `site` + `base` : le site est publié sur GitHub Pages, sous le chemin
// /lea-cazaux-naturopathe/voyage/. Pour un futur domaine dédié (Netlify,
// Vercel, domaine propre), remplacer `site` et supprimer `base`.
export default defineConfig({
  site: 'https://julienduplouy90-wq.github.io',
  base: '/lea-cazaux-naturopathe/voyage',
  compressHTML: true,
  build: {
    inlineStylesheets: 'always',
  },
});
