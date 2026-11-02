// BORRADOR — pendiente de revisión de Claudia.

const ramo = {
  slug: 'seguro-de-auto',
  nombre: 'Seguro de auto',
  imagen: '/seguroauto.png',
  h1: 'Seguro de auto en Chihuahua',
  whatsappText: 'Hola, quiero cotizar un seguro de auto (página Seguro de Auto).',
  intro: [
    'Un seguro de auto te protege frente a los imprevistos del camino: un choque, un robo o un daño a otra persona. En PorTi Seguros te ayudamos en Chihuahua a entender cada cobertura antes de contratar, para que pagues por la protección que realmente necesitas.',
  ],
  secciones: [
    {
      titulo: '¿Qué es un seguro de auto?',
      parrafos: ['Es un contrato con una aseguradora que, a cambio del pago de una prima, responde por ciertos daños relacionados con tu vehículo, según las coberturas que elijas. Lo más importante es saber qué cubre, qué no cubre y cuánto te corresponde pagar a ti en caso de siniestro, es decir, el deducible.'],
    },
    {
      titulo: 'Tipos de cobertura',
      subsecciones: [
        { titulo: 'Responsabilidad civil', texto: 'Cubre los daños que causes a otras personas o a sus bienes con tu vehículo. Es la protección básica para circular.' },
        { titulo: 'Cobertura limitada', texto: 'Además de responsabilidad civil, suele incluir el robo total del vehículo y otras coberturas, como asistencia legal y vial.' },
        { titulo: 'Cobertura amplia', texto: 'Agrega los daños materiales a tu propio vehículo, por ejemplo en un choque, además de lo que incluye la cobertura limitada.' },
      ],
      cierre: 'El nombre y el contenido exacto de cada paquete cambian según la aseguradora; por eso te los explicamos uno por uno.',
    },
    {
      titulo: '¿Para quién es?',
      parrafos: ['Para cualquier persona que maneje en Chihuahua, ya sea un auto de uso diario, un vehículo familiar o una camioneta de trabajo. Si usas tu auto para plataformas de transporte o como taxi, necesitas una póliza diferente; consulta nuestras páginas de seguro para Uber y DiDi y de seguro para taxi.'],
    },
    {
      titulo: 'Qué considerar al elegir',
      lista: [
        'El deducible: cuánto pagarías tú en caso de choque o robo.',
        'Los límites de responsabilidad civil.',
        'Si incluye asistencia legal y vial.',
        'Cómo se calcula el valor de tu vehículo para la indemnización.',
        'Las exclusiones, como manejar en estado de ebriedad o sin licencia.',
        'La atención que recibirás cuando tengas un siniestro.',
      ],
    },
    {
      titulo: 'Qué hacer en caso de accidente',
      listaOrdenada: true,
      lista: [
        'Verifica que todos estén bien y, si hay lesionados, llama a los servicios de emergencia.',
        'Reporta el siniestro a tu aseguradora.',
        'No hagas acuerdos ni firmes documentos sin el ajustador.',
        'Avísanos para darte seguimiento.',
      ],
    },
  ],
  faq: [
    { pregunta: '¿Qué cobertura me conviene?', respuesta: 'Depende del valor de tu auto, de cómo lo usas y de cuánto podrías pagar por tu cuenta si ocurre un daño. Te mostramos las diferencias para que elijas con información.' },
    { pregunta: '¿Qué es el deducible?', respuesta: 'Es la parte del costo de un siniestro que te corresponde pagar a ti. Un deducible más alto suele bajar el costo del seguro, pero aumenta lo que pagas si lo usas.' },
    { pregunta: '¿Qué pasa si presto mi auto?', respuesta: 'Muchas pólizas protegen al vehículo aunque lo maneje otra persona con licencia vigente, pero las condiciones varían. Revisamos contigo las de tu póliza.' },
    { pregunta: '¿Me ayudan si tengo un siniestro?', respuesta: 'Sí. Te orientamos desde el reporte y damos seguimiento con la aseguradora hasta que se resuelva.' },
  ],
  relacionados: ['seguro-uber-didi', 'seguro-flotillas', 'seguro-para-taxi'],
}

export default ramo
