// Metodología de 4 pasos (aparece en la portada y en todas las páginas de ramo).
const PASOS = [
  { titulo: 'Identificamos tus necesidades', texto: 'Platicamos contigo para entender qué quieres proteger, tu presupuesto y tus prioridades.' },
  { titulo: 'Analizamos alternativas', texto: 'Comparamos opciones de distintas aseguradoras y te explicamos sus diferencias con palabras sencillas.' },
  { titulo: 'Te damos una recomendación personalizada', texto: 'Te decimos qué opción creemos que te conviene y por qué, para que decidas con información.' },
  { titulo: 'Te acompañamos', texto: 'Seguimos contigo en las renovaciones y, sobre todo, cuando necesitas usar tu seguro.' },
]

export default function Pasos({ columnas = 4 }) {
  return (
    <ol className={`mt-8 grid gap-5 sm:grid-cols-2 ${columnas === 4 ? 'lg:grid-cols-4' : ''}`}>
      {PASOS.map((paso, i) => (
        <li key={paso.titulo} className='rounded-2xl border border-slate-200 bg-white p-6 shadow-sm'>
          <span className='flex h-10 w-10 items-center justify-center rounded-full bg-brand-700 font-display font-bold text-white' aria-hidden='true'>
            {i + 1}
          </span>
          <h3 className='mt-4 text-lg font-bold'>{paso.titulo}</h3>
          <p className='mt-2 leading-7'>{paso.texto}</p>
        </li>
      ))}
    </ol>
  )
}
