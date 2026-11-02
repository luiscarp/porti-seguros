// Preguntas frecuentes generales y por tema (/preguntas-frecuentes y portada).
// BORRADOR — pendiente de revisión de Claudia. Los temas de ramo reutilizan las preguntas de content/seguros.
import { getRamo } from './seguros'

export const FAQ_GENERALES = [
  { pregunta: '¿La asesoría tiene algún compromiso?', respuesta: 'No. Revisamos contigo lo que necesitas proteger, te mostramos opciones y tú decides con calma si contratas y cuándo.' },
  { pregunta: '¿Con qué aseguradoras trabajan?', respuesta: 'Trabajamos con distintas aseguradoras, lo que nos permite comparar opciones y recomendarte la que mejor se adapta a tu caso, en lugar de ofrecerte una sola alternativa.' },
  { pregunta: '¿Tengo que ir a la oficina para contratar?', respuesta: 'No es necesario. Podemos atenderte por WhatsApp o por teléfono, y también puedes visitarnos en nuestra oficina de la Col. San Felipe, en Chihuahua.' },
  { pregunta: '¿Qué ventaja tiene contratar con una agente de seguros?', respuesta: 'Una agente te ayuda a comparar, te explica cada cobertura antes de contratar y te acompaña después: en las renovaciones y, sobre todo, cuando necesitas usar tu seguro.' },
  { pregunta: '¿Qué pasa si tengo un siniestro?', respuesta: 'Repórtalo de inmediato a tu aseguradora y avísanos. Te orientamos sobre los pasos a seguir y damos seguimiento con la aseguradora hasta que se resuelva.' },
]

const SINIESTROS = [
  { pregunta: '¿Qué hago primero si tengo un siniestro?', respuesta: 'Ponte a salvo, pide ayuda a los servicios de emergencia si hay lesionados y reporta el siniestro al número de tu aseguradora. Después avísanos para darte seguimiento.' },
  { pregunta: '¿Me ayudan con el trámite ante la aseguradora?', respuesta: 'Sí. Te decimos qué documentos reunir, revisamos que el trámite esté completo y damos seguimiento con la aseguradora hasta que concluya.' },
  { pregunta: '¿Qué documentos suelen pedir para un reclamo?', respuesta: 'Depende del tipo de seguro y de la aseguradora. Por lo general se piden la póliza, identificaciones y los documentos que acrediten lo ocurrido, como el reporte del ajustador, facturas o actas.' },
]

const PAGOS = [
  { pregunta: '¿Qué formas de pago hay?', respuesta: 'Las formas y periodicidades de pago dependen de cada aseguradora y de la póliza. Al cotizar te mostramos las opciones disponibles para que elijas la que te acomoda.' },
  { pregunta: '¿Qué pasa si se me pasa la fecha de pago?', respuesta: 'Muchas pólizas tienen un periodo de gracia, pero si vence sin pago la póliza puede cancelarse. Si se te complica un pago, avísanos antes para revisar tus opciones.' },
  { pregunta: '¿Me ayudan con la renovación de mi póliza?', respuesta: 'Sí. Antes de renovar revisamos contigo si tu protección sigue siendo la adecuada o si conviene ajustarla a tu etapa actual.' },
]

const desdeRamo = (slug, cuantas) => getRamo(slug).faq.slice(0, cuantas).map((item) => ({ ...item, ramo: slug }))

export const FAQ_POR_TEMA = [
  { id: 'vida', tema: 'Seguros de vida', preguntas: desdeRamo('seguros-de-vida', 4) },
  { id: 'auto', tema: 'Auto, taxi y plataformas', preguntas: [...desdeRamo('seguro-de-auto', 2), ...desdeRamo('seguro-uber-didi', 2), ...desdeRamo('seguro-para-taxi', 1)] },
  { id: 'gastos-medicos', tema: 'Gastos médicos', preguntas: desdeRamo('gastos-medicos-mayores', 3) },
  { id: 'retiro', tema: 'Retiro', preguntas: desdeRamo('plan-personal-de-retiro', 3) },
  { id: 'siniestros', tema: 'Siniestros', preguntas: SINIESTROS },
  { id: 'pagos', tema: 'Pagos y renovaciones', preguntas: PAGOS },
]
