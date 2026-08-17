/**
 * Genera el favicon y la imagen de vista previa (Open Graph).
 *
 *   node scripts/generar-imagenes.mjs
 *
 * La imagen OG es lo que se ve cuando mandas la liga por WhatsApp. Sin ella,
 * el enlace sale como una tarjeta gris sin imagen y parece roto — y mandar la
 * liga por WhatsApp es justo el caso de uso principal de este portafolio.
 *
 * Todo sale de src/assets/marca, así que no hay dos versiones del logo que se
 * puedan desincronizar: si la marca cambia, se vuelve a correr esto y ya.
 *
 * Se ejecuta a mano y el resultado se versiona en public/.
 */
import sharp from 'sharp';
import { mkdir, readFile } from 'node:fs/promises';
import { writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const RAIZ = join(dirname(fileURLToPath(import.meta.url)), '..');
const MARCA = join(RAIZ, 'src/assets/marca');
const PUBLICO = join(RAIZ, 'public');

// Los mismos valores de src/styles/global.css
const FONDO_OSCURO = '#0d1a17';
const SUPERFICIE = '#182e28';
const APAGADO = '#8fa8a0';
const VERDE_CLARO = '#6ee7b7';

/** Devuelve el contenido de un SVG sin su etiqueta <svg> exterior. */
function interior(svg) {
  return svg
    .replace(/^\s*<svg[^>]*>/s, '')
    .replace(/<\/svg>\s*$/s, '')
    .trim();
}

const favicon = await readFile(join(MARCA, 'allsan-icon.svg'), 'utf8');
const logoOscuro = await readFile(join(MARCA, 'allsan-logo-dark.svg'), 'utf8');

/* --------------------------------------------------------------------------
   OPEN GRAPH — 1200 × 630

   El logo va arriba como membrete y el nombre debajo en grande: la marca
   identifica, pero quien contrata contrata a una persona.

   Aviso: el texto se dibuja con una fuente del sistema, no con Plus Jakarta
   Sans. El renderizador de SVG sólo lee fuentes instaladas y Plus Jakarta
   viene en woff2. El logo no tiene ese problema porque son trazos.
   ------------------------------------------------------------------------ */
const PILA = 'Helvetica Neue, Helvetica, Arial, sans-serif';

const og = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <radialGradient id="brillo" cx="15%" cy="8%" r="85%">
      <stop offset="0%" stop-color="${VERDE_CLARO}" stop-opacity="0.20"/>
      <stop offset="55%" stop-color="${VERDE_CLARO}" stop-opacity="0.05"/>
      <stop offset="100%" stop-color="${VERDE_CLARO}" stop-opacity="0"/>
    </radialGradient>
  </defs>

  <rect width="1200" height="630" fill="${FONDO_OSCURO}"/>
  <rect width="1200" height="630" fill="url(#brillo)"/>

  <!-- Logo de la marca, escalado desde su viewBox de 308x108 -->
  <g transform="translate(80,64) scale(1.5)">
    ${interior(logoOscuro)}
  </g>

  <!-- La persona -->
  <text x="80" y="336" font-family="${PILA}" font-size="84" font-weight="800"
        fill="#f1faf7" letter-spacing="-3.2">Harald Allerhand</text>
  <text x="80" y="426" font-family="${PILA}" font-size="84" font-weight="800"
        fill="${VERDE_CLARO}" letter-spacing="-3.2">Santaella</text>

  <text x="80" y="486" font-family="${PILA}" font-size="28" font-weight="500"
        fill="${APAGADO}">Desarrollador full-stack · Oaxaca, México</text>

  <!-- Pie -->
  <rect x="80" y="534" width="1040" height="1" fill="${SUPERFICIE}"/>
  <text x="80" y="578" font-family="${PILA}" font-size="24" font-weight="600"
        fill="${APAGADO}">Sistemas de gestión · Tiendas en línea · Cobros en línea · Integraciones</text>
</svg>`;

await mkdir(PUBLICO, { recursive: true });

await writeFile(join(PUBLICO, 'favicon.svg'), favicon);

// PNG para Safari en iOS, que todavía no usa favicon SVG
await sharp(Buffer.from(favicon))
  .resize(180, 180)
  .png()
  .toFile(join(PUBLICO, 'apple-touch-icon.png'));

// PNG de respaldo para navegadores viejos
await sharp(Buffer.from(favicon)).resize(32, 32).png().toFile(join(PUBLICO, 'favicon-32.png'));

await sharp(Buffer.from(og)).png({ compressionLevel: 9 }).toFile(join(PUBLICO, 'og.png'));

console.log('Listo:');
console.log('  public/favicon.svg');
console.log('  public/favicon-32.png');
console.log('  public/apple-touch-icon.png');
console.log('  public/og.png  (1200×630)');
