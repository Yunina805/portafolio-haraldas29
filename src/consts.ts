/** Datos del sitio, en un solo lugar. */

export const SITIO = {
  // La persona firma la relación con el cliente; la marca firma el contrato,
  // la factura y el documento de especificación. Las dos conviven a propósito.
  nombre: 'Harald Allerhand Santaella',
  nombreCorto: 'Harald Santaella',
  marca: 'Allsan Sistemas',
  monograma: 'HA',
  oficio: 'Desarrollador full-stack',
  lema: 'Soluciones a la medida para tu negocio',
  descripcion:
    'Desarrollador web full-stack en Oaxaca. Construyo sistemas de gestión, ' +
    'tiendas en línea e integraciones a la medida de cómo opera tu negocio. ' +
    'Trabajo en remoto para todo México.',

  ciudad: 'Oaxaca de Juárez, Oaxaca',
  // Para el rótulo del hero: "Oaxaca de Juárez, Oaxaca" repite la palabra dos
  // veces y a quien lee desde otro estado le dice menos que "Oaxaca, México".
  ciudadCorta: 'Oaxaca, México',
  cobertura: 'En remoto para todo México',

  // Reenvía a harald.as2901@gmail.com por Email Routing de Cloudflare.
  // Hay regla catch-all, así que cualquier dirección @allsansystems.com llega
  // igual — un dedazo del cliente no se pierde.
  correo: 'hola@allsansystems.com',

  // Nunca en texto plano: sólo detrás del botón, para que no lo cosechen.
  // TODO: Harald confirma desde el celular que este formato abre el chat.
  // Si no abre, el alterno es 5219617676260 (con el 1 después del 52).
  whatsapp: '529617676260',

  github: 'https://github.com/Yunina805',
  linkedin: 'https://www.linkedin.com/in/harald-allerhand-santaella-1a5889293/',
} as const;

/**
 * Redes y contacto directo, para el encabezado, el panel móvil y el pie.
 * Todo sale de SITIO: si cambia un dato allá, cambia aquí solo.
 */
export const REDES = [
  {
    nombre: 'WhatsApp',
    href: `https://wa.me/${SITIO.whatsapp}`,
    icono: 'whatsapp-line',
    externo: true,
  },
  { nombre: 'LinkedIn', href: SITIO.linkedin, icono: 'linkedin-box-fill', externo: true },
  { nombre: 'GitHub', href: SITIO.github, icono: 'github-fill', externo: true },
  { nombre: 'Correo', href: `mailto:${SITIO.correo}`, icono: 'mail-line', externo: false },
] as const;

/**
 * Compromisos públicos. ⚠️ CONFÍRMALOS ANTES DE PUBLICAR: son promesas que
 * quedan por escrito y no cumplirlas cuesta más que no haberlas hecho.
 */
export const COMPROMISOS = {
  respuesta: 'Contesto el mismo día hábil',
  cotizacion: 'La especificación y la cotización no tienen costo',
  soporte: '4 meses de soporte incluido',
} as const;

// Con la barra al inicio para que también funcionen desde otras páginas.
export const NAVEGACION = [
  { texto: 'Proyectos', href: '/proyectos' },
  { texto: 'Qué construyo', href: '/#servicios' },
  { texto: 'Cómo trabajo', href: '/#proceso' },
  { texto: 'Contacto', href: '/contacto' },
] as const;

/**
 * Qué conviene contar en el primer mensaje.
 *
 * Sirve para dos cosas: al cliente le quita el "no sé ni qué escribirle", y a
 * ti te llega el mensaje con lo necesario para cotizar sin diez idas y vueltas.
 */
export const QUE_CONTAR = [
  {
    titulo: 'A qué se dedica tu negocio',
    detalle: 'Con una o dos líneas basta. Lo que necesito entender es cómo opera.',
    icono: 'store-2-line',
  },
  {
    titulo: 'Qué te está costando trabajo hoy',
    detalle:
      'El problema concreto: se pierden los cobros, no sabes qué hay en inventario, ' +
      'el sistema viejo ya no da.',
    icono: 'error-warning-line',
  },
  {
    titulo: 'Si ya tienes algo funcionando',
    detalle: 'Un sistema, una página, hojas de Excel. Todo sirve, y cambia el plan.',
    icono: 'archive-2-line',
  },
  {
    titulo: 'Para cuándo lo necesitas',
    detalle: 'Aunque sea aproximado. Si hay una fecha dura, mejor saberlo desde el principio.',
    icono: 'calendar-check-line',
  },
] as const;

