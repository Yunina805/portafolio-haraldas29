// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // De aquí salen las URL canónicas, el sitemap, el robots.txt y la URL
  // absoluta de la imagen que se ve al compartir la liga.
  site: 'https://allsansystems.com',

  // El muestrario es referencia interna y va marcado noindex: fuera del mapa.
  integrations: [sitemap({ filter: (p) => !p.includes('/sistema') })],

  vite: {
    plugins: [tailwindcss()],
  },

  build: {
    // El CSS crítico va en línea si es pequeño: una petición menos antes del
    // primer render, que es lo que se juzga en un portafolio.
    inlineStylesheets: 'auto',
  },
});
