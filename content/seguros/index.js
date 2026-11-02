// Catálogo de ramos. El orden define cómo aparecen en menús y listados (Vida primero: es la especialidad).
import segurosDeVida from './seguros-de-vida'
import seguroUberDidi from './seguro-uber-didi'
import seguroParaTaxi from './seguro-para-taxi'
import seguroDeAuto from './seguro-de-auto'
import gastosMedicosMayores from './gastos-medicos-mayores'
import planPersonalDeRetiro from './plan-personal-de-retiro'
import seguroDeDanos from './seguro-de-danos'
import responsabilidadCivil from './responsabilidad-civil'
import seguroEventosMasivos from './seguro-eventos-masivos'
import seguroFlotillas from './seguro-flotillas'
import seguroDeViaje from './seguro-de-viaje'

export const RAMOS = [
  segurosDeVida,
  seguroUberDidi,
  seguroParaTaxi,
  seguroDeAuto,
  gastosMedicosMayores,
  planPersonalDeRetiro,
  seguroDeDanos,
  responsabilidadCivil,
  seguroEventosMasivos,
  seguroFlotillas,
  seguroDeViaje,
]

export const getRamo = (slug) => RAMOS.find((ramo) => ramo.slug === slug)
