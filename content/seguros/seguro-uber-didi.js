// BORRADOR — pendiente de revisión de Claudia.

const ramo = {
  slug: 'seguro-uber-didi',
  nombre: 'Seguro para Uber, DiDi e InDrive',
  h1: 'Seguro para conductores de Uber, DiDi e InDrive en Chihuahua',
  intro: [
    'Si manejas para una plataforma de transporte, tu auto trabaja todos los días y llevas contigo a personas que no conoces. En PorTi Seguros te ayudamos en Chihuahua a contratar un seguro pensado para ese uso, para que un accidente no ponga en riesgo tu ingreso ni tu patrimonio.',
    'Te explicamos qué cubre cada opción, qué conviene revisar antes de contratar y qué hacer si tienes un siniestro con pasajeros a bordo.',
  ],
  secciones: [
    {
      titulo: '¿Por qué un seguro de auto particular no basta para manejar por plataforma?',
      parrafos: [
        'Las pólizas de auto particular están pensadas para uso personal. Cuando transportas pasajeros a cambio de un pago, el uso del vehículo cambia, y muchas pólizas particulares lo excluyen o lo limitan. Si ocurre un accidente durante un viaje y tu póliza no contempla ese uso, la aseguradora podría negar el pago y tú tendrías que responder por los daños.',
        'Por eso es importante declarar que usas el auto para plataformas y elegir una póliza que lo contemple de forma expresa.',
      ],
    },
    {
      titulo: 'Qué debe cubrir tu seguro como conductor',
      parrafos: ['En general, conviene revisar que tu póliza incluya:'],
      lista: [
        'Responsabilidad civil por daños a terceros en sus bienes y en sus personas.',
        'Gastos médicos para los ocupantes del vehículo, incluidos tus pasajeros.',
        'Daños materiales a tu auto y robo total.',
        'Asistencia legal en caso de accidente.',
        'Asistencia vial, como grúa, paso de corriente o cambio de llanta.',
      ],
      cierre: 'Las coberturas, sumas aseguradas y deducibles varían según la aseguradora; te las mostramos lado a lado para que compares.',
    },
    {
      titulo: 'Requisitos que piden las plataformas',
      parrafos: ['Cada plataforma define sus propios requisitos de seguro para los conductores, y pueden cambiar con el tiempo. Te recomendamos revisar los requisitos vigentes dentro de la app con la que trabajas. Con esa información, te ayudamos a elegir una póliza que los cumpla y a tener a la mano los documentos que te pidan.'],
    },
    {
      titulo: 'Qué hacer en caso de accidente con pasajero',
      listaOrdenada: true,
      lista: [
        'Verifica que tú y tus pasajeros estén bien y, si hay lesionados, pide ayuda a los servicios de emergencia.',
        'Reporta el siniestro de inmediato al número de tu aseguradora.',
        'No hagas acuerdos ni firmes documentos sin el ajustador.',
        'Toma fotos del lugar, de los vehículos y de las placas.',
        'Avísanos para darte seguimiento durante todo el proceso.',
      ],
    },
    {
      titulo: 'Cómo te ayudamos',
      parrafos: ['Comparamos opciones de varias aseguradoras, te explicamos con palabras sencillas qué cubre cada póliza y te acompañamos cuando necesitas usarla. Si tienes un siniestro, te orientamos en cada paso y damos seguimiento con la aseguradora.'],
    },
    {
      titulo: 'Qué información necesitamos para cotizar',
      lista: [
        'Marca, modelo y año de tu auto, y los datos de la tarjeta de circulación.',
        'Las apps con las que trabajas y si también haces entregas.',
        'Quién o quiénes manejan el auto.',
        'Si ya tienes una póliza, para revisar qué cubre hoy.',
      ],
    },
  ],
  faq: [
    { pregunta: '¿Puedo usar mi seguro de auto normal para manejar por plataforma?', respuesta: 'Depende de las condiciones de tu póliza, pero muchas pólizas particulares excluyen el transporte de pasajeros a cambio de un pago. Revisamos tu póliza actual y te decimos si cubre ese uso o si conviene cambiarla.' },
    { pregunta: '¿Qué pasa si manejo para varias apps?', respuesta: 'Puedes tener una sola póliza que contemple el uso en plataformas. Al cotizar, cuéntanos con qué apps trabajas para revisar que la póliza se ajuste a lo que te piden.' },
    { pregunta: '¿El seguro cubre a mis pasajeros?', respuesta: 'Las pólizas para plataforma suelen incluir gastos médicos para ocupantes y responsabilidad civil. Te mostramos qué límites tiene cada opción para que elijas con claridad.' },
    { pregunta: '¿Puedo pagar en mensualidades?', respuesta: 'Las formas de pago dependen de cada aseguradora. Al cotizar te mostramos las opciones disponibles para cada póliza.' },
    { pregunta: '¿También cubre entregas de comida o paquetería?', respuesta: 'Las entregas son un uso distinto al transporte de pasajeros. Si también haces entregas, dínoslo al cotizar para buscar una póliza que contemple ambos usos.' },
    { pregunta: '¿Qué pasa si choco cuando no tengo un viaje activo?', respuesta: 'Depende de cómo defina la póliza el uso del vehículo. Algunas distinguen entre el tiempo con la app encendida, con un viaje asignado y sin conectarte. Te explicamos cómo funciona en cada opción para que no queden huecos en tu protección.' },
  ],
  relacionados: ['seguro-para-taxi', 'seguro-de-auto', 'gastos-medicos-mayores'],
}

export default ramo
