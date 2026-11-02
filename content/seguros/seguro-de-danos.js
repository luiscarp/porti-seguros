// BORRADOR — pendiente de revisión de Claudia.

const ramo = {
  slug: 'seguro-de-danos',
  nombre: 'Seguro de casa y negocio',
  h1: 'Seguro de casa y negocio en Chihuahua',
  whatsappText: 'Hola, quiero cotizar un seguro para mi casa o negocio.',
  intro: [
    'Tu casa y tu negocio son parte importante de tu patrimonio. Un incendio, un robo o un daño por agua pueden costar años de esfuerzo. En PorTi Seguros te ayudamos en Chihuahua a analizar tus riesgos reales antes de recomendarte una póliza de daños.',
  ],
  secciones: [
    {
      titulo: '¿Qué es un seguro de daños?',
      parrafos: ['Es un seguro que protege bienes materiales, como la construcción de tu casa, sus contenidos, el local de tu negocio, la mercancía o el equipo, frente a los riesgos definidos en la póliza.'],
    },
    {
      titulo: '¿Para quién es?',
      subsecciones: [
        { titulo: 'Casa habitación', texto: 'Para propietarios e inquilinos que quieren proteger la construcción, los contenidos o ambos, además de su responsabilidad civil familiar.' },
        { titulo: 'Comercios y oficinas', texto: 'Para negocios que quieren proteger su local, inventario, mobiliario y equipo, y seguir operando después de un siniestro.' },
        { titulo: 'Empresas', texto: 'Para empresas con riesgos más complejos, donde conviene un análisis detallado de instalaciones y operaciones.' },
      ],
    },
    {
      titulo: 'Coberturas generales',
      lista: [
        'Incendio y rayo.',
        'Fenómenos hidrometeorológicos y terremoto, según la zona y el plan.',
        'Robo con violencia.',
        'Daños por agua.',
        'Rotura de cristales.',
        'Responsabilidad civil.',
        'Pérdida de ingresos o gastos extraordinarios, en pólizas para negocio.',
      ],
      cierre: 'Cada aseguradora define qué incluye cada paquete y con qué límites; te lo explicamos antes de contratar.',
    },
    {
      titulo: 'Qué considerar al elegir',
      lista: [
        'Asegurar los bienes por su valor correcto para evitar quedar con un seguro insuficiente.',
        'Diferenciar entre la construcción y los contenidos.',
        'Revisar los deducibles y coaseguros de cada cobertura.',
        'Conocer las medidas de seguridad que pide la aseguradora.',
        'Tener un inventario actualizado con fotos y facturas.',
      ],
    },
  ],
  faq: [
    { pregunta: 'Si rento, ¿puedo asegurar mis cosas?', respuesta: 'Sí. Puedes asegurar tus contenidos y tu responsabilidad civil aunque no seas dueño del inmueble.' },
    { pregunta: '¿Qué pasa si aseguro por menos del valor real?', respuesta: 'Si la suma asegurada es menor que el valor de los bienes, la indemnización puede reducirse de forma proporcional. Por eso revisamos contigo los valores al contratar.' },
    { pregunta: '¿El seguro de negocio cubre mi mercancía?', respuesta: 'Puede cubrirla si se incluye en la póliza. Te ayudamos a definir qué bienes asegurar y por qué monto.' },
    { pregunta: '¿Cubre daños a mis vecinos o clientes?', respuesta: 'La cobertura de responsabilidad civil puede responder por daños a terceros, según los límites contratados. Para negocios, revisa también nuestra página de responsabilidad civil.' },
  ],
  relacionados: ['responsabilidad-civil', 'seguros-de-vida', 'seguro-flotillas'],
}

export default ramo
