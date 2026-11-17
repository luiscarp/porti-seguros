// Copia al sitio la lógica y la base del decodificador de VIN desde el repositorio base-vin.
//
// Uso:  npm run sync-vin                      (toma ../base-vin, la carpeta hermana del sitio)
//       npm run sync-vin -- /ruta/a/base-vin   (o BASE_VIN=/ruta/a/base-vin npm run sync-vin)
//
// Antes, en base-vin:  python herramientas/validar_base.py && python herramientas/generar_json.py
// Copia:
//   base-vin/web/vin-logic.js  → lib/vin-logic.cjs   (sin cambios: las reglas viven en base-vin)
//   base-vin/web/vin-db.json   → lib/vin-db.mjs      (export default, para el navegador y para node)
// Después: npm run test-vin, revisar el diff y hacer commit. La base solo trae descriptores, nunca VIN completos.
import fs from 'fs'
import path from 'path'

const base = process.argv[2] ?? process.env.BASE_VIN ?? '../base-vin'
const raiz = path.resolve(base)
const logica = path.join(raiz, 'web', 'vin-logic.js')
const datos = path.join(raiz, 'web', 'vin-db.json')
for (const archivo of [logica, datos]) {
  if (!fs.existsSync(archivo)) {
    console.error(`No existe ${archivo}. ¿Corriste generar_json.py en base-vin?`)
    process.exit(1)
  }
}

const db = JSON.parse(fs.readFileSync(datos, 'utf8'))
for (const clave of ['generado', 'paises', 'anios', 'valores', 'pesos', 'wmi', 'patrones']) {
  if (!(clave in db)) {
    console.error(`vin-db.json no trae "${clave}"`)
    process.exit(1)
  }
}
// Salvaguarda de privacidad: los patrones son descriptores (1-8, *, 10-11), nunca VIN de 17 caracteres
const raros = Object.keys(db.patrones).filter((d) => !/^[A-HJ-NPR-Z0-9]{8}\*[A-HJ-NPR-Z0-9]{2}$/.test(d))
if (raros.length) {
  console.error(`Patrones con formato inesperado (¿VIN completos?): ${raros.slice(0, 5).join(', ')}`)
  process.exit(1)
}

const destino = (archivo) => path.join(process.cwd(), 'lib', archivo)
fs.copyFileSync(logica, destino('vin-logic.cjs'))
fs.writeFileSync(
  destino('vin-db.mjs'),
  `// GENERADO por scripts/sync-vin-db.mjs desde base-vin (web/vin-db.json). No se edita a mano.\nexport default ${JSON.stringify(db)}\n`
)
console.log(`Listo: base del ${db.generado}, ${Object.keys(db.wmi).length} fabricantes, ${Object.keys(db.patrones).length} patrones de modelo, ${Object.keys(db.plantas ?? {}).length} plantas.`)
