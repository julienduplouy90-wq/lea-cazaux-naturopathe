import { defineConfig } from 'astro/config';

// `site` sert aux URL canoniques et Open Graph.
// À remplacer par le domaine définitif avant la mise en ligne.
export default defineConfig({
  site: 'https://voyage-sauvage.example.com',
  compressHTML: true,
  build: {
    inlineStylesheets: 'always',
  },
});
