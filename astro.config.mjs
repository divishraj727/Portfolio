// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // Final deployed URL — used for canonical URLs, sitemap and OG tags.
  site: 'https://divishrajo.com',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
