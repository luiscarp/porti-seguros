import Link from 'next/link'
import { CheckCircleIcon, XCircleIcon } from '@heroicons/react/24/outline'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Seo from '@/components/Seo'
import PageHero from '@/components/PageHero'
import CtaBanda from '@/components/CtaBanda'
import DecodificadorVin from '@/components/vin/DecodificadorVin'
import DecodificadorLote from '@/components/vin/DecodificadorLote'
import { JsonLd, herramienta, migasDePan } from '@/components/JsonLd'
import { SEGMENTOS } from '@/lib/vin-presentacion.mjs'
import { VIN_DB } from '@/lib/vin.mjs'

const PATH = '/herramientas/decodificador-vin'

const LECTURA = {
  wmi: 'País de fabricación y fabricante. Un 9 en la posición 3 indica un fabricante de bajo volumen.',
  vds: 'Línea, carrocería y motor. Cada marca lo define a su manera; se traduce cuando ese código ya está en la base de modelos.',
  dv: 'Se recalcula con los otros 16 caracteres y se compara para detectar errores de captura.',
  anio: 'Código de año modelo que se repite cada 30 años.',
  planta: 'Clave interna del fabricante para la planta de ensamble.',
  serie: 'Secuencia de producción de la unidad.',
}

const SI = ['País y fabricante', 'Año modelo', 'Consecutivo y validación del dígito verificador', 'Modelo, versión, motor y planta, cuando ese código ya está en la base, con su fuente']
const NO = ['Modelo de unidades que aún no están en la base (muchas vendidas solo en México)', 'El formato de las series antiguas, que no se lee por posición', 'Si la unidad existe o su situación legal (eso se consulta en REPUVE)']
const N_FABRICANTES = Object.keys(VIN_DB.wmi).length
const N_MODELOS = Object.keys(VIN_DB.patrones).length

