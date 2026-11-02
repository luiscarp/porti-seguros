// BORRADOR — pendiente de revisión de Claudia.

const ramo = {
  slug: 'seguro-de-viaje',
  nombre: 'Seguro de viaje',
  h1: 'Seguro de viaje desde Chihuahua',
  whatsappText: 'Hola, quiero cotizar un seguro de *viaje*.',
  intro: [
    'Una emergencia médica, la pérdida de tu equipaje o la cancelación de un vuelo pueden arruinar un viaje y salir caros, sobre todo en el extranjero. Un seguro de viaje te da respaldo y asistencia cuando estás lejos de casa. En PorTi Seguros te ayudamos a elegir el seguro adecuado si sales desde Chihuahua, ya sea a otro estado o a otro país.',
  ],
  secciones: [
    {
      titulo: '¿Qué es un seguro de viaje?',
      parrafos: ['Es un seguro temporal que te protege durante las fechas de tu viaje. Incluye coberturas de gastos médicos por enfermedad o accidente y servicios de asistencia, como orientación médica y apoyo ante imprevistos.'],
    },
    {
      titulo: '¿Para quién es?',
      parrafos: ['Para quien viaja por vacaciones, trabajo o estudios, y para familias. Si viajas con frecuencia, existen planes anuales que cubren varios viajes.'],
    },
    {
      titulo: 'Coberturas generales',
      lista: [
        'Gastos médicos por enfermedad o accidente.',
        'Traslado o repatriación médica.',
        'Pérdida o demora de equipaje.',
        'Cancelación o interrupción del viaje, según el plan.',
        'Asistencia legal y en viaje.',
      ],
      cierre: 'Las coberturas y sus límites cambian según la aseguradora y el plan; te los mostramos antes de contratar.',
    },
    {
      titulo: 'Qué considerar al elegir',
      lista: [
        'Tu destino: la atención médica en el extranjero puede ser muy costosa.',
        'Si tu seguro de gastos médicos mayores ya tiene cobertura en el extranjero.',
        'Las actividades que realizarás, como deportes.',
        'Las enfermedades preexistentes.',
        'La duración del viaje y si te conviene un plan anual.',
        'Si el país que visitas pide un seguro como requisito de entrada; confírmalo con su consulado.',
      ],
    },
  ],
  faq: [
    { pregunta: '¿Mi seguro de gastos médicos me cubre en el extranjero?', respuesta: 'Algunas pólizas incluyen cobertura en el extranjero solo para emergencias o como cobertura adicional. Revisamos tu póliza actual para saber si necesitas un seguro de viaje.' },
    { pregunta: '¿Cuándo debo contratar el seguro de viaje?', respuesta: 'Antes de salir. Algunas coberturas, como la de cancelación, conviene contratarlas desde que compras tus boletos.' },
    { pregunta: '¿Sirve para viajes nacionales?', respuesta: 'Sí, hay planes para viajes dentro de México y para el extranjero.' },
    { pregunta: '¿Cubre deportes extremos?', respuesta: 'Muchas pólizas los excluyen o los cubren con un costo adicional. Dinos qué actividades harás para elegir bien.' },
  ],
  relacionados: ['gastos-medicos-mayores', 'seguros-de-vida', 'seguro-de-auto'],
}

export default ramo
