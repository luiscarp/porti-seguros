// BORRADOR — pendiente de revisión de Claudia.

const ramo = {
  slug: 'gastos-medicos-mayores',
  nombre: 'Gastos médicos mayores',
  imagen: '/gastosmedicos.webp',
  h1: 'Seguro de gastos médicos mayores en Chihuahua',
  whatsappText: 'Hola, quiero información sobre un seguro de *Gastos Médicos Mayores*.',
  intro: [
    'Una enfermedad o un accidente pueden generar gastos hospitalarios difíciles de cubrir con tus ahorros. Un seguro de gastos médicos mayores te ayuda a enfrentar esos costos y a atenderte en hospitales privados. En PorTi Seguros te asesoramos en Chihuahua para que entiendas cómo funciona tu póliza antes de necesitarla.',
  ],
  secciones: [
    {
      titulo: '¿Qué es un seguro de gastos médicos mayores?',
      parrafos: ['Es un seguro que cubre gastos derivados de enfermedades o accidentes cubiertos, como hospitalización, cirugías, honorarios médicos, estudios y medicamentos durante la atención, de acuerdo con las condiciones de la póliza.'],
    },
    {
      titulo: '¿Para quién es?',
      parrafos: ['Para personas y familias que quieren acceso a atención médica privada sin poner en riesgo su patrimonio. También existen planes colectivos para empresas que quieren ofrecer esta prestación a sus colaboradores.'],
    },
    {
      titulo: 'Conceptos que debes entender',
      subsecciones: [
        { titulo: 'Suma asegurada', texto: 'Es el monto máximo que la aseguradora pagará por un padecimiento o por el periodo que indique la póliza.' },
        { titulo: 'Deducible', texto: 'Es la cantidad inicial que pagas tú antes de que el seguro empiece a pagar.' },
        { titulo: 'Coaseguro', texto: 'Es el porcentaje de la cuenta que te corresponde después del deducible; muchas pólizas le ponen un tope.' },
        { titulo: 'Nivel hospitalario', texto: 'Los hospitales en los que puedes atenderte con pago directo dependen del nivel que contrates.' },
        { titulo: 'Periodos de espera', texto: 'Algunos padecimientos solo se cubren después de cierto tiempo de antigüedad en la póliza.' },
      ],
    },
    {
      titulo: 'Coberturas generales',
      lista: [
        'Hospitalización y cirugía.',
        'Honorarios médicos.',
        'Estudios de laboratorio y gabinete.',
        'Medicamentos durante la hospitalización y, según la póliza, después de ella.',
        'Emergencias en el extranjero, como cobertura adicional en algunos planes.',
      ],
      cierre: 'Lo que cubre exactamente cada plan depende de la aseguradora y de sus condiciones generales.',
    },
    {
      titulo: 'Qué considerar al elegir',
      lista: [
        'Qué hospitales de Chihuahua están en el nivel que contratas.',
        'El equilibrio entre deducible, coaseguro y costo.',
        'Los periodos de espera y las exclusiones.',
        'Cómo se tratan las enfermedades que ya tienes al contratar.',
        'Si te conviene incluir a toda tu familia en la misma póliza.',
        'Cómo funciona la renovación conforme cumples años.',
      ],
    },
  ],
  faq: [
    { pregunta: '¿Qué es mejor, un deducible alto o uno bajo?', respuesta: 'Un deducible alto suele bajar el costo del seguro, pero pagas más al usarlo. Uno bajo es más caro, pero te protege desde gastos menores. Te ayudamos a encontrar el equilibrio según tu presupuesto.' },
    { pregunta: '¿Cubre enfermedades que ya tengo?', respuesta: 'Las enfermedades preexistentes suelen tener restricciones o exclusiones. Es fundamental declararlas al contratar; te explicamos cómo las trata cada aseguradora.' },
    { pregunta: '¿Puedo asegurar a mi familia en la misma póliza?', respuesta: 'Por lo general puedes incluir a tu pareja y a tus hijos en una póliza familiar. Te mostramos las opciones de cada aseguradora.' },
    { pregunta: '¿Me sirve si ya tengo IMSS o ISSSTE?', respuesta: 'Sí, puedes tener ambos. El seguro de gastos médicos mayores te da acceso a atención privada y complementa la seguridad social.' },
    { pregunta: '¿Cómo uso mi seguro en una emergencia?', respuesta: 'Acude a un hospital de tu red, presenta los datos de tu póliza y avisa a la aseguradora. Nosotros te orientamos durante el proceso.' },
  ],
  relacionados: ['seguros-de-vida', 'seguro-de-viaje', 'plan-personal-de-retiro'],
}

export default ramo
