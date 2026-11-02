import Image from 'next/image'
import { ASEGURADORAS } from '@/content/aseguradoras'

// Aseguradoras con las que trabajamos: logo oficial servido desde /public si existe; si no, el nombre.
export default function Logos() {
    return (
        <section className="border-y border-slate-200 bg-slate-50 py-16">
            <div className="mx-auto max-w-6xl px-4">
                <h2 className="text-center text-2xl font-bold md:text-3xl">Trabajamos con distintas aseguradoras</h2>
                <p className="mx-auto mt-3 max-w-2xl text-center leading-7 text-slate-600">
                    Comparamos sus opciones para recomendarte la que mejor se adapta a ti.
                </p>
                <ul className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
                    {ASEGURADORAS.map((aseguradora) => (
                        <li
                            key={aseguradora.nombre}
                            className="flex h-16 items-center justify-center rounded-xl border border-slate-200 bg-white px-4 text-center font-display text-sm font-semibold text-slate-600"
                        >
                            {aseguradora.logo ? (
                                <Image src={aseguradora.logo} alt={aseguradora.nombre} width={140} height={40} className="max-h-10 w-auto object-contain" />
                            ) : (
                                aseguradora.nombre
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}
