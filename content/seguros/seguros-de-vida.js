// BORRADOR (C2, página pilar) — pendiente de revisión de Claudia.
// Sin cifras, primas ni rendimientos; las coberturas se describen en general porque varían por aseguradora.

const ramo = {
  slug: 'seguros-de-vida',
  nombre: 'Seguros de vida',
  h1: 'Seguros de vida en Chihuahua',
  intro: [
    'Un seguro de vida es una decisión de protección familiar, no de precio. Su propósito es que, si algo te pasa, las personas que dependen de ti puedan seguir adelante: pagar la casa, terminar sus estudios y cubrir los gastos del día a día sin endeudarse. En PorTi Seguros te asesoramos en Chihuahua para elegir el seguro de vida que corresponde a tu situación.',
    'Claudia Pacheco es agente de seguros desde 2007 y su especialidad son los seguros de vida y la protección familiar. Antes de recomendarte una póliza, te escuchamos, revisamos contigo qué necesitas proteger y comparamos alternativas de distintas aseguradoras para que decidas con información clara y sin presión.',
  ],
  secciones: [
    {
      titulo: '¿Para quién es un seguro de vida?',
      parrafos: ['Si alguien depende de tu ingreso o de tu presencia, un seguro de vida merece una conversación. Estos son los casos más comunes:'],
      subsecciones: [
        { titulo: 'Padres y madres de familia', texto: 'Si tus hijos o tu pareja dependen de tu ingreso, un seguro de vida les da un respaldo económico para mantener su nivel de vida, continuar con sus estudios y tomar decisiones con calma en un momento difícil.' },
        { titulo: 'Personas con créditos o hipoteca', texto: 'Una suma asegurada adecuada ayuda a que tu familia no herede deudas y conserve su patrimonio, como la casa en la que vive o el auto que necesita para trabajar.' },
        { titulo: 'Dueños de negocio', texto: 'Si tu empresa depende de ti o de un socio clave, un seguro de vida ayuda a dar continuidad al negocio, a proteger a los socios y a cuidar a los colaboradores mientras se reorganiza la operación.' },
        { titulo: 'Personas que quieren ahorrar', texto: 'Algunos planes combinan protección con ahorro a largo plazo, por ejemplo para el retiro o para la educación de tus hijos, de modo que un mismo plan cubre dos objetivos.' },
      ],
    },
    {
      titulo: 'Tipos de seguro de vida',
      parrafos: ['Cada aseguradora le da nombres distintos a sus planes, pero casi todos se agrupan en estos tipos:'],
      subsecciones: [
        { titulo: 'Temporal', texto: 'Te protege durante un periodo definido, por ejemplo mientras tus hijos son pequeños o mientras pagas un crédito. Suele ser la forma más directa de obtener protección.' },
        { titulo: 'Vitalicio u ordinario de vida', texto: 'La protección dura toda la vida mientras la póliza se mantenga vigente. Es útil cuando quieres dejar un patrimonio o cubrir gastos finales sin importar cuándo ocurra el fallecimiento.' },
        { titulo: 'Con ahorro (dotal)', texto: 'Combina protección con un ahorro que recibes si llegas al final del plazo contratado. Si falleces antes, tus beneficiarios reciben la suma asegurada.' },
        { titulo: 'Para educación', texto: 'Planes pensados para reunir un monto para los estudios de tus hijos, con protección por si tú faltas antes de completarlo.' },
        { titulo: 'Vida para empresas', texto: 'Seguros de grupo para colaboradores y seguros de persona clave para proteger al negocio ante la pérdida de alguien indispensable.' },
      ],
    },
    {
      titulo: 'Temporal o con ahorro: diferencias principales',
      parrafos: ['Es la duda más frecuente. Esta comparación es general; las condiciones exactas dependen de cada plan.'],
      tabla: {
        columnas: ['', 'Temporal', 'Con ahorro (dotal)'],
        filas: [
          ['Objetivo principal', 'Proteger a tu familia durante una etapa', 'Proteger y, a la vez, reunir un monto'],
          ['Duración', 'Un plazo definido', 'Un plazo definido, con un monto al final'],
          ['Si llegas al final del plazo', 'En la mayoría de los planes no recibes un monto', 'Recibes el ahorro acumulado según el plan'],
          ['Costo', 'Suele ser menor para la misma protección', 'Suele ser mayor, porque incluye el ahorro'],
          ['Ideal para', 'Créditos, hijos pequeños, máxima protección', 'Metas de largo plazo, como retiro o educación'],
        ],
      },
    },
    {
      titulo: 'Coberturas adicionales comunes',
      parrafos: ['Además de la cobertura por fallecimiento, muchas pólizas permiten agregar beneficios adicionales. Su disponibilidad, sus condiciones y sus límites varían según la aseguradora y el plan:'],
      subsecciones: [
        { titulo: 'Muerte accidental', texto: 'Paga un monto adicional a tus beneficiarios si el fallecimiento ocurre por un accidente cubierto.' },
        { titulo: 'Invalidez total y permanente', texto: 'Puede liberarte del pago de primas o adelantar un pago si un accidente o enfermedad te impide trabajar de forma permanente.' },
        { titulo: 'Enfermedades graves', texto: 'Adelanta un monto al diagnosticarse ciertas enfermedades definidas en la póliza, para que puedas atenderte con tranquilidad.' },
        { titulo: 'Gastos funerarios', texto: 'Entrega un monto rápido a tu familia para cubrir los gastos inmediatos, sin esperar el pago completo de la suma asegurada.' },
      ],
    },
    {
      titulo: '¿Cómo saber cuánta suma asegurada necesitas?',
      parrafos: ['No existe una cifra única que sirva para todos, y desconfía de las fórmulas rápidas. Para definir la suma asegurada revisamos contigo factores como:'],
      lista: [
        'Los gastos mensuales de tu familia y cuánto tiempo necesitarían cubrirlos.',
        'Las deudas pendientes, como hipoteca, auto o créditos personales.',
        'La educación de tus hijos, desde la escuela hasta la universidad.',
        'Los gastos finales y los trámites que tendría que enfrentar tu familia.',
        'Otros seguros, prestaciones o ahorros que ya tengas.',
      ],
      cierre: 'Con esa información te mostramos alternativas con distintas sumas aseguradas y tú decides con calma. La asesoría es sin compromiso.',
    },
    {
      titulo: 'Tus beneficiarios: la decisión más importante',
      parrafos: [
        'Los beneficiarios son las personas que recibirán la suma asegurada. Puedes nombrar a una o varias y definir qué porcentaje recibe cada una. Mantenerlos al día es tan importante como elegir el plan correcto.',
        'Si piensas nombrar a menores de edad, conviene revisar con calma cómo hacerlo, porque un menor no puede recibir el dinero directamente. Te explicamos las opciones para que el apoyo llegue a quien tú quieres y cuando lo necesite.',
      ],
    },
    {
      titulo: 'Errores comunes al contratar un seguro de vida',
      despuesDePasos: true,
      subsecciones: [
        { titulo: 'Elegir solo por precio', texto: 'La prima más baja puede venir con menos protección, más exclusiones o un plazo que no corresponde a tu necesidad. Compara qué cubre cada opción, no solo cuánto cuesta.' },
        { titulo: 'No designar o no actualizar beneficiarios', texto: 'Un matrimonio, un divorcio o el nacimiento de un hijo cambian a quién quieres proteger. Revisa tus beneficiarios cada vez que cambie tu familia.' },
        { titulo: 'No leer las exclusiones', texto: 'Toda póliza tiene situaciones que no cubre y, en algunos casos, periodos de espera. Te las explicamos antes de firmar para que no haya sorpresas.' },
        { titulo: 'No revisar la póliza al cambiar de etapa', texto: 'Tus necesidades cambian cuando compras casa, crece tu familia o se acerca tu retiro. Una revisión periódica mantiene tu protección al día.' },
        { titulo: 'Dejar de pagar sin consultar', texto: 'Antes de cancelar, pregunta por tus opciones: algunos planes permiten ajustar la protección en lugar de perderla por completo.' },
      ],
    },
    {
      titulo: 'Te acompañamos cuando tu familia lo necesita',
      despuesDePasos: true,
      parrafos: ['El momento más importante de un seguro de vida es cuando tu familia tiene que usarlo. Por eso no solo te ayudamos a contratar: orientamos a tus beneficiarios, les decimos qué documentos reunir y damos seguimiento con la aseguradora hasta que el trámite concluya.'],
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
