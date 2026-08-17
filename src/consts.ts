/**
 * Datos del sitio, en un solo lugar.
 *
 * Los campos marcados con PENDIENTE están esperando tu respuesta (Fase 0).
 * Mientras tengan el valor de relleno, las secciones que los usan quedan ocultas
 * en vez de mostrar un dato falso.
 */

export const SITIO = {
  nombre: 'Harald Allerhand Santaella',
  nombreCorto: 'Harald Santaella',
  monograma: 'HA',
  oficio: 'Desarrollador full-stack',
  lema: 'Soluciones a la medida para tu negocio',
  descripcion:
    'Desarrollador web full-stack. Construyo sistemas de gestión, tiendas en ' +
    'línea e integraciones a la medida de cómo opera tu negocio.',

  // PENDIENTE — Fase 0
  ciudad: '', // p. ej. 'Puebla, México'
  correo: '', // idealmente hola@tudominio.com, no el Gmail personal
  whatsapp: '', // formato internacional sin signos: 52...
  github: 'https://github.com/Yunina805',
} as const;

export const NAVEGACION = [
  { texto: 'Proyectos', href: '/#proyectos' },
  { texto: 'Qué construyo', href: '/#servicios' },
  { texto: 'Cómo trabajo', href: '/#proceso' },
  { texto: 'Contacto', href: '/#contacto' },
] as const;

/** Los números que sostienen el portafolio. Verificables, no adjetivos. */
export const CIFRAS = [
  { valor: '3', unidad: 'años', detalle: 'desarrollando' },
  { valor: '58,000', unidad: 'líneas', detalle: 'de PHP en producción' },
  { valor: '144', unidad: 'componentes', detalle: 'Livewire en un solo sistema' },
  { valor: '2026', unidad: '', detalle: 'ERP en producción desde agosto' },
] as const;
