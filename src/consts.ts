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

/**
 * Compromisos públicos. ⚠️ CONFÍRMALOS ANTES DE PUBLICAR: son promesas que
 * quedan por escrito y no cumplirlas cuesta más que no haberlas hecho.
 */
export const COMPROMISOS = {
  respuesta: 'Contesto el mismo día hábil',
  cotizacion: 'La especificación y la cotización no tienen costo',
  soporte: '4 meses de soporte incluido',
} as const;

// Con la barra al inicio para que también funcionen desde /sistema.
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
 * Qué puedo construir — problemas resueltos, no tecnologías.
 * Nadie contrata "Laravel": contrata "que mis cobros dejen de perderse".
 */
export const SERVICIOS = [
  {
    titulo: 'Sistema de gestión para tu negocio',
    detalle:
      'Clientes, cobros, inventario, reportes y permisos por puesto. Lo que hoy ' +
      'llevas en Excel y en libretas, en un solo lugar y sin que se pierda nada.',
    icono: 'dashboard-3-line',
  },
  {
    titulo: 'Tienda en línea',
    detalle:
      'Productos con variantes y tallas, inventario que se descuenta solo, ' +
      'envíos y seguimiento de pedidos.',
    icono: 'shopping-bag-3-line',
  },
  {
    titulo: 'Cobros en línea',
    detalle:
      'Tarjeta de crédito y débito con Mercado Pago, Stripe o la pasarela que ' +
      'prefieras. El dinero llega a tu cuenta, no pasa por la mía.',
    icono: 'bank-card-line',
  },
  {
    titulo: 'Integración con lo que ya usas',
    detalle:
      'Que tu sistema le hable por API a tus equipos y a tus otros programas. ' +
      'Como el que corta y reconecta el internet de un cliente desde el panel.',
    icono: 'links-line',
  },
  {
    titulo: 'Migración de tu sistema viejo',
    detalle:
      'Traigo tus datos al sistema nuevo: miles de registros, con la ' +
      'codificación reparada y sin detener tu operación.',
    icono: 'database-2-line',
  },
  {
    titulo: 'Página institucional',
    detalle:
      'Un sitio que carga rápido, se ve bien en celular y aparece en Google ' +
      'cuando alguien busca lo que vendes.',
    icono: 'global-line',
  },
] as const;

/**
 * Cómo se trabaja conmigo.
 *
 * Esto es lo que más diferencia el portafolio: casi ningún portafolio junior
 * dice cómo se cotiza, cómo se paga y qué pasa si el proyecto crece. Decirlo
 * antes de que pregunten es lo que hace que un cliente confíe.
 */
