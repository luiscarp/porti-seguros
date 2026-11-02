// BORRADOR — pendiente de revisión de Claudia.

const ramo = {
  slug: 'responsabilidad-civil',
  nombre: 'Seguro de responsabilidad civil',
  h1: 'Seguro de responsabilidad civil en Chihuahua',
  intro: [
    'Cuando tienes un negocio o ejerces una profesión, un error o un accidente puede causar daños a otras personas y generar reclamaciones costosas. Un seguro de responsabilidad civil te ayuda a responder por esos daños. En PorTi Seguros te asesoramos en Chihuahua para elegir la protección adecuada a tu actividad.',
  ],
  secciones: [
    {
      titulo: '¿Qué es un seguro de responsabilidad civil?',
      parrafos: ['Es un seguro que cubre los daños que, de forma involuntaria, causes a terceros en sus bienes o en sus personas, y por los que seas legalmente responsable, de acuerdo con las condiciones de la póliza. También puede incluir los gastos de defensa.'],
    },
    {
      titulo: '¿Para quién es?',
      subsecciones: [
        { titulo: 'Negocios y comercios', texto: 'Restaurantes, tiendas, talleres, gimnasios, escuelas y cualquier negocio que reciba clientes o trabaje en instalaciones de terceros.' },
        { titulo: 'Profesionistas', texto: 'Médicos, arquitectos, ingenieros, contadores y otros profesionistas pueden contratar responsabilidad civil profesional por errores u omisiones en su trabajo.' },
        { titulo: 'Empresas y contratistas', texto: 'Empresas que necesitan presentar una póliza de responsabilidad civil para trabajar con sus clientes o en obras.' },
        { titulo: 'Organizadores de eventos', texto: 'Si organizas un evento, revisa nuestra página de seguro de responsabilidad civil para eventos.' },
      ],
    },
    {
      titulo: 'Tipos comunes',
      lista: [
        'Responsabilidad civil general, por actividades e inmuebles.',
        'Responsabilidad civil profesional.',
        'Responsabilidad civil por productos.',
        'Responsabilidad civil del arrendatario.',
        'Responsabilidad civil para contratistas.',
      ],
    },
    {
      titulo: 'Qué considerar al elegir',
      lista: [
        'Que la póliza describa correctamente tu actividad.',
        'Un límite de responsabilidad adecuado para tus riesgos.',
        'Los deducibles y las exclusiones.',
        'Si incluye gastos de defensa legal.',
        'Los requisitos que piden tus clientes o tus contratos.',
      ],
    },
    {
      titulo: 'Ejemplos de situaciones que puede cubrir',
      parrafos: [
        'Siempre de acuerdo con las condiciones de la póliza, la responsabilidad civil puede responder en casos como:',
      ],
      lista: [
        'Un cliente se resbala y se lesiona dentro de tu local.',
        'Durante un trabajo dañas por accidente la propiedad de un cliente.',
        'Un producto que vendes causa un daño a quien lo usa.',
        'Causas daños al inmueble que rentas.',
      ],
    },
    {
      titulo: 'Lo que normalmente no cubre',
      lista: [
        'Daños causados de forma intencional.',
        'Multas y sanciones.',
        'Obligaciones que asumes por contrato más allá de lo que marca la ley.',
        'Daños a tus propios bienes, que se protegen con un seguro de daños.',
      ],
    },
  ],
  faq: [
    { pregunta: '¿Mi seguro de daños ya incluye responsabilidad civil?', respuesta: 'Algunas pólizas de casa o negocio incluyen una cobertura básica de responsabilidad civil, pero puede no ser suficiente para tu actividad. Lo revisamos contigo.' },
    { pregunta: 'Un cliente me pide una póliza de responsabilidad civil para un contrato, ¿me ayudan?', respuesta: 'Sí. Revisamos los requisitos del contrato y te ayudamos a obtener una póliza que los cumpla.' },
    { pregunta: '¿Cubre multas o sanciones?', respuesta: 'Por lo general, las multas y sanciones no se cubren. Te explicamos las exclusiones de cada póliza antes de contratar.' },
    { pregunta: '¿Cuánto cuesta un seguro de responsabilidad civil?', respuesta: 'Depende de tu actividad, del límite de responsabilidad, de tu historial y de la aseguradora. Te preparamos una cotización con tus datos.' },
    { pregunta: '¿La póliza cubre los gastos de abogado?', respuesta: 'Muchas pólizas de responsabilidad civil incluyen gastos de defensa, con sus propios límites y condiciones. Te explicamos cómo funciona en cada opción.' },
  ],
  relacionados: ['seguro-eventos-masivos', 'seguro-de-danos', 'seguro-flotillas'],
}

export default ramo
