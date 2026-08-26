# Dónde va tu arte

Pon aquí los archivos y descomenta el bloque marcado en cada página:

| archivo | dónde sale | tamaño sugerido |
|---|---|---|
| `404.webp`   | página de error 404, columna derecha | 480 × 640 |
| `sello.webp` | easter egg (código Konami), esquina | 320 × 480 |

## Antes de subir cualquier imagen

**Que sea arte original o con licencia comercial.** `allsansystems.com` es un
sitio de negocio: usar personajes con derechos de autor ahí es un riesgo legal
chico pero real, y no vale la pena por una decoración.

Opciones limpias: encargar arte a un ilustrador, comprar una licencia, o usar
algo de dominio público.

## Optimízalas antes

Un PNG de 3 MB en la 404 tira todo el trabajo de rendimiento del sitio.
Conviértelas a WebP y no pases de ~150 KB:

```bash
# con imagemagick
magick tu-imagen.png -resize 480x640 -quality 82 404.webp
```
