// BORRADOR — pendiente de revisión de Claudia. La versión pilar completa se redacta en C2.

const ramo = {
  slug: 'seguros-de-vida',
  nombre: 'Seguros de vida',
  imagen: '/segurovida.png',
  h1: 'Seguros de vida en Chihuahua',
  whatsappText: 'Hola, vi la página de *Seguros de Vida* y quiero asesoría.',
  intro: [
    'Un seguro de vida es una decisión de protección familiar, no de precio. Su propósito es que, si algo te pasa, las personas que dependen de ti puedan seguir adelante: pagar la casa, terminar sus estudios y cubrir los gastos del día a día sin endeudarse. En PorTi Seguros te asesoramos en Chihuahua para elegir el seguro de vida que corresponde a tu situación.',
    'Claudia Pacheco es agente de seguros desde 2007 y su especialidad son los seguros de vida y la protección familiar. Antes de recomendarte una póliza, te escuchamos, revisamos contigo qué necesitas proteger y comparamos alternativas de distintas aseguradoras para que decidas con información clara.',
  ],
  secciones: [
    {
      titulo: '¿Para quién es un seguro de vida?',
      subsecciones: [
        { titulo: 'Padres y madres de familia', texto: 'Si tus hijos o tu pareja dependen de tu ingreso, un seguro de vida les da un respaldo económico para mantener su nivel de vida y continuar con sus planes.' },
        { titulo: 'Personas con créditos o hipoteca', texto: 'Una suma asegurada adecuada ayuda a que tu familia no herede deudas y conserve su patrimonio, como la casa en la que vive.' },
        { titulo: 'Dueños de negocio', texto: 'Si tu empresa depende de ti o de un socio clave, un seguro de vida ayuda a dar continuidad al negocio y a proteger a los socios y colaboradores.' },
        { titulo: 'Personas que quieren ahorrar', texto: 'Algunos planes combinan protección con ahorro a largo plazo, por ejemplo para el retiro o para la educación de tus hijos.' },
      ],
    },
    {
      titulo: 'Tipos de seguro de vida',
      subsecciones: [
        { titulo: 'Temporal', texto: 'Te protege durante un periodo definido, por ejemplo mientras tus hijos son pequeños o mientras pagas un crédito. Suele ser la forma más directa de obtener protección.' },
        { titulo: 'Vitalicio u ordinario de vida', texto: 'La protección dura toda la vida mientras la póliza se mantenga vigente. Es útil cuando quieres dejar un patrimonio o cubrir gastos finales sin importar cuándo ocurra el fallecimiento.' },
        { titulo: 'Con ahorro (dotal)', texto: 'Combina protección con un ahorro que recibes si llegas al final del plazo contratado. Si falleces antes, tus beneficiarios reciben la suma asegurada.' },
        { titulo: 'Para educación', texto: 'Planes pensados para reunir un monto para los estudios de tus hijos, con protección por si tú faltas antes de completarlo.' },
        { titulo: 'Vida para empresas', texto: 'Seguros de grupo para colaboradores y seguros de persona clave para proteger al negocio ante la pérdida de alguien indispensable.' },
      ],
    },
    {
      titulo: 'Coberturas adicionales comunes',
      parrafos: ['Además de la cobertura por fallecimiento, muchas pólizas permiten agregar beneficios adicionales. Su disponibilidad y sus condiciones varían según la aseguradora y el plan:'],
      lista: ['Muerte accidental.', 'Invalidez total y permanente.', 'Enfermedades graves.', 'Gastos funerarios.'],
    },
    {
      titulo: '¿Cómo saber cuánta suma asegurada necesitas?',
      parrafos: ['No existe una cifra única que sirva para todos. Para definir la suma asegurada revisamos contigo factores como:'],
      lista: [
        'Los gastos mensuales de tu familia.',
        'Las deudas pendientes, como hipoteca, auto o créditos personales.',
        'Los años durante los que tu familia necesitaría apoyo.',
        'La educación de tus hijos.',
        'Otros seguros o ahorros que ya tengas.',
      ],
      cierre: 'Con esa información te mostramos alternativas y tú decides con calma. La asesoría es sin compromiso.',
    },
    {
      titulo: 'Errores comunes al contratar un seguro de vida',
      lista: [
        'Elegir solo por precio sin revisar qué cubre la póliza.',
        'No designar beneficiarios o no actualizarlos después de un cambio importante, como un matrimonio, un divorcio o un nacimiento.',
        'No leer las exclusiones y los periodos de espera.',
        'No revisar la póliza cuando cambia tu etapa de vida o tus ingresos.',
        'Dejar de pagar sin conocer las opciones que ofrece la póliza.',
      ],
    },
  ],
  faq: [
    { pregunta: '¿Cuánto cuesta un seguro de vida en Chihuahua?', respuesta: 'Depende de tu edad, tu estado de salud, si fumas, la suma asegurada, el plazo y el tipo de plan. Por eso no damos precios generales: te preparamos una cotización con tus datos y te explicamos de dónde sale cada concepto.' },
    { pregunta: '¿Qué diferencia hay entre un seguro temporal y uno con ahorro?', respuesta: 'El temporal te protege durante un periodo definido y, en la mayoría de los planes, no recibes un monto al terminar el plazo. Uno con ahorro combina protección con un monto que recibes al final, por lo que su costo suele ser mayor. Te ayudamos a ver cuál encaja con tu objetivo.' },
    { pregunta: '¿A quién puedo nombrar como beneficiario y cómo lo cambio?', respuesta: 'Puedes nombrar a las personas que elijas y definir qué porcentaje recibe cada una. Puedes cambiarlas cuando lo necesites con un trámite ante la aseguradora, y te ayudamos a hacerlo. Si hay menores de edad, conviene revisar contigo cómo designarlos.' },
    { pregunta: '¿Qué pasa si dejo de pagar mi seguro de vida?', respuesta: 'Depende del tipo de póliza. En algunos planes la protección termina al vencer el periodo de gracia; en otros, si hay valores acumulados, puede haber opciones para mantener una protección reducida. Antes de dejar de pagar, consúltanos para revisar tus alternativas.' },
    { pregunta: '¿Me piden exámenes médicos para contratar?', respuesta: 'Depende de tu edad, de la suma asegurada y de la aseguradora. En muchos casos basta con un cuestionario de salud; en otros se solicitan estudios. Es importante responder con la verdad, porque esa información influye en el pago de la suma asegurada.' },
    { pregunta: '¿El seguro de vida tiene beneficios fiscales?', respuesta: 'Algunos planes, como ciertos seguros con componente de retiro, pueden tener un tratamiento fiscal particular. Te explicamos en general cómo funciona y te recomendamos confirmarlo con tu contador para tu caso.' },
    { pregunta: '¿Qué hacen mis beneficiarios para cobrar el seguro?', respuesta: 'Deben avisar a la aseguradora y entregar la documentación que esta solicite, como el acta de defunción, identificaciones y la póliza. Los acompañamos en el trámite para que tu familia no lo haga sola.' },
    { pregunta: '¿Puedo tener más de un seguro de vida?', respuesta: 'Sí, puedes tener más de uno, incluso con diferentes aseguradoras. Al contratar se suele preguntar por otras pólizas vigentes, así que es importante declararlas.' },
  ],
  relacionados: ['plan-personal-de-retiro', 'gastos-medicos-mayores', 'seguro-de-danos'],
}

export default ramo
