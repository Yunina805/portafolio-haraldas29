# Portafolio — Harald Allerhand Santaella

Sitio personal: presentación, proyectos y contacto. Estático, sin base de datos
y sin servidor de aplicaciones.

**Stack:** [Astro](https://astro.build) · [Tailwind CSS 4](https://tailwindcss.com) ·
TypeScript. Se despliega como HTML estático.

---

## Cómo correrlo

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # genera dist/
npm run preview  # sirve dist/ como en producción
```

Requiere Node 18 o superior.

---

## Cómo está armado

```
src/
├── styles/global.css     ← el sistema de diseño completo
├── consts.ts             ← datos del sitio en un solo lugar
├── layouts/Base.astro    ← <head>, tema, encabezado y pie
├── components/           ← las piezas reutilizables
└── pages/
    ├── index.astro       ← portada
    └── sistema.astro     ← muestrario del sistema (no indexable)
```

### El sistema de diseño

La paleta vive **completa** en `src/styles/global.css`, como tokens semánticos.
Las plantillas nunca llevan un color literal ni una utilidad de color de
Tailwind: escriben `bg-superficie`, `text-tinta`, `border-borde`.

```css
@theme {
  --color-superficie: #ffffff;   /* claro */
  --color-tinta: #1a1a1a;
}

html.dark {
  --color-superficie: #1e293b;   /* oscuro */
  --color-tinta: #f8fafc;
}
```

Cada utilidad se compila a `var(--color-*)`, así que redefinir las variables en
`html.dark` cambia el sitio entero. Consecuencia práctica: **para cambiar la
paleta se toca un solo archivo**, y `dark:` casi no aparece en las plantillas.

Todos los tokens de texto están por encima de 4.5:1 de contraste contra el fondo
de página, en claro y en oscuro (AA de WCAG 2.1 para texto normal). Los valores
medidos están anotados junto a cada token.

Abre `/sistema` para ver todas las piezas juntas; es la forma rápida de
detectar qué se rompió al tocar un token.

### Modo claro y oscuro

- La clase `.dark` la pone un script síncrono en el `<head>`, **antes** de
  pintar: sin él habría un destello blanco en cada carga para quien usa oscuro.
- Sin elección guardada, el sitio sigue la preferencia del sistema operativo, y
  la sigue en caliente si el visitante la cambia con la página abierta.
- En cuanto toca el interruptor, su elección manda y se guarda en
  `localStorage`.

### Tipografía e iconos

Ambos **autoalojados**, sin CDN de terceros:

- **Plus Jakarta Sans** por `@fontsource-variable`. El eje variable llega a 800,
  así que `font-black` se dibuja como `font-extrabold`.
- **Remix Icon** como SVG en línea. `Icono.astro` lee el set en tiempo de
  compilación y pega en el HTML sólo el icono usado — nada de cargar una fuente
  de 3,229 iconos para usar quince.

### Movimiento

`Revelar.astro` anima la entrada de los bloques al hacer scroll, con dos reglas:
no anima nada si el visitante pidió movimiento reducido en su sistema, y nunca
esconde contenido que dependa de JavaScript para volver a aparecer.

---

## Licencia

El código es de libre consulta. El contenido, los textos y las capturas de
pantalla no lo son.