export default function DecodificadorVinPagina() {
  return (
    <div>
      <Seo path={PATH} />
      <JsonLd id='herramienta' data={herramienta(PATH)} />
      <JsonLd id='migas' data={migasDePan([{ nombre: 'Inicio', path: '/' }, { nombre: 'Decodificador de VIN', path: PATH }])} />
      <Navbar />

      <main>
        <PageHero
          titulo='Decodificador de VIN: revisa el número de serie de tu auto'
          intro={['Escribe el número de serie (VIN) de tu vehículo y confirma que está bien capturado antes de cotizar o emitir tu seguro. Te mostramos el país, el fabricante y el año modelo, y revisamos el dígito verificador.']}
          migas={[{ nombre: 'Inicio', href: '/' }, { nombre: 'Decodificador de VIN' }]}
        />

        <div className='mx-auto max-w-4xl px-4 py-12'>
          <section aria-labelledby='un-vin'>
            <h2 id='un-vin' className='text-2xl font-bold md:text-3xl'>Revisa un número de serie</h2>
            <p className='mt-2 leading-7 text-slate-600'>Lo encuentras en la tarjeta de circulación, en la factura o en tu póliza actual.</p>
            <div className='mt-6'>
              <DecodificadorVin />
            </div>
          </section>

          <section aria-labelledby='varios-vin' className='mt-16'>
            <h2 id='varios-vin' className='text-2xl font-bold md:text-3xl'>Revisa varios a la vez</h2>
            <p className='mt-2 leading-7 text-slate-600'>Útil para flotillas o para revisar una lista antes de cotizar.</p>
            <div className='mt-6'>
              <DecodificadorLote />
            </div>
          </section>

          <section aria-labelledby='como-se-lee' className='mt-16'>
            <h2 id='como-se-lee' className='text-2xl font-bold md:text-3xl'>Cómo se lee un VIN de 17 caracteres</h2>
            <p className='mt-3 leading-7'>
              Desde 1981 los vehículos llevan un número de serie de 17 caracteres con una estructura común (norma ISO 3779; en México, NOM-001-SSP-2008). No usa las letras I, O ni Q para no confundirlas con 1 y 0.
            </p>
            <div className='mt-5 overflow-x-auto rounded-xl border border-slate-200'>
              <table className='w-full min-w-[520px] text-left text-sm md:text-base'>
                <thead className='bg-brand-50 text-slate-900'>
                  <tr>
                    <th scope='col' className='px-4 py-3'>Posición</th>
                    <th scope='col' className='px-4 py-3'>Segmento</th>
                    <th scope='col' className='px-4 py-3'>Qué indica</th>
                  </tr>
                </thead>
                <tbody className='divide-y divide-slate-200'>
                  {SEGMENTOS.map((s) => (
                    <tr key={s.id}>
                      <td className='px-4 py-3 font-semibold'>{s.desde === s.hasta ? s.desde : `${s.desde}–${s.hasta}`}</td>
                      <td className='px-4 py-3'>{s.nombre}</td>
                      <td className='px-4 py-3 leading-6'>{LECTURA[s.id]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className='mt-4 leading-7'>
              Antes de 1981 no había un formato único: cada fabricante usaba su propia estructura, casi siempre de 5 a 13 caracteres y sin dígito verificador. En esas series la marca y el año se toman de la factura o de la tarjeta de circulación.
            </p>
          </section>

          <section aria-labelledby='que-resuelve' className='mt-16'>
            <h2 id='que-resuelve' className='text-2xl font-bold md:text-3xl'>Qué sí y qué no resuelve</h2>
            <div className='mt-6 grid gap-5 md:grid-cols-2'>
              <div className='rounded-2xl border border-slate-200 p-6'>
                <h3 className='text-lg font-bold'>Sí te dice</h3>
                <ul className='mt-3 space-y-2'>
                  {SI.map((t) => (
                    <li key={t} className='flex gap-2 leading-7'><CheckCircleIcon className='mt-0.5 h-6 w-6 shrink-0 text-green-700' aria-hidden='true' />{t}</li>
                  ))}
                </ul>
              </div>
              <div className='rounded-2xl border border-slate-200 p-6'>
                <h3 className='text-lg font-bold'>No te dice</h3>
                <ul className='mt-3 space-y-2'>
                  {NO.map((t) => (
                    <li key={t} className='flex gap-2 leading-7'><XCircleIcon className='mt-0.5 h-6 w-6 shrink-0 text-red-700' aria-hidden='true' />{t}</li>
                  ))}
                </ul>
              </div>
            </div>
            <p className='mt-5 leading-7'>
              Modelo y versión dependen de la tabla de cada marca (posiciones 4 a 8). La base se llena con datos oficiales de{' '}
              <a href='https://vpic.nhtsa.dot.gov/decoder/' rel='noopener' className='font-semibold text-brand-700 hover:underline'>vPIC de la NHTSA</a>, que cubre sobre todo unidades del mercado estadounidense; los modelos vendidos solo en México se capturan a mano desde un documento.
            </p>
            <p className='mt-3 text-sm text-slate-600'>
              Base actualizada el {VIN_DB.generado}: {N_FABRICANTES} fabricantes y {N_MODELOS} {N_MODELOS === 1 ? 'modelo registrado' : 'modelos registrados'}.
            </p>
            <p className='mt-5 leading-7'>
              Un dígito verificador correcto confirma que el número está bien escrito. No confirma que la unidad exista ni su situación legal: eso se consulta en el Registro Público Vehicular (REPUVE).
            </p>
            <p className='mt-3 rounded-xl bg-slate-50 p-4 leading-7'>
              <strong>Tu información no sale de tu dispositivo.</strong> Los números que escribes no se envían ni se guardan: todo el cálculo ocurre en tu navegador.
            </p>
          </section>

          <p className='mt-12 leading-7'>
            ¿Ya tienes tu número de serie correcto? Revisa nuestro <Link href='/seguro-de-auto' className='font-semibold text-brand-700 underline'>seguro de auto</Link>, el <Link href='/seguro-uber-didi' className='font-semibold text-brand-700 underline'>seguro para Uber, DiDi e InDrive</Link> o <Link href='/cotizar' className='font-semibold text-brand-700 underline'>pide tu cotización</Link>.
          </p>
        </div>

        <CtaBanda />
      </main>

      <Footer />
    </div>
  )
}
