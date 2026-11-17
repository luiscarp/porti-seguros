/*
 * Decodificador de VIN (ISO 3779 / NOM-001-SSP-2008 / 49 CFR 565).
 * Todos los catálogos vienen de la base (web/vin-db.js o vin-db.json, generados desde datos/*.csv).
 * Uso: decodificarVIN(texto, anioActual, db)
 */
(function (raiz) {
  var ORDEN = "ABCDEFGHJKLMNPRSTUVWXYZ1234567890";
  var cacheIdx = null, cacheDb = null;

  function limpiarVIN(txt) { return String(txt || "").toUpperCase().replace(/[^A-Z0-9]/g, ""); }

  function indice(db) {
    if (cacheDb === db) return cacheIdx;
    var porOcho = {};
    Object.keys(db.patrones || {}).forEach(function (d) {
      var k = d.slice(0, 8);
      (porOcho[k] = porOcho[k] || []).push(d);
    });
    cacheDb = db; cacheIdx = { porOcho: porOcho };
    return cacheIdx;
  }

  function digitoVerificador(vin, db) {
    var s = 0;
    for (var i = 0; i < 17; i++) {
      var v = db.valores[vin[i]];
      if (v === undefined) return null;
      s += v * db.pesos[i];
    }
    var r = s % 11;
    return r === 10 ? "X" : String(r);
  }

  function paisDe(vin, db) {
    var b = ORDEN.indexOf(vin[1]);
    for (var i = 0; i < db.paises.length; i++) {
      var p = db.paises[i];
      if (p[0] === vin[0] && b >= ORDEN.indexOf(p[1]) && b <= ORDEN.indexOf(p[2])) return { pais: p[3], region: p[4] };
    }
    for (var j = 0; j < db.paises.length; j++) if (db.paises[j][0] === vin[0]) return { pais: null, region: db.paises[j][4] };
    return { pais: null, region: null };
  }

  /* Busca modelo en la base: exacto (1-8, 10, 11) > mismo año otra planta > mismas 1-8 otro año (aproximado) */
  function buscarModelo(vin, db) {
    var idx = indice(db), exacto = vin.slice(0, 8) + "*" + vin.slice(9, 11);
    if (db.patrones[exacto]) return { datos: db.patrones[exacto], coincidencia: "exacta", descriptor: exacto };
    var cand = idx.porOcho[vin.slice(0, 8)] || [];
    for (var i = 0; i < cand.length; i++) {
      if (cand[i][9] === vin[9]) return { datos: db.patrones[cand[i]], coincidencia: "otra planta", descriptor: cand[i] };
    }
    if (cand.length) {
      var datos = db.patrones[cand[0]];
      return { datos: datos, coincidencia: "aproximada", descriptor: cand[0] };
    }
    return null;
  }

  function decodificarVIN(entrada, anioActual, db) {
    var vin = limpiarVIN(entrada);
    var r = { vin: vin, errores: [], avisos: [], completo: false };
    if (!vin) { r.errores.push("Escribe un número de serie."); return r; }

    if (vin.length > 17) {
      r.errores.push("Tiene " + vin.length + " caracteres y el máximo es 17. Sobran " + (vin.length - 17) + ".");
      return r;
    }
    if (vin.length < 5) {
      r.errores.push("Tiene " + vin.length + " caracteres. Un número de serie tiene al menos 5 (series antiguas) y 17 desde 1981.");
      return r;
    }
    if (vin.length < 17) {
      r.antiguo = true;
      r.longitud = vin.length;
      r.posibleIncompleto = vin.length >= 14;
      r.avisos.push("Serie de " + vin.length + " caracteres: formato anterior a 1981, cuando cada fabricante usaba su propia estructura. No tiene dígito verificador y no se puede leer marca ni año por posición.");
      if (r.posibleIncompleto) r.avisos.push("Si la unidad es 1981 o posterior, faltan " + (17 - vin.length) + " caracteres: revisa la captura contra la tarjeta de circulación.");
      r.avisos.push("Captura marca, año y modelo a mano desde la factura o la tarjeta de circulación.");
      return r;
    }

    var malos = [];
    vin.split("").forEach(function (c) { if ("IOQ".indexOf(c) >= 0 && malos.indexOf(c) < 0) malos.push(c); });
    if (malos.length) {
      r.errores.push("El VIN no usa las letras I, O ni Q. Revisa: " + malos.join(", ") + ". Suele ser un 1 o un 0 mal capturado.");
      r.sugerencia = vin.replace(/[OQ]/g, "0").replace(/I/g, "1");
      return r;
    }
    r.completo = true;
    r.wmi = vin.slice(0, 3); r.vds = vin.slice(3, 8); r.dv = vin[8];
    r.codAnio = vin[9]; r.planta = vin[10]; r.serie = vin.slice(11);
    var pr = paisDe(vin, db); r.pais = pr.pais; r.region = pr.region;
    r.norteamerica = "12345".indexOf(vin[0]) >= 0;

    var f = db.wmi[r.wmi];
    r.marca = f ? f[0] : null; r.tipo = f ? f[1] : null; r.wmiVerificado = f ? f[2] : null;
    r.pequenoFabricante = vin[2] === "9";

    r.dvCalculado = digitoVerificador(vin, db);
    r.dvValido = r.dvCalculado === r.dv;
    if (!r.dvValido) {
      if (r.norteamerica) r.errores.push("El dígito verificador no coincide: la posición 9 trae " + r.dv + " y el cálculo da " + r.dvCalculado + ". Lo más probable es un carácter mal capturado.");
      else r.avisos.push("El dígito verificador no coincide (trae " + r.dv + ", el cálculo da " + r.dvCalculado + "). Fuera de Norteamérica no siempre se usa, así que no prueba un error.");
    }

    var idx = db.anios.indexOf(r.codAnio);
    if (idx < 0) {
      r.anio = null;
      r.avisos.push("La posición 10 trae " + r.codAnio + ", que no es un código de año modelo. Algunos fabricantes fuera de Norteamérica no codifican el año aquí.");
    } else {
      var viejo = 1980 + idx, nuevo = 2010 + idx, elegido;
      if (r.norteamerica && /[A-Z]/.test(vin[6])) elegido = nuevo;
      else if (r.norteamerica) elegido = viejo;
      else elegido = nuevo;
      if (elegido > anioActual + 1) elegido = viejo;
      r.anio = elegido;
      r.anioAlterno = elegido === nuevo ? viejo : (nuevo <= anioActual + 1 ? nuevo : null);
      r.anioRegla = r.norteamerica ? "posicion7" : "reciente";
      if (!r.norteamerica) r.avisos.push("Año modelo tomado de la posición 10. Fuera de Norteamérica algunos fabricantes no siguen este código; confírmalo con la tarjeta de circulación.");
    }

    var m = buscarModelo(vin, db);
    if (m) {
      r.modelo = m.datos; r.coincidencia = m.coincidencia; r.descriptor = m.descriptor;
      if (m.datos.anio_modelo && r.coincidencia === "exacta") r.anio = +m.datos.anio_modelo;
      if (!r.marca && m.datos.marca) r.marca = m.datos.marca;
      if (m.coincidencia === "aproximada") r.avisos.push("Modelo aproximado: la base tiene este mismo código de modelo para el año " + (m.datos.anio_modelo || "otro") + ", no para el año de este VIN.");
    }

    var pl = (db.plantas || {})[r.wmi + r.planta];
    if (pl) r.plantaInfo = { planta: pl[0], ciudad: pl[1], pais: pl[2] };
    else if (m && m.coincidencia !== "aproximada" && (m.datos.planta_ciudad || m.datos.planta_pais)) r.plantaInfo = { planta: "", ciudad: m.datos.planta_ciudad || "", pais: m.datos.planta_pais || "" };

    if (!r.marca) r.avisos.push("El prefijo " + r.wmi + " no está en la base de fabricantes. El resto del desglose sigue siendo válido.");
    else if (r.wmiVerificado === "no" || r.wmiVerificado === "revisar") r.avisos.push("El fabricante " + r.marca + " para el prefijo " + r.wmi + " está en la base pero aún sin verificar contra una fuente oficial.");
    return r;
  }

  var api = { decodificarVIN: decodificarVIN, digitoVerificador: digitoVerificador, limpiarVIN: limpiarVIN };
  if (typeof module !== "undefined" && module.exports) module.exports = api;
  else { raiz.decodificarVIN = decodificarVIN; raiz.digitoVerificador = digitoVerificador; raiz.limpiarVIN = limpiarVIN; }
})(typeof window !== "undefined" ? window : this);
