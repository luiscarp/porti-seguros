/*
 * Decodificador de VIN (ISO 3779 / ISO 3780 / NOM-001-SSP-2008 / 49 CFR 565).
 * Misma lógica que herramientas/decodificar.py.
 *
 * Uso:
 *   const r = await decodificarVIN(texto, anioActual, db, cargar)
 *   db     = window.VIN_DB (vin-db.js)
 *   cargar = async (ruta) => objeto JSON  (ruta relativa a web/, p. ej. "datos/wmi/3N.json")
 */
(function (raiz) {
  var ORDEN = "ABCDEFGHJKLMNPRSTUVWXYZ1234567890";
  var cache = {}, regexCache = {};

  function limpiarVIN(txt) { return String(txt || "").toUpperCase().replace(/[^A-Z0-9]/g, ""); }

  function cargarUna(ruta, cargar) {
    if (!cache[ruta]) cache[ruta] = cargar(ruta).catch(function (e) { delete cache[ruta]; throw e; });
    return cache[ruta];
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

  function regex(p) {
    if (!regexCache[p]) regexCache[p] = new RegExp("^" + p.replace(/\*/g, ".").replace(/#/g, "[0-9]"));
    return regexCache[p];
  }

  function coincide(p, vin) {
    var i = p.indexOf("|");
    if (i >= 0) return regex(p.slice(0, i)).test(vin.slice(3, 8)) && regex(p.slice(i + 1)).test(vin.slice(9));
    return regex(p).test(vin.slice(3));
  }

  function especificidad(p) {
    var s = p.replace(/\|/g, "").replace(/\[[^\]]*\]/g, "~"), n = 0;
    for (var i = 0; i < s.length; i++) {
      var c = s[i];
      if (c === "~" || c === "#") n += 0.5; else if (c !== "*") n += 1;
    }
    return n;
  }

  function mayor(a, b) {
    for (var i = 0; i < a.length; i++) { if (a[i] !== b[i]) return a[i] > b[i]; }
    return false;
  }

  function anioPorPosicion(vin, db, anioActual) {
    var i = db.anios.indexOf(vin[9]);
    if (i < 0) return null;
    var y = (/[A-Z]/.test(vin[6]) ? 2010 : 1980) + i;
    return y > anioActual + 1 ? y - 30 : y;
  }

  function antigua(r, db) {
    r.antiguo = true;
    r.longitud = r.vin.length;
    r.posibleIncompleto = r.vin.length >= 14;
    r.avisos.push("Serie de " + r.vin.length + " caracteres: formato anterior a 1981, cuando cada fabricante usaba su propia estructura. No tiene dígito verificador.");
    if (r.posibleIncompleto) r.avisos.push("Si la unidad es 1981 o posterior, faltan " + (17 - r.vin.length) + " caracteres: revisa la captura contra la tarjeta de circulación.");
    var formatos = {};
    (db.antiguas || []).forEach(function (a) {
      if (+a[3] !== r.vin.length) return;
      var k = a[0] + "|" + a[1] + "|" + a[2];
      var f = formatos[k] = formatos[k] || { marca: a[0], desde: a[1], hasta: a[2], fuente: a[7], posiciones: [] };
      if (!a[4]) return;
      var trozo = posicionesDe(a[4], r.vin);
      if (!a[5]) f.posiciones.push({ pos: a[4], caracteres: trozo, significado: a[6], lectura: "" });
      else if (trozo === a[5]) f.posiciones.forEach(function (p) { if (p.pos === a[4]) p.lectura = a[6]; });
    });
    r.formatosAntiguos = Object.keys(formatos).map(function (k) { return formatos[k]; });
    r.avisos.push(r.formatosAntiguos.length ? "Se muestran los formatos conocidos de " + r.vin.length + " caracteres. La marca no se puede confirmar solo con el número: verifícala con la factura o la tarjeta de circulación." : "Captura marca, año y modelo a mano desde la factura o la tarjeta de circulación.");
    return r;
  }

  function posicionesDe(pos, vin) {
    var m = String(pos).split("-"), a = +m[0], b = +(m[1] || m[0]);
    return vin.slice(a - 1, b);
  }

  async function decodificarVIN(entrada, anioActual, db, cargar) {
    var vin = limpiarVIN(entrada);
    var r = { vin: vin, errores: [], avisos: [], completo: false };
    if (!vin) { r.errores.push("Escribe un número de serie."); return r; }
    if (vin.length > 17) { r.errores.push("Tiene " + vin.length + " caracteres y el máximo es 17. Sobran " + (vin.length - 17) + "."); return r; }
    if (vin.length < 5) { r.errores.push("Tiene " + vin.length + " caracteres. Un número de serie tiene al menos 5 (series antiguas) y 17 desde 1981."); return r; }
    if (vin.length < 17) return antigua(r, db);

    var malos = [];
    vin.split("").forEach(function (c) { if ("IOQ".indexOf(c) >= 0 && malos.indexOf(c) < 0) malos.push(c); });
    if (malos.length) {
      r.errores.push("El VIN no usa las letras I, O ni Q. Revisa: " + malos.join(", ") + ". Suele ser un 1 o un 0 mal capturado.");
      r.sugerencia = vin.replace(/[OQ]/g, "0").replace(/I/g, "1");
      return r;
    }
    r.completo = true;
    r.vds = vin.slice(3, 8); r.dv = vin[8]; r.codAnio = vin[9]; r.planta = vin[10]; r.serie = vin.slice(11);
    var pr = paisDe(vin, db); r.pais = pr.pais; r.region = pr.region;
    r.norteamerica = "12345".indexOf(vin[0]) >= 0;
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
      if (r.norteamerica) elegido = /[A-Z]/.test(vin[6]) ? nuevo : viejo; else elegido = nuevo;
      if (elegido > anioActual + 1) elegido = viejo;
      r.anio = elegido;
      r.anioAlterno = elegido === nuevo ? viejo : (nuevo <= anioActual + 1 ? nuevo : null);
      r.anioRegla = r.norteamerica ? "posicion7" : "reciente";
      if (!r.norteamerica) r.avisos.push("Año modelo tomado de la posición 10. Fuera de Norteamérica algunos fabricantes no siguen este código; confírmalo con la tarjeta de circulación.");
    }

    var bloque;
    try { bloque = await cargarUna("datos/wmi/" + vin.slice(0, 2) + ".json", cargar); }
    catch (e) { bloque = { f: {}, e: {}, p: {} }; }
    var w = vin.slice(0, 3);
    if (r.pequenoFabricante) {
      var largo = w + vin.slice(11, 14);
      if (bloque.f[largo] || bloque.e[largo]) w = largo;
    }
    r.wmi = w;
    var f = bloque.f[w];
    if (f) { r.marca = f[0]; r.tipo = f[1]; if (f[2]) r.paisFabricante = f[2]; r.wmiVerificado = f[3]; r.fuenteFabricante = f[4]; }

    /* Modelo y especificaciones */
    var y = anioPorPosicion(vin, db, anioActual), candidatos = [];
    if (y !== null) {
      var esquemas = (bloque.e[w] || []).filter(function (e) { return e[0] <= y && y <= e[1]; });
      var rutas = {};
      esquemas.forEach(function (e) { rutas["datos/esquemas/" + Math.floor(e[2] / 100) + ".json"] = 1; });
      var cargados = {};
      await Promise.all(Object.keys(rutas).map(function (ruta) {
        return cargarUna(ruta, cargar).then(function (j) { cargados[ruta] = j; }, function () {});
      }));
      esquemas.forEach(function (e) {
        var g = cargados["datos/esquemas/" + Math.floor(e[2] / 100) + ".json"];
        var s = g && g[String(e[2])];
        if (!s) return;
        s.r.forEach(function (regla, orden) {
          if (coincide(regla[0], vin)) candidatos.push({ sid: e[2], nombre: s.n, p: regla[0], campo: db.campos[regla[1]], valor: regla[2], orden: orden });
        });
      });
    }
    var peso = {};
    candidatos.forEach(function (c) { if (c.campo.indexOf("planta_") !== 0) peso[c.sid] = (peso[c.sid] || 0) + 1; });
    var mejor = {};
    candidatos.forEach(function (c) {
      var clave = [peso[c.sid] || 0, especificidad(c.p), c.orden];
      if (!mejor[c.campo] || mayor(clave, mejor[c.campo].clave)) mejor[c.campo] = { clave: clave, valor: c.valor };
    });
    var datos = {};
    Object.keys(mejor).forEach(function (k) { datos[k] = mejor[k].valor; });
    if (!datos.motor_litros && /^\d+$/.test(datos.motor_cc || "")) datos.motor_litros = (+datos.motor_cc / 1000).toFixed(1);
    if (candidatos.length) {
      var top = Object.keys(peso).sort(function (a, b) { return peso[b] - peso[a]; })[0];
      var nom = candidatos.filter(function (c) { return String(c.sid) === top; })[0];
      r.esquema = nom ? nom.nombre : "";
      r.fuenteModelo = "Reglas NHTSA vPIC (base local)";
    }
    var exacto = (db.descriptores || {})[vin.slice(0, 8) + "*" + vin.slice(9, 11)];
    if (exacto) {
      Object.keys(exacto).forEach(function (k) { if (k !== "fuente" && k !== "verificado" && k !== "anio_modelo" && exacto[k]) datos[k] = exacto[k]; });
      r.fuenteModelo = (exacto.fuente || "") + (exacto.verificado === "manual" ? " (captura manual)" : " (VIN real)");
    }
    if (datos.marca) { if (!r.marca || r.marca.indexOf("/") >= 0) r.marca = datos.marca; }
    if (!datos.planta_ciudad && !datos.planta_pais) {
      var pl = bloque.p[w + vin[10]];
      if (pl) { datos.planta_empresa = pl[0]; datos.planta_ciudad = pl[1]; datos.planta_estado = pl[2]; datos.planta_pais = pl[3]; r.plantaDeTabla = true; }
    }
    if (Object.keys(datos).length) r.datos = datos;
    if (datos.modelo || exacto) r.modelo = datos;

    if (!r.marca) r.avisos.push("El prefijo " + w + " no está en la base de fabricantes. El resto del desglose sigue siendo válido.");
    else if (r.wmiVerificado === "secundaria") r.avisos.push("El fabricante " + r.marca + " viene de una fuente secundaria (Wikibooks), no del registro oficial de NHTSA.");
    else if (r.wmiVerificado === "no" || r.wmiVerificado === "revisar") r.avisos.push("El fabricante " + r.marca + " está en la base pero aún sin verificar contra una fuente oficial.");
    if (r.marca && !datos.modelo) r.avisos.push("Este código de modelo no está en las reglas de NHTSA. Es común en unidades vendidas solo en México o fabricadas para otros mercados.");
    return r;
  }

  var api = { decodificarVIN: decodificarVIN, digitoVerificador: digitoVerificador, limpiarVIN: limpiarVIN };
  if (typeof module !== "undefined" && module.exports) module.exports = api;
  else { raiz.decodificarVIN = decodificarVIN; raiz.digitoVerificador = digitoVerificador; raiz.limpiarVIN = limpiarVIN; }
})(typeof window !== "undefined" ? window : this);