export const PROCESO = [
  {
    titulo: 'Me cuentas tu idea',
    detalle:
      'Una llamada por Zoom, o por escrito si lo prefieres. Aquí sólo escucho ' +
      'cómo opera tu negocio y qué necesitas resolver.',
    icono: 'chat-3-line',
  },
  {
    titulo: 'Te entrego la especificación',
    detalle:
      'Un documento con el proyecto completo: cada módulo que se va a ' +
      'desarrollar, el tiempo y el costo. Sin costo y sin sorpresas a media obra.',
    icono: 'file-list-3-line',
  },
  {
    titulo: 'Firmas y arrancamos',
    detalle:
      'Tu firma en la especificación es el punto de partida, y deja por escrito ' +
      'qué incluye el proyecto y qué no.',
    icono: 'quill-pen-line',
  },
  {
    titulo: '50% al inicio, 50% contra entrega',
    detalle:
      'La mitad para empezar a trabajar, la otra mitad cuando el sistema está ' +
      'entregado y funcionando.',
    icono: 'bank-card-line',
  },
  {
    titulo: 'Lo dejo funcionando en producción',
    detalle:
      'Yo subo el proyecto y lo dejo en línea. El dominio se registra a tu ' +
      'nombre y lo pagas tú, porque es tuyo.',
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

/** Tecnologías, agrupadas. Sin logos inventados: los que no existen van en texto. */
export const TECNOLOGIAS = [
  { grupo: 'Backend', icono: 'server-line', items: ['PHP', 'Laravel', 'Livewire'] },
  {
    grupo: 'Frontend',
    icono: 'layout-4-line',
    items: ['Tailwind CSS', 'Alpine.js', 'JavaScript', 'Angular', 'Astro'],
  },
  {
    grupo: 'Base de datos',
    icono: 'database-2-line',
    items: ['MySQL', 'Modelado', 'Migraciones', 'Importación masiva'],
  },
  {
    grupo: 'Integraciones',
    icono: 'links-line',
    items: ['Mercado Pago', 'Stripe', 'Mikrotik / RouterOS', 'APIs REST', 'PDF', 'Códigos QR'],
  },
] as const;

/**
 * Proyectos.
 *
 * Las capturas y las páginas de caso de estudio entran en la Fase 3. Las
 * tarjetas ya funcionan sin imagen para poder publicar el sitio antes.
 */
export const PROYECTOS = [
  {
    slug: 'tu-vision-telecable',
    nombre: 'Tu Visión Telecable',
    titulo: 'ERP completo para un proveedor de TV e internet',
    // El encuadre correcto: es la empresa donde trabaja, no un encargo externo.
    papel: 'Desarrollo y opero el ERP de la empresa',
    resumen:
      'Sistema de gestión integral para un proveedor de internet: todo el ciclo ' +
      'del cliente —contratación, cobro mensual, reportes, suspensión, ' +
      'reconexión y cancelación— más la operación interna de la empresa: red, ' +
      'recursos humanos, finanzas por sucursal y catálogos.',
    periodo: 'feb 2026 → hoy',
    estado: 'En producción',
    stack: ['Laravel 12', 'Livewire 3', 'Tailwind 3', 'Alpine.js', 'MySQL', 'Vite'],
    cifras: [
      { valor: '58,000', etiqueta: 'líneas de PHP' },
      { valor: '144', etiqueta: 'componentes Livewire' },
      { valor: '231', etiqueta: 'vistas' },
      { valor: '105', etiqueta: 'modelos' },
    ],
    destacados: [
      'Corta y reconecta el servicio de un cliente hablándole por API a routers Mikrotik y a la OLT, con auditoría de cada acción y reintentos.',
      'Topología GPON con presupuesto óptico y un diagrama de cómo viaja la luz desde la central hasta la casa del cliente.',
      'Cobros, cajas por sucursal y cuentas por pagar con multi-moneda: todo en transacciones y con doble control.',
      'Migración del sistema anterior, incluida la reparación de la codificación corrupta que traían los datos viejos.',
    ],
    repo: null, // privado: es de la empresa
  },
  {
    slug: 'rifas-qr',
    nombre: 'Sistema de Rifas con QR',
    titulo: 'Control de boletos de punta a punta',
    papel: 'Proyecto propio',
    resumen:
      'Plataforma para organizar rifas y controlar la venta física de boletos: ' +
      'se generan por lotes, se imprimen en PDF con su código QR y cada boleto ' +
      'se valida escaneándolo. Incluye red de vendedores y corte diario.',
    periodo: 'feb 2026 → mar 2026',
    estado: 'Terminado',
    stack: ['Laravel', 'Blade', 'Tailwind', 'MySQL', 'simple-qrcode', 'dompdf'],
    cifras: [],
    destacados: [
      'Verificación pública: cualquiera escanea el QR de un boleto y confirma en el momento si es legítimo, sin tener cuenta en el sistema.',
      'Impresión masiva en PDF de los boletos de un lote, cada uno con su QR único.',
      'Vendedores con boletos asignados, venta, liberación y corte diario del dinero.',
    ],
    repo: 'https://github.com/Yunina805/rifas-qr-sistema',
  },
] as const;
