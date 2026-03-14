import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://nailulkhoir.netlify.app', // Ganti dengan domain asli nantinya (contoh: https://nailulkhoir.sch.id)
  integrations: [
    tailwind(),
    sitemap()
  ]
});
