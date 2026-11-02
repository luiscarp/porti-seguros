// BORRADOR — pendiente de revisión de Claudia.

const ramo = {
  slug: 'seguro-para-taxi',
  nombre: 'Seguro para taxi',
  h1: 'Seguro para taxi en Chihuahua',
  intro: [
    'Tu taxi es tu herramienta de trabajo. Un accidente, un robo o un problema con un pasajero puede dejarte sin ingresos durante días o semanas. En PorTi Seguros te asesoramos en Chihuahua para contratar un seguro de servicio público que te proteja a ti, a tus pasajeros y a terceros.',
  ],
  secciones: [
    {
      titulo: '¿Qué es un seguro de servicio público?',
      parrafos: [
        'Es un seguro de auto diseñado para vehículos que transportan personas a cambio de un pago, como los taxis. A diferencia de un seguro particular, contempla el uso comercial del vehículo y la presencia de pasajeros durante el trabajo diario.',
        'Un seguro adecuado también puede ser parte de los requisitos para operar. Te recomendamos confirmar los requisitos vigentes con la autoridad de transporte; nosotros te ayudamos a elegir una póliza que los cumpla.',
      ],
    },
    {
      titulo: 'Coberturas importantes',
      parrafos: ['De forma general, un seguro para taxi puede incluir:'],
      lista: [
        'Responsabilidad civil a pasajeros.',
        'Responsabilidad civil por daños a terceros en sus bienes y en sus personas.',
        'Daños materiales a la unidad.',
        'Robo total.',
        'Gastos médicos para ocupantes.',
        'Asistencia legal y vial.',
      ],
      cierre: 'Cada aseguradora define sus coberturas, límites y deducibles. Te explicamos las diferencias antes de contratar.',
    },
    {
      titulo: 'Taxis de sitio y taxis libres',
      parrafos: [
        'Ya sea que trabajes en un sitio o como taxi libre, el uso de tu unidad es intensivo. Al cotizar te preguntamos cómo trabajas, en qué horarios y quién maneja la unidad, para que la póliza refleje tu realidad y no tengas sorpresas al momento de un siniestro.',
        'Si eres dueño de varias unidades, también podemos revisar opciones para administrarlas en conjunto.',
      ],
    },
    {
      titulo: 'Proceso de contratación y documentos',
      parrafos: ['El proceso es sencillo: nos cuentas sobre tu unidad, te mostramos alternativas y, cuando elijas, te ayudamos con el trámite. Por lo general se solicitan datos del vehículo, como la tarjeta de circulación o la factura, y una identificación del propietario. La aseguradora puede pedir documentos adicionales según su proceso.'],
    },
    {
      titulo: 'Qué hacer en un siniestro',
      listaOrdenada: true,
      lista: [
        'Pon a salvo a tus pasajeros y, si hay lesionados, llama a los servicios de emergencia.',
        'Reporta de inmediato a tu aseguradora.',
        'Espera al ajustador antes de mover la unidad, salvo que sea indispensable por seguridad.',
        'No hagas acuerdos sin el ajustador.',
        'Avísanos para darte seguimiento.',
      ],
    },
  ],
  faq: [
    { pregunta: '¿Puedo asegurar un taxi con un seguro de auto particular?', respuesta: 'No es lo recomendable. Las pólizas particulares no están pensadas para el transporte de pasajeros a cambio de un pago y podrían negar el pago de un siniestro. Lo adecuado es una póliza de servicio público.' },
    { pregunta: '¿El seguro cubre a mis pasajeros?', respuesta: 'Las pólizas de servicio público suelen incluir responsabilidad civil a pasajeros y gastos médicos para ocupantes. Te mostramos los límites de cada opción.' },
    { pregunta: '¿Qué pasa si otra persona maneja mi taxi?', respuesta: 'Es importante informarlo al contratar. Algunas pólizas tienen condiciones sobre quién puede conducir la unidad; revisamos contigo que la póliza contemple a quienes la manejan.' },
    { pregunta: '¿Puedo pagar en parcialidades?', respuesta: 'Depende de la aseguradora. Al cotizar te mostramos las formas de pago disponibles para cada opción.' },
  ],
  relacionados: ['seguro-uber-didi', 'seguro-flotillas', 'seguro-de-auto'],
}

export default ramo
