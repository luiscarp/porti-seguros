// BORRADOR — pendiente de revisión de Claudia.

const ramo = {
  slug: 'seguro-flotillas',
  nombre: 'Seguro para flotillas',
  h1: 'Seguro para flotillas en Chihuahua',
  intro: [
    'Si tu empresa tiene varios vehículos, administrar una póliza por cada uno consume tiempo y complica el control. Un seguro para flotillas reúne tus unidades en una sola administración. En PorTi Seguros ayudamos a empresas de Chihuahua a diseñar una póliza a la medida de su operación.',
  ],
  secciones: [
    {
      titulo: '¿Qué es un seguro para flotillas?',
      parrafos: ['Es una póliza que agrupa varios vehículos de una misma empresa o persona, con coberturas que pueden ajustarse por tipo de unidad. Se administra de forma centralizada: altas, bajas, renovaciones y siniestros en un solo lugar.'],
    },
    {
      titulo: '¿Para quién es?',
      parrafos: ['Para empresas con vehículos utilitarios, de reparto, de carga ligera, autos ejecutivos o unidades de transporte de personal. El número mínimo de unidades para formar una flotilla depende de la aseguradora. [DATO PENDIENTE – confirmar con Claudia]'],
    },
    {
      titulo: 'Beneficios de una sola póliza',
      lista: [
        'Una sola administración y una sola fecha de renovación.',
        'Coberturas a la medida de cada tipo de unidad.',
        'Reportes de siniestralidad para tomar decisiones.',
        'Seguimiento centralizado de siniestros.',
        'Altas y bajas de unidades durante la vigencia.',
      ],
    },
    {
      titulo: 'Qué considerar al elegir',
      lista: [
        'El uso real de cada unidad: reparto, carga o transporte de personal.',
        'Quién maneja los vehículos.',
        'Los límites de responsabilidad civil, en especial para unidades de carga.',
        'Los deducibles por tipo de unidad.',
        'La asistencia vial y legal.',
      ],
    },
    {
      titulo: 'Cómo te ayudamos',
      parrafos: ['Levantamos la información de tus unidades, comparamos opciones y damos seguimiento a cada siniestro con la aseguradora. También revisamos contigo la siniestralidad para preparar cada renovación con información.'],
    },
  ],
  faq: [
    { pregunta: '¿Desde cuántas unidades se considera flotilla?', respuesta: 'Depende de la aseguradora. [DATO PENDIENTE – confirmar con Claudia]' },
    { pregunta: '¿Puedo agregar unidades durante el año?', respuesta: 'Por lo general puedes dar de alta o de baja unidades durante la vigencia, con el ajuste correspondiente en la prima.' },
    { pregunta: '¿Puedo tener distintas coberturas por vehículo?', respuesta: 'Sí. Puedes definir coberturas diferentes según el tipo y el uso de cada unidad.' },
    { pregunta: '¿La póliza protege a los conductores?', respuesta: 'Las pólizas pueden incluir gastos médicos para ocupantes y responsabilidad civil. Revisamos contigo las condiciones sobre quién puede conducir cada unidad.' },
  ],
  relacionados: ['seguro-de-auto', 'seguro-para-taxi', 'responsabilidad-civil'],
}

export default ramo
