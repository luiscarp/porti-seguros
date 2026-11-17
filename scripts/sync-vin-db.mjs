// Copia al sitio la lógica y la base del decodificador de VIN desde el repositorio base-vin.
//
// Uso:  npm run sync-vin                      (toma ../base-vin, la carpeta hermana del sitio)
//       npm run sync-vin -- /ruta/a/base-vin   (o BASE_VIN=/ruta/a/base-vin npm run sync-vin)
//
// Antes, en base-vin:  python herramientas/validar_base.py && python herramientas/generar_json.py
// Copia:
//   base-vin/web/vin-logic.js  → lib/vin-logic.cjs      (sin cambios: las reglas viven en base-vin)
//   base-vin/web/vin-db.js     → lib/vin-db.mjs         (núcleo: países, años, verificador, VIN reales, series antiguas)
//   base-vin/web/datos/        → public/vin/datos/      (bloques por WMI y por esquema; la página los pide con fetch)
// Después: npm run test-vin, revisar el diff y hacer commit. La base solo trae descriptores, nunca VIN completos.
import fs from 'fs'
import path from 'path'

const base = process.argv[2] ?? process.env.BASE_VIN ?? '../base-vin'
const web = path.join(path.resolve(base), 'web')
const origen = { logica: path.join(web, 'vin-logic.js'), nucleo: path.join(web, 'vin-db.js'), datos: path.join(web, 'datos') }
for (const archivo of Object.values(origen)) {
  if (!fs.existsSync(archivo)) {
    console.error(`No existe ${archivo}. ¿Corriste generar_json.py en base-vin?`)
    process.exit(1)
  }
}

// vin-db.js es "window.VIN_DB={...};"
const texto = fs.readFileSync(origen.nucleo, 'utf8').trim()
const m = texto.match(/^window\.VIN_DB\s*=\s*([\s\S]*?);?$/)
if (!m) {
  console.error('vin-db.js no tiene el formato window.VIN_DB={...};')
  process.exit(1)
}
const db = JSON.parse(m[1])
for (const clave of ['generado', 'paises', 'anios', 'valores', 'pesos', 'campos']) {
  if (!(clave in db)) {
    console.error(`vin-db.js no trae "${clave}"`)
    process.exit(1)
  }
}
// Salvaguarda de privacidad: los VIN reales se guardan como descriptores (1-8, *, 10-11), nunca de 17 caracteres
const raros = Object.keys(db.descriptores ?? {}).filter((d) => !/^[A-HJ-NPR-Z0-9]{8}\*[A-HJ-NPR-Z0-9]{2}$/.test(d))
if (raros.length) {
  console.error(`Descriptores con formato inesperado (¿VIN completos?): ${raros.slice(0, 5).join(', ')}`)
  process.exit(1)
}

const sitio = process.cwd()
fs.copyFileSync(origen.logica, path.join(sitio, 'lib', 'vin-logic.cjs'))
fs.writeFileSync(
  path.join(sitio, 'lib', 'vin-db.mjs'),
  `// GENERADO por scripts/sync-vin-db.mjs desde base-vin (web/vin-db.js). No se edita a mano.\nexport default ${JSON.stringify(db)}\n`
)
const destino = path.join(sitio, 'public', 'vin', 'datos')
fs.rmSync(destino, { recursive: true, force: true })
fs.cpSync(origen.datos, destino, { recursive: true, filter: (f) => !path.basename(f).startsWith('.') })

const archivos = fs.readdirSync(destino, { recursive: true }).filter((f) => f.endsWith('.json')).length
const e = db.estadisticas ?? {}
console.log(`Listo: base del ${db.generado}; ${e.fabricantes} fabricantes, ${e.esquemas} esquemas, ${e.reglas} reglas; ${archivos} bloques en public/vin/datos.`)
