/**
 * Genera el favicon y la imagen de vista previa (Open Graph).
 *
 *   node scripts/generar-imagenes.mjs
 *
 * La imagen OG es lo que se ve cuando mandas la liga por WhatsApp. Sin ella,
 * el enlace sale como una tarjeta gris sin imagen y parece roto — y mandar la
 * liga por WhatsApp es justo el caso de uso principal de este portafolio.
 *
 * Se ejecuta a mano y el resultado se versiona en public/: no hace falta
 * regenerarlo en cada compilación.
 */
import sharp from 'sharp';
import { mkdir, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const RAIZ = join(dirname(fileURLToPath(import.meta.url)), '..');
const PUBLICO = join(RAIZ, 'public');

// Los mismos valores de src/styles/global.css
const VERDE = '#0f766e';
const VERDE_CLARO = '#5eead4';
const FONDO_OSCURO = '#0d1a17';
const SUPERFICIE = '#182e28';
const APAGADO = '#8fa8a0';

/* --------------------------------------------------------------------------
   FAVICON — la "H" va dibujada con rectángulos, no con texto: así se ve
   idéntica en cualquier sistema y queda nítida a 16 px, donde una fuente
   se empasta.
   ------------------------------------------------------------------------ */
const favicon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <rect width="64" height="64" rx="14" fill="${VERDE}"/>
  <g fill="#ffffff">
    <rect x="18" y="17" width="8" height="30" rx="1.5"/>
    <rect x="38" y="17" width="8" height="30" rx="1.5"/>
    <rect x="18" y="28" width="28" height="8" rx="1.5"/>
  </g>
</svg>`;

/* --------------------------------------------------------------------------
   OPEN GRAPH — 1200 × 630
   ------------------------------------------------------------------------ */
const PILA = 'Helvetica Neue, Helvetica, Arial, sans-serif';

const og = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <radialGradient id="brillo" cx="15%" cy="8%" r="85%">
      <stop offset="0%" stop-color="${VERDE_CLARO}" stop-opacity="0.22"/>
      <stop offset="55%" stop-color="${VERDE_CLARO}" stop-opacity="0.05"/>
      <stop offset="100%" stop-color="${VERDE_CLARO}" stop-opacity="0"/>
    </radialGradient>
  </defs>

  <rect width="1200" height="630" fill="${FONDO_OSCURO}"/>
  <rect width="1200" height="630" fill="url(#brillo)"/>

  <!-- Monograma + rótulo, la misma pareja que va en el encabezado del sitio -->
  <rect x="80" y="72" width="76" height="76" rx="18" fill="${VERDE}"/>
  <g fill="#ffffff">
    <rect x="101" y="92" width="9" height="36" rx="2"/>
    <rect x="126" y="92" width="9" height="36" rx="2"/>
    <rect x="101" y="105" width="34" height="9" rx="2"/>
  </g>
  <text x="180" y="120" font-family="${PILA}" font-size="23" font-weight="700"
        fill="${VERDE_CLARO}" letter-spacing="4">DESARROLLADOR FULL-STACK</text>

  <!-- Nombre -->
  <text x="80" y="300" font-family="${PILA}" font-size="90" font-weight="800"
        fill="#f1faf7" letter-spacing="-3.5">Harald Allerhand</text>
  <text x="80" y="396" font-family="${PILA}" font-size="90" font-weight="800"
        fill="${VERDE_CLARO}" letter-spacing="-3.5">Santaella</text>

  <!-- Dónde -->
  <text x="80" y="464" font-family="${PILA}" font-size="29" font-weight="500"
        fill="${APAGADO}">Oaxaca, México · En remoto para todo el país</text>

  <!-- Pie -->
  <rect x="80" y="524" width="1040" height="1" fill="${SUPERFICIE}"/>
  <text x="80" y="572" font-family="${PILA}" font-size="25" font-weight="600"
        fill="${APAGADO}">Sistemas de gestión · Tiendas en línea · Cobros en línea · Integraciones</text>
</svg>`;

await mkdir(PUBLICO, { recursive: true });

await writeFile(join(PUBLICO, 'favicon.svg'), favicon);

// PNG para Safari en iOS, que todavía no usa favicon SVG
await sharp(Buffer.from(favicon)).resize(180, 180).png().toFile(join(PUBLICO, 'apple-touch-icon.png'));

// PNG de respaldo para navegadores viejos
await sharp(Buffer.from(favicon)).resize(32, 32).png().toFile(join(PUBLICO, 'favicon-32.png'));

await sharp(Buffer.from(og)).png({ compressionLevel: 9 }).toFile(join(PUBLICO, 'og.png'));

console.log('Listo:');
console.log('  public/favicon.svg');
console.log('  public/favicon-32.png');
console.log('  public/apple-touch-icon.png');
console.log('  public/og.png  (1200×630)');