/** Las dudas que aparecen siempre. Contestarlas antes de que las pregunten. */
export const PREGUNTAS = [
  {
    pregunta: '¿Cuánto cuesta un sistema?',
    respuesta:
      'Depende de qué tan grande sea, y por eso lo primero que hago es la ' +
      'especificación: un documento con cada módulo, el tiempo y el costo exacto. ' +
      'Ese documento no tiene costo, y hasta que lo leas y lo firmes no hay ningún ' +
      'compromiso de tu parte.',
  },
  {
    pregunta: '¿Cuánto tarda?',
    respuesta:
      'También sale en la especificación, con fechas. Para darte una idea: una ' +
      'página institucional son días, un sistema de gestión mediano son semanas, ' +
      'y un ERP completo son meses. Entrego por partes, así que ves avances desde ' +
      'el principio y no al final.',
  },
  {
    pregunta: '¿Cómo se paga?',
    respuesta:
      '50% al inicio para arrancar y 50% contra entrega, cuando el sistema ya ' +
      'está funcionando en línea. Nada por adelantado antes de firmar.',
  },
  {
    pregunta: '¿Trabajas fuera de Oaxaca?',
    respuesta:
      'Sí, en remoto para todo México. Las juntas para platicar el proyecto y ' +
      'aclarar dudas las hacemos por Zoom.',
  },
  {
    pregunta: '¿Quién paga el dominio y el hosting?',
    respuesta:
      'El dominio se registra a tu nombre y lo pagas tú, porque es tuyo — si algún ' +
      'día trabajas con alguien más, te lo llevas. Yo me encargo de subir el ' +
      'proyecto y dejarlo funcionando.',
  },
  {
    pregunta: '¿Y si después necesito algo que no estaba?',
    respuesta:
      'Si es una falla del sistema, se corrige sin costo: van 4 meses de soporte ' +
      'incluidos. Si es una función nueva que no estaba en la especificación, se ' +
      'cotiza aparte. Lo digo desde el principio para que nadie se lleve sorpresas.',
  },
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
 *
 * `prueba` son los slugs de los proyectos donde eso ya está hecho. Convierte
 * cada línea de "esto sé hacer" en "esto ya lo hice, aquí está" — que es la
 * diferencia entre una lista de servicios y un portafolio.
 */
export const SERVICIOS = [
  {
    titulo: 'Sistema de gestión para tu negocio',
    prueba: ['tu-vision-telecable', 'erp-abib'],
    detalle:
      'Clientes, cobros, inventario, reportes y permisos por puesto. Lo que hoy ' +
      'llevas en Excel y en libretas, en un solo lugar y sin que se pierda nada.',
    icono: 'dashboard-3-line',
  },
  {
    titulo: 'Tienda en línea',
    prueba: ['internet-del-bienestar'],
    detalle:
      'Productos con variantes y tallas, inventario que se descuenta solo, ' +
      'envíos y seguimiento de pedidos.',
    icono: 'shopping-bag-3-line',
  },
  {
    titulo: 'Cobros en línea',
    prueba: ['erp-abib', 'portal-abib', 'internet-del-bienestar'],
    detalle:
      'Tarjeta de crédito y débito con Mercado Pago, Stripe o la pasarela que ' +
      'prefieras. El dinero llega a tu cuenta, no pasa por la mía.',
    icono: 'bank-card-line',
  },
  {
    titulo: 'Integración con lo que ya usas',
    prueba: ['tu-vision-telecable', 'erp-abib'],
    detalle:
      'Que tu sistema le hable por API a tus equipos y a tus otros programas. ' +
      'Como el que corta y reconecta el internet de un cliente desde el panel.',
    icono: 'links-line',
  },
  {
    titulo: 'Migración de tu sistema viejo',
    prueba: ['tu-vision-telecable'],
    detalle:
      'Traigo tus datos al sistema nuevo: miles de registros, con la ' +
      'codificación reparada y sin detener tu operación.',
    icono: 'database-2-line',
  },
  {
    titulo: 'Página institucional',
    prueba: ['portal-abib'],
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
 *
 * `fase` parte el proceso en la firma: todo lo de "antes" no le cuesta nada al
 * cliente. Ese dato estaba escondido dentro de los textos y es el argumento
 * más fuerte de la sección, así que el diseño lo saca a la superficie.
 */
export const PROCESO = [
  {
    titulo: 'Me cuentas tu idea',
    fase: 'antes',
    detalle:
      'Una llamada por Zoom, o por escrito si lo prefieres. Aquí sólo escucho ' +
      'cómo opera tu negocio y qué necesitas resolver.',
    icono: 'chat-3-line',
  },
  {
    titulo: 'Te entrego la especificación',
    fase: 'antes',
    detalle:
      'Un documento con el proyecto completo: cada módulo que se va a ' +
      'desarrollar, el tiempo y el costo. Sin costo y sin sorpresas a media obra.',
    icono: 'file-list-3-line',
  },
  {
    titulo: 'Firmas y arrancamos',
    fase: 'antes',
    detalle:
      'Tu firma en la especificación es el punto de partida, y deja por escrito ' +
      'qué incluye el proyecto y qué no.',
    icono: 'quill-pen-line',
  },
  {
    titulo: '50% al inicio, 50% contra entrega',
    fase: 'durante',
    detalle:
      'La mitad para empezar a trabajar, la otra mitad cuando el sistema está ' +
      'entregado y funcionando.',
    icono: 'bank-card-line',
  },
  {
    titulo: 'Lo dejo funcionando en producción',
    fase: 'durante',
    detalle:
      'Yo subo el proyecto y lo dejo en línea. El dominio se registra a tu ' +
      'nombre y lo pagas tú, porque es tuyo.',
    icono: 'rocket-2-line',
  },
  {
    titulo: '4 meses de soporte incluido',
    fase: 'durante',
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
 * Todos son sistemas propios y todos tienen el repositorio privado: guardan
 * datos de personas reales. Se presentan por lo que hacen y por su tamaño, no
 * con enlace al código.
 *
 * `porQue` es el campo que más trabaja de este archivo. Casi cualquier
 * portafolio lista tecnologías; casi ninguno explica por qué esas y no otras
 * para ese proyecto en concreto. Eso es lo que distingue a alguien que eligió
 * de alguien que sólo usó lo que sabía.
 */
export const PROYECTOS = [
  {
    slug: 'tu-vision-telecable',
    // Los dos proyectos de Abib comparten `nombre`; este los distingue
    // cuando se nombran de corrido, como en la lista de servicios.
    nombreCorto: 'Tu Visión',
    nombre: 'Tu Visión Telecable',
    titulo: 'ERP completo para un proveedor de TV e internet',
    gancho: 'Todo el ciclo del cliente de un ISP y la operación interna de la empresa.',
    portada: true,
    periodo: 'feb 2026 → hoy',
    estado: 'En producción',
    cifraTitular: { valor: '58,000', etiqueta: 'líneas de PHP' },

    resumen:
      'Sistema de gestión integral para un proveedor de internet: todo el ciclo ' +
      'del cliente —contratación, cobro mensual, reportes de servicio, ' +
      'suspensión, reconexión, cancelación y recuperación de equipo— más la ' +
      'operación interna de la empresa: infraestructura de red, recursos ' +
      'humanos, finanzas por sucursal y catálogos.',

    destacados: [
      'Corta y reconecta el servicio de un cliente hablándole por API a routers Mikrotik y a la OLT, con auditoría de cada acción y reintentos.',
      'Topología GPON con presupuesto óptico y un diagrama de cómo viaja la luz desde la central hasta la casa del cliente.',
      'Cobros, cajas por sucursal y cuentas por pagar con multi-moneda: todo en transacciones y con doble control.',
      'Control de accesos por rol derivado del árbol del menú, con permisos página por página.',
      'Migración del sistema anterior, incluida la reparación de la codificación corrupta que traían los datos viejos.',
    ],

    stack: [
      { nombre: 'Laravel 12', icono: 'si:laravel' },
      { nombre: 'Livewire 3', icono: 'si:livewire' },
      { nombre: 'Tailwind CSS', icono: 'si:tailwindcss' },
      { nombre: 'Alpine.js', icono: 'si:alpinedotjs' },
      { nombre: 'MySQL', icono: 'si:mysql' },
      { nombre: 'Vite', icono: 'si:vite' },
    ],

    porQue:
      'Un ERP lo usa la misma gente ocho horas al día. Lo que importa no es que ' +
      'se vea moderno: es que responda rápido y que guardar algo no te obligue a ' +
      'recargar la página. Livewire da exactamente eso sin montar una API aparte ' +
      'ni un frontend separado — el servidor manda HTML y la pantalla se ' +
      'actualiza sola. Con 231 vistas, mantener además una aplicación de ' +
      'JavaScript en paralelo habría duplicado el trabajo sin darle nada al ' +
      'usuario. Alpine cubre lo poco que sí tiene que pasar en el navegador, y ' +
      'nada más.',

    integraciones: [
      { nombre: 'Mikrotik / RouterOS', detalle: 'Corte y reconexión del servicio por API, con auditoría y reintentos.' },
      { nombre: 'OLT (GPON)', detalle: 'Lectura de la red óptica y presupuesto de luz por cliente.' },
    ],

    cifras: [
      { valor: '58,000', etiqueta: 'líneas de PHP' },
      { valor: '144', etiqueta: 'componentes Livewire' },
      { valor: '231', etiqueta: 'vistas' },
      { valor: '105', etiqueta: 'modelos' },
      { valor: '192', etiqueta: 'migraciones' },
      { valor: '142', etiqueta: 'rutas' },
    ],

    enlaceVivo: null,
  },

  {
    slug: 'erp-abib',
    // Los dos proyectos de Abib comparten `nombre`; este los distingue
    // cuando se nombran de corrido, como en la lista de servicios.
    nombreCorto: 'ERP de Abib',
    nombre: 'Abib',
    titulo: 'ERP de un operador móvil',
    gancho: 'Activaciones, portabilidad, distribuidores y conciliación del dinero.',
    portada: false,
    periodo: 'En operación desde 2021',
    estado: 'En producción',
    cifraTitular: { valor: '456', etiqueta: 'vistas' },

    resumen:
      'El sistema central de un negocio de telefonía: activación de líneas, ' +
      'portabilidad, red de distribuidores con sus comisiones, facturación ' +
      'electrónica, cobros por varias pasarelas y conciliación del dinero. Es el ' +
      'sistema más grande del grupo.',

    destacados: [
      'Activaciones e historial de línea, asignaciones y cobertura.',
      'Red de distribuidores con comisiones y notas de comisión.',
      'Caja, efectivo y cheques, con conciliación de pagos.',
      'eSIM, equipos, quejas y diagnósticos, y procesos automatizados.',
    ],

    stack: [
      { nombre: 'Laravel', icono: 'si:laravel' },
      { nombre: 'PHP', icono: 'si:php' },
      { nombre: 'Blade', icono: 'si:laravel' },
      { nombre: 'MySQL', icono: 'si:mysql' },
    ],

    porQue:
      'Este sistema mueve dinero real todos los días: cuatro pasarelas de pago, ' +
      'facturación ante el SAT y conciliación de lo cobrado. Ahí la prioridad no ' +
      'es la novedad, es que nada se rompa y que otra persona pueda entenderlo ' +
      'cuando le toque. Blade y Laravel son lo más estable y lo más fácil de ' +
      'mantener a largo plazo, y las transacciones de la base de datos son las ' +
      'que garantizan que un cobro no se registre dos veces ni se pierda a la ' +
      'mitad. Un sistema de cobros no necesita ser moderno; necesita ser correcto.',

    integraciones: [
      { nombre: 'Mercado Pago', detalle: 'Cobros con tarjeta de crédito y débito.' },
      { nombre: 'Openpay', detalle: 'Segunda pasarela de cobro con tarjeta.' },
      { nombre: 'Kushki', detalle: 'Tercera pasarela, para ampliar cobertura de emisores.' },
      { nombre: 'STP', detalle: 'Transferencias SPEI y conciliación automática de depósitos.' },
      { nombre: 'Facturama', detalle: 'Facturación electrónica: emisión de CFDI ante el SAT.' },
      { nombre: 'Altan Redes', detalle: 'SMS y notificaciones sobre la red móvil.' },
      { nombre: 'RENAPO', detalle: 'Validación de CURP contra el registro nacional.' },
      { nombre: 'Nubarium', detalle: 'Validación de identificaciones oficiales.' },
      { nombre: 'Webhooks', detalle: 'Entrantes y salientes, para sincronizar sistemas de terceros.' },
    ],

    cifras: [
      { valor: '111', etiqueta: 'modelos' },
      { valor: '456', etiqueta: 'vistas' },
      { valor: '155', etiqueta: 'migraciones' },
      { valor: '39', etiqueta: 'controladores' },
    ],

    enlaceVivo: null,
  },

  {
    slug: 'internet-del-bienestar',
    // Los dos proyectos de Abib comparten `nombre`; este los distingue
    // cuando se nombran de corrido, como en la lista de servicios.
    nombreCorto: 'Internet del Bienestar',
    nombre: 'Internet del Bienestar',
    titulo: 'Plataforma pública y red de distribuidores',
    gancho: 'El cliente compra su SIM desde el celular; atrás opera una red de dos niveles.',
    portada: false,
    periodo: 'En operación desde dic 2023',
    estado: 'En producción',
    cifraTitular: { valor: '56', etiqueta: 'componentes Livewire' },

    resumen:
      'Por fuera, el cliente compra su SIM, verifica que su equipo sea ' +
      'compatible, se da de alta, recarga y paga. Por dentro, opera una red de ' +
      'distribuidores y subdistribuidores con inventario de SIMs, saldos, ' +
      'órdenes y envíos.',

    destacados: [
      'Alta con identidad validada: INE, pasaporte mexicano y pasaporte de extranjero.',
      'Compatibilidad del equipo por IMEI antes de vender la línea, que es lo que evita la devolución.',
      'Red de distribución de dos niveles con saldos, historial de movimientos, órdenes y envíos.',
      'Vinculación, desvinculación y portabilidad de líneas.',
      'Roles y permisos para separar lo que ve cada perfil.',
    ],

    stack: [
      { nombre: 'Laravel', icono: 'si:laravel' },
      { nombre: 'Livewire', icono: 'si:livewire' },
      { nombre: 'Blade', icono: 'si:laravel' },
      { nombre: 'MySQL', icono: 'si:mysql' },
    ],

    porQue:
      'Aquí conviven dos públicos con necesidades opuestas. El cliente entra una ' +
      'vez desde su celular, muchas veces con mala señal: esa parte tiene que ' +
      'cargar ligero y salir rápido, y para eso Blade es difícil de superar. El ' +
      'distribuidor, en cambio, vive dentro del panel administrando inventario y ' +
      'saldos, y ahí sí hace falta interacción constante — ese es el trabajo de ' +
      'Livewire. Meterlos en el mismo proyecto, cada uno con la herramienta que ' +
      'le toca, evita mantener dos aplicaciones separadas para un solo negocio.',

    integraciones: [
      { nombre: 'Nubarium', detalle: 'Validación de INE y pasaportes contra la fuente oficial.' },
      { nombre: 'Mercado Pago', detalle: 'Cobros en línea, con carrito de compra propio.' },
      { nombre: 'Validación de IMEI', detalle: 'Comprueba la compatibilidad del equipo antes de la venta.' },
    ],

    cifras: [
      { valor: '56', etiqueta: 'componentes Livewire' },
      { valor: '145', etiqueta: 'vistas' },
      { valor: '36', etiqueta: 'modelos' },
    ],

    enlaceVivo: null,
  },

  {
    slug: 'portal-abib',
    // Los dos proyectos de Abib comparten `nombre`; este los distingue
    // cuando se nombran de corrido, como en la lista de servicios.
    nombreCorto: 'Portal de Abib',
    nombre: 'Abib',
    titulo: 'Rediseño completo del portal de autoservicio',
    gancho: 'Un portal de 2021 rehecho por completo, sin detener el negocio.',
    portada: false,
    periodo: 'mar 2026 → jun 2026',
    estado: 'En línea',
    cifraTitular: { valor: '+26,300', etiqueta: 'líneas agregadas' },

    resumen:
      'El portal donde el cliente de una empresa de telefonía contrata, recarga, ' +
      'paga, factura y administra sus líneas. La página existía desde 2021 y era ' +
      'muy sencilla; en 2026 se rehizo por completo.',

    destacados: [
      'Cobros en línea con Mercado Pago y Openpay: recargas y compra de paquetes con tarjeta.',
      'Vinculación de líneas por CURP, con reCAPTCHA en la consulta pública.',
      'Perfil verificado del cliente con INE, CURP y fotografía.',
      'Facturación, con los folios ya facturados marcados y mensajes de error claros.',
      'Recargas con vigencia por paquete y selección de red para eSIM.',
      'Preguntas frecuentes con video, carrusel de promociones y menú lateral responsivo.',
    ],

    stack: [
      { nombre: 'Angular 15', icono: 'si:angular' },
      { nombre: 'TypeScript', icono: 'si:typescript' },
      { nombre: 'SCSS', icono: 'si:sass' },
    ],

    porQue:
      'El portal ya existía en Angular desde 2021, así que la decisión real era ' +
      'rehacerlo desde cero en otra tecnología o evolucionarlo. Evolucionarlo era ' +
      'lo correcto: el negocio no puede quedarse sin portal mientras alguien ' +
      'reescribe seis meses. Y TypeScript es justo lo que hace viable meterle ' +
      'mano a 97 archivos de un código que no escribiste tú — el compilador te ' +
      'avisa de lo que rompiste antes de que lo descubra un cliente. En un ' +
      'rediseño sobre código ajeno, eso no es comodidad: es la red de seguridad.',

    integraciones: [
      { nombre: 'Mercado Pago', detalle: 'Recargas y compra de paquetes con tarjeta.' },
      { nombre: 'Openpay', detalle: 'Segunda opción de cobro con tarjeta.' },
      { nombre: 'reCAPTCHA', detalle: 'Protege la consulta pública de líneas por CURP.' },
    ],

    cifras: [
      { valor: '97', etiqueta: 'archivos tocados' },
      { valor: '+26,300', etiqueta: 'líneas agregadas' },
      { valor: '−14,400', etiqueta: 'líneas retiradas' },
      { valor: '2021', etiqueta: 'año del portal original' },
    ],

    enlaceVivo: 'https://abib.com.mx',
  },

  {
    slug: 'rifas-qr',
    // Los dos proyectos de Abib comparten `nombre`; este los distingue
    // cuando se nombran de corrido, como en la lista de servicios.
    nombreCorto: 'Rifas con QR',
    nombre: 'Sistema de Rifas con QR',
    titulo: 'Control de boletos de punta a punta',
    gancho: 'Boletos impresos con QR que cualquiera puede verificar con la cámara.',
    portada: false,
    periodo: 'feb 2026 → mar 2026',
    estado: 'Terminado',
    cifraTitular: { valor: 'QR', etiqueta: 'verificación pública' },

    resumen:
      'Plataforma para organizar rifas y controlar la venta física de boletos: ' +
      'se generan por lotes, se imprimen en PDF con su código QR y cada boleto ' +
      'se valida escaneándolo. Incluye red de vendedores y corte diario.',

    destacados: [
      'Verificación pública: cualquiera escanea el QR de un boleto y confirma en el momento si es legítimo, sin tener cuenta en el sistema.',
      'Impresión masiva en PDF de los boletos de un lote, cada uno con su QR único.',
      'Vendedores con boletos asignados, venta, liberación y corte diario del dinero.',
    ],

    stack: [
      { nombre: 'Laravel', icono: 'si:laravel' },
      { nombre: 'Blade', icono: 'si:laravel' },
      { nombre: 'Tailwind CSS', icono: 'si:tailwindcss' },
      { nombre: 'MySQL', icono: 'si:mysql' },
    ],

    porQue:
      'El problema no era la interfaz, era la confianza: quien compra un boleto ' +
      'en la calle necesita poder comprobar en tres segundos que no le vendieron ' +
      'una copia. Por eso todo el peso está en el servidor y la página de ' +
      'verificación es una sola vista pública, sin sesión y sin instalar nada — ' +
      'abre con la cámara del celular y responde al instante. dompdf arma los ' +
      'boletos por lote y simple-qrcode le mete a cada uno su código único.',

    integraciones: [],

    cifras: [],

    enlaceVivo: null,
  },
] as const;
