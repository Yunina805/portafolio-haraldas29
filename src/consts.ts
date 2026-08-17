/** Datos del sitio, en un solo lugar. */

export const SITIO = {
  nombre: 'Harald Allerhand Santaella',
  nombreCorto: 'Harald Santaella',
  monograma: 'HA',
  oficio: 'Desarrollador full-stack',
  lema: 'Soluciones a la medida para tu negocio',
  descripcion:
    'Desarrollador web full-stack en Oaxaca. Construyo sistemas de gestión, ' +
    'tiendas en línea e integraciones a la medida de cómo opera tu negocio. ' +
    'Trabajo en remoto para todo México.',

  ciudad: 'Oaxaca de Juárez, Oaxaca',
  cobertura: 'En remoto para todo México',

  // TODO(Fase 5): cambiar a hola@<dominio> cuando esté comprado. Un correo con
  // dominio propio pesa distinto que un Gmail, y sale gratis con Email Routing.
  correo: 'harald.as2901@gmail.com',

  // Nunca en texto plano: sólo detrás del botón, para que no lo cosechen.
  // TODO: Harald confirma desde el celular que este formato abre el chat.
  // Si no abre, el alterno es 5219617676260 (con el 1 después del 52).
  whatsapp: '529617676260',

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

/**
 * Cómo se trabaja conmigo — se pinta en la Fase 2.
 *
 * Esto es lo que más diferencia el portafolio: casi ningún portafolio junior
 * dice cómo se cotiza, cómo se paga y qué pasa si el proyecto crece. Decirlo
 * antes de que pregunten es lo que hace que un cliente confíe.
 */
export const PROCESO = [
  {
    titulo: 'Me cuentas tu idea',
    detalle:
      'Una llamada por Zoom, o por escrito si prefieres. Aquí sólo escucho ' +
      'cómo opera tu negocio y qué necesitas resolver.',
    icono: 'chat-3-line',
  },
  {
    titulo: 'Te entrego la especificación',
    detalle:
      'Un documento con el proyecto completo: cada módulo que se va a ' +
      'desarrollar, el tiempo y el costo. Sin sorpresas a media obra.',
    icono: 'file-list-3-line',
  },
  {
    titulo: 'Firmas y arrancamos',
    detalle:
      'Tu firma en la especificación es el punto de partida y deja por escrito ' +
      'qué incluye el proyecto.',
    icono: 'quill-pen-line',
  },
  {
    titulo: '50% al inicio, 50% contra entrega',
    detalle:
      'La mitad para empezar a trabajar y la otra mitad cuando el sistema está ' +
      'entregado y funcionando.',
    icono: 'bank-card-line',
  },
  {
    titulo: 'Lo dejo funcionando en producción',
    detalle:
      'Yo subo el proyecto y lo dejo en línea. El dominio va a tu nombre y lo ' +
      'pagas tú, porque es tuyo.',
    icono: 'rocket-2-line',
  },
  {
    titulo: '4 meses de soporte incluido',
    detalle:
      'Cualquier falla del sistema se corrige sin costo durante cuatro meses. ' +
      'Las funciones nuevas que no estaban en la especificación se cotizan aparte.',
    icono: 'shield-check-line',
  },
] as const;
