import type { APIRoute } from 'astro';

/**
 * robots.txt generado, no estático.
 *
 * La línea del Sitemap necesita la URL absoluta, y si estuviera en un archivo
 * fijo habría que acordarse de cambiarla al comprar el dominio. Así sale de
 * `site` en astro.config.mjs y se corrige sola.
 */
export const GET: APIRoute = ({ site }) => {
  const cuerpo = [
    'User-agent: *',
    'Allow: /',
    '',
    '# El muestrario del sistema es referencia interna, no contenido del portafolio.',
    'Disallow: /sistema',
    '',
    `Sitemap: ${new URL('sitemap-index.xml', site)}`,
    '',
  ].join('\n');

  return new Response(cuerpo, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
