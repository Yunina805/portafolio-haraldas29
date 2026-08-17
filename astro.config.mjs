// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // TODO(Fase 5): cambiar por el dominio real cuando esté comprado.
  // De esto salen las URL canónicas y el sitemap.
  site: 'https://harald.example.com',

  vite: {
    plugins: [tailwindcss()],
  },

  build: {
    // El CSS crítico va en línea si es pequeño: una petición menos antes del
    // primer render, que es lo que se juzga en un portafolio.
    inlineStylesheets: 'auto',
  },
});
