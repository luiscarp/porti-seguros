/* Lógica de decodificación de VIN (ISO 3779 / NOM-001-SSP-2008 / 49 CFR 565).
 * Copia fiel de la lógica de referencia (sección 7 de las instrucciones del decodificador de VIN):
 * no cambiar reglas ni catálogo sin cotejarlo. Todo el cálculo ocurre en el navegador.
 * Pendiente antes de confiar en el catálogo WMI: cotejar una muestra contra VIN reales de pólizas del despacho. */
const ORDEN = "ABCDEFGHJKLMNPRSTUVWXYZ1234567890";
const PAISES = [
  ["A","A","H","Sudáfrica"],
  ["J","A","0","Japón"],
  ["K","L","R","Corea del Sur"],
  ["L","A","0","China"],
  ["M","A","E","India"],["M","F","K","Indonesia"],["M","L","R","Tailandia"],
  ["N","L","R","Turquía"],
  ["P","A","E","Filipinas"],["P","L","R","Malasia"],
  ["R","F","G","Taiwán"],["R","L","M","Vietnam"],
  ["S","A","M","Reino Unido"],["S","N","T","Alemania"],["S","U","Z","Polonia"],
  ["T","A","H","Suiza"],["T","J","P","República Checa"],["T","R","V","Hungría"],["T","W","1","Portugal"],
  ["U","5","7","Eslovaquia"],["U","U","Z","Rumania"],
  ["V","A","E","Austria"],["V","F","R","Francia"],["V","S","W","España"],
  ["W","A","0","Alemania"],
  ["X","3","0","Rusia"],
  ["Y","A","E","Bélgica"],["Y","F","K","Finlandia"],["Y","S","W","Suecia"],
  ["Z","A","R","Italia"],
  ["1","A","0","Estados Unidos"],["4","A","0","Estados Unidos"],["5","A","0","Estados Unidos"],
  ["7","A","E","Nueva Zelanda"],["7","F","0","Estados Unidos"],
  ["2","A","0","Canadá"],
  ["3","A","W","México"],
  ["6","A","W","Australia"],
  ["8","A","E","Argentina"],["8","F","K","Chile"],["8","L","R","Ecuador"],["8","X","2","Venezuela"],
  ["9","A","E","Brasil"],["9","F","K","Colombia"],["9","S","W","Uruguay"],["9","3","9","Brasil"]
];
const REGIONES = {A:"África",B:"África",C:"África",J:"Asia",K:"Asia",L:"Asia",M:"Asia",N:"Asia",P:"Asia",R:"Asia",
  S:"Europa",T:"Europa",U:"Europa",V:"Europa",W:"Europa",X:"Europa",Y:"Europa",Z:"Europa",
  "1":"Norteamérica","2":"Norteamérica","3":"Norteamérica","4":"Norteamérica","5":"Norteamérica","7":"Norteamérica / Oceanía",
  "6":"Oceanía","8":"Sudamérica","9":"Sudamérica"};

/* WMI -> [marca, tipo o nota] */
const WMI = {
  /* México */
  "3VW":["Volkswagen","Automóvil"],"3VV":["Volkswagen","SUV"],
  "3N1":["Nissan","Automóvil"],"3N6":["Nissan","Pickup / comercial"],"3N8":["Nissan","Vehículo multipropósito"],"3PC":["Infiniti","SUV"],
  "3G1":["Chevrolet","Automóvil"],"3GN":["Chevrolet","SUV"],"3GC":["Chevrolet","Pickup"],"3GT":["GMC","Pickup"],"3GY":["Cadillac","SUV"],
  "3FA":["Ford","Automóvil"],"3FT":["Ford","Pickup"],"3FM":["Ford","SUV / multipropósito"],"3LN":["Lincoln","Automóvil"],
  "3HG":["Honda","Automóvil"],"3CZ":["Honda","SUV"],"3H1":["Honda","Motocicleta"],
  "3MZ":["Mazda","Automóvil"],"3MD":["Mazda","Automóvil"],"3MV":["Mazda","SUV"],"3MY":["Toyota","Automóvil (producido por Mazda)"],
  "3KP":["Kia","Automóvil"],"3TM":["Toyota","Pickup"],"3TY":["Toyota","Pickup"],
  "3C4":["Chrysler / Dodge / Jeep","Multipropósito"],"3C6":["Ram","Pickup"],"3D7":["Dodge","Pickup"],
  "3MW":["BMW","Automóvil"],"3AK":["Freightliner","Camión"],"3HS":["International","Camión"],"3WK":["Kenworth","Camión"],
  /* Estados Unidos */
  "1G1":["Chevrolet","Automóvil"],"1GC":["Chevrolet","Pickup"],"1GN":["Chevrolet","SUV"],"1GT":["GMC","Pickup"],"1GK":["GMC","SUV"],
  "1GY":["Cadillac","SUV"],"1G6":["Cadillac","Automóvil"],"1G4":["Buick","Automóvil"],
  "1FA":["Ford","Automóvil"],"1FT":["Ford","Pickup"],"1FM":["Ford","SUV / multipropósito"],"1FD":["Ford","Chasis cabina"],"1ZV":["Ford","Automóvil"],
  "1LN":["Lincoln","Automóvil"],"1ME":["Mercury","Automóvil"],
  "1HG":["Honda","Automóvil"],"19X":["Honda","Automóvil"],"5FN":["Honda","SUV / minivan"],"5J6":["Honda","SUV"],
  "1N4":["Nissan","Automóvil"],"1N6":["Nissan","Pickup"],"5N1":["Nissan","SUV"],
  "1C3":["Chrysler / Dodge","Automóvil"],"1C4":["Chrysler / Dodge / Jeep","SUV / multipropósito"],"1C6":["Ram","Pickup"],
  "1J4":["Jeep","SUV"],"1J8":["Jeep","SUV"],"1D7":["Dodge","Pickup"],"1B3":["Dodge","Automóvil"],
  "1VW":["Volkswagen","Automóvil"],"1YV":["Mazda","Automóvil"],
  "4T1":["Toyota","Automóvil"],"4T3":["Toyota","SUV"],"5TD":["Toyota","SUV / minivan"],"5TF":["Toyota","Pickup"],"5YF":["Toyota","Automóvil"],
  "5YJ":["Tesla","Automóvil"],"7SA":["Tesla","SUV"],
  "5NP":["Hyundai","Automóvil"],"5XY":["Hyundai / Kia","SUV"],"5XX":["Kia","Automóvil"],
  "4S3":["Subaru","Automóvil"],"4S4":["Subaru","SUV"],"5UX":["BMW","SUV"],"4JG":["Mercedes-Benz","SUV"],"55S":["Mercedes-Benz","Automóvil"],
  "1FU":["Freightliner","Camión"],"1XK":["Kenworth","Camión"],"1XP":["Peterbilt","Camión"],"1M1":["Mack","Camión"],"4V4":["Volvo","Camión"],"1HT":["International","Camión"],
  "1HD":["Harley-Davidson","Motocicleta"],
  /* Canadá */
  "2T1":["Toyota","Automóvil"],"2HG":["Honda","Automóvil"],"2HK":["Honda","SUV"],"2G1":["Chevrolet","Automóvil"],
  "2FM":["Ford","SUV / multipropósito"],"2C3":["Chrysler / Dodge","Automóvil"],"2C4":["Chrysler / Dodge","Minivan"],
  /* Japón */
  "JTD":["Toyota","Automóvil"],"JTE":["Toyota","SUV"],"JTM":["Toyota","SUV"],"JTN":["Toyota","Automóvil"],"JT2":["Toyota","Automóvil"],"JT3":["Toyota","SUV"],
  "JTH":["Lexus","Automóvil"],"JTJ":["Lexus","SUV"],
  "JHM":["Honda","Automóvil"],"JHL":["Honda","SUV"],"JH2":["Honda","Motocicleta"],
  "JN1":["Nissan","Automóvil"],"JN8":["Nissan","SUV"],
  "JM1":["Mazda","Automóvil"],"JM3":["Mazda","SUV"],
  "JF1":["Subaru","Automóvil"],"JF2":["Subaru","SUV"],
  "JS2":["Suzuki","Automóvil"],"JS3":["Suzuki","SUV"],"JS1":["Suzuki","Motocicleta"],
  "JA3":["Mitsubishi","Automóvil"],"JA4":["Mitsubishi","SUV"],"JMB":["Mitsubishi","Automóvil"],"JMY":["Mitsubishi","Automóvil / SUV"],
  "JYA":["Yamaha","Motocicleta"],"JKA":["Kawasaki","Motocicleta"],"JAL":["Isuzu","Camión"],
  /* Corea del Sur */
  "KMH":["Hyundai","Automóvil"],"KM8":["Hyundai","SUV"],"KNA":["Kia","Automóvil"],"KND":["Kia","SUV"],
  "KL1":["Chevrolet (GM Corea)","Automóvil"],"KL7":["Chevrolet (GM Corea)","Automóvil / SUV"],"KL8":["Chevrolet (GM Corea)","Automóvil"],
  /* China */
  "LSG":["SAIC-GM (Chevrolet / Buick)","Automóvil / SUV"],"LZW":["SAIC-GM-Wuling (Chevrolet)","Automóvil / SUV"],"LSJ":["MG (SAIC)","Automóvil / SUV"],
  "LVV":["Chery","Automóvil / SUV"],"LJ1":["JAC","Automóvil / SUV"],"LGX":["BYD","Automóvil / SUV"],"LC0":["BYD","Automóvil / SUV"],
  "LB3":["Geely","Automóvil / SUV"],"L6T":["Geely","Automóvil / SUV"],"LGW":["Great Wall / Haval","SUV / pickup"],"LS5":["Changan","Automóvil / SUV"],
  "LFV":["FAW-Volkswagen","Automóvil"],"LSV":["SAIC-Volkswagen","Automóvil"],"LRW":["Tesla","Automóvil"],"LMG":["GAC","Automóvil / SUV"],
  /* India, Indonesia, Tailandia */
  "MA3":["Suzuki (Maruti)","Automóvil"],"MAL":["Hyundai","Automóvil"],"MA1":["Mahindra","SUV / pickup"],"MAT":["Tata","Automóvil"],
  "MEX":["Volkswagen / Škoda","Automóvil"],"MA6":["Chevrolet (GM India)","Automóvil"],"MAJ":["Ford","Automóvil"],"MDH":["Nissan","Automóvil"],
  "MEE":["Renault","Automóvil"],"MD2":["Bajaj","Motocicleta"],"ME4":["Honda","Motocicleta"],
  "MHR":["Honda","Automóvil"],"MHF":["Toyota","Automóvil"],"MHK":["Toyota / Daihatsu","Multipropósito"],
  "MR0":["Toyota","Pickup"],"MMB":["Mitsubishi","Pickup / SUV"],"MNT":["Nissan","Pickup"],"MPA":["Isuzu","Pickup"],"MM7":["Mazda","Automóvil / SUV"],
  /* Europa */
  "WVW":["Volkswagen","Automóvil"],"WVG":["Volkswagen","SUV"],"WV1":["Volkswagen","Comercial"],"WV2":["Volkswagen","Van / pasajeros"],
  "WAU":["Audi","Automóvil"],"WA1":["Audi","SUV"],"TRU":["Audi","Automóvil"],
  "WBA":["BMW","Automóvil"],"WBS":["BMW M","Automóvil"],"WBY":["BMW i","Automóvil"],"WBX":["BMW","SUV"],"WMW":["MINI","Automóvil"],
  "WDB":["Mercedes-Benz","Automóvil"],"WDD":["Mercedes-Benz","Automóvil"],"WDC":["Mercedes-Benz","SUV"],"W1K":["Mercedes-Benz","Automóvil"],"W1N":["Mercedes-Benz","SUV"],
  "WME":["Smart","Automóvil"],"WP0":["Porsche","Automóvil"],"WP1":["Porsche","SUV"],"W0L":["Opel","Automóvil"],"W0V":["Opel","Automóvil"],"WF0":["Ford","Automóvil"],
  "VF1":["Renault","Automóvil"],"VF3":["Peugeot","Automóvil"],"VR3":["Peugeot","Automóvil"],"VF7":["Citroën","Automóvil"],"VR7":["Citroën","Automóvil"],"VR1":["DS","Automóvil"],
  "VSS":["SEAT","Automóvil"],"VS6":["Ford","Automóvil"],"VSK":["Nissan","Comercial"],"VNK":["Toyota","Automóvil"],
  "ZFA":["Fiat","Automóvil"],"ZAR":["Alfa Romeo","Automóvil"],"ZFF":["Ferrari","Automóvil"],"ZAM":["Maserati","Automóvil"],"ZHW":["Lamborghini","Automóvil"],"ZDM":["Ducati","Motocicleta"],"ZD4":["Aprilia","Motocicleta"],
  "SAL":["Land Rover","SUV"],"SAJ":["Jaguar","Automóvil"],"SCC":["Lotus","Automóvil"],"SCB":["Bentley","Automóvil"],"SCA":["Rolls-Royce","Automóvil"],"SCF":["Aston Martin","Automóvil"],
  "SHH":["Honda","Automóvil"],"SJN":["Nissan","Automóvil / SUV"],"SB1":["Toyota","Automóvil"],"SMT":["Triumph","Motocicleta"],
  "YV1":["Volvo","Automóvil"],"YV4":["Volvo","SUV"],"YS3":["Saab","Automóvil"],
  "TMB":["Škoda","Automóvil"],"TMA":["Hyundai","Automóvil"],"TSM":["Suzuki","Automóvil"],"U5Y":["Kia","Automóvil / SUV"],"UU1":["Dacia / Renault","Automóvil"],
  "NMT":["Toyota","Automóvil"],"NM0":["Ford","Comercial"],
  /* Sudamérica, África, Oceanía */
  "9BW":["Volkswagen","Automóvil"],"9BG":["Chevrolet","Automóvil"],"9BF":["Ford","Automóvil"],"9BD":["Fiat","Automóvil"],"9BR":["Toyota","Automóvil"],"9BM":["Mercedes-Benz","Camión / autobús"],
  "93H":["Honda","Automóvil"],"93Y":["Renault","Automóvil"],"94D":["Nissan","Automóvil"],"936":["Peugeot","Automóvil"],"935":["Citroën","Automóvil"],"988":["Jeep","SUV"],"9C2":["Honda","Motocicleta"],
  "9FB":["Renault","Automóvil"],
  "8AG":["Chevrolet","Automóvil"],"8AF":["Ford","Pickup / automóvil"],"8AW":["Volkswagen","Pickup / automóvil"],"8AP":["Fiat","Automóvil"],"8A1":["Renault","Automóvil"],"8AJ":["Toyota","Pickup / SUV"],"8AD":["Peugeot","Automóvil"],"8AC":["Mercedes-Benz","Van"],
  "AHT":["Toyota","Pickup / automóvil"],"AAV":["Volkswagen","Automóvil"],"6T1":["Toyota","Automóvil"]
};

const VALOR = {A:1,B:2,C:3,D:4,E:5,F:6,G:7,H:8,J:1,K:2,L:3,M:4,N:5,P:7,R:9,S:2,T:3,U:4,V:5,W:6,X:7,Y:8,Z:9};
const PESOS = [8,7,6,5,4,3,2,10,0,9,8,7,6,5,4,3,2];
const ANIOS = "ABCDEFGHJKLMNPRSTVWXY123456789"; /* A = 1980 y 2010 */

function limpiarVIN(txt){ return String(txt||"").toUpperCase().replace(/[^A-Z0-9]/g,""); }

function digitoVerificador(vin){
  let s = 0;
  for (let i = 0; i < 17; i++){
    const c = vin[i];
    const v = /[0-9]/.test(c) ? +c : VALOR[c];
    if (v === undefined) return null;
    s += v * PESOS[i];
  }
  const r = s % 11;
  return r === 10 ? "X" : String(r);
}

function paisDe(vin){
  const a = vin[0], b = ORDEN.indexOf(vin[1]);
  for (const [p, d, h, n] of PAISES){
    if (p === a && b >= ORDEN.indexOf(d) && b <= ORDEN.indexOf(h)) return n;
  }
  return null;
}

function decodificarVIN(entrada, anioActual){
  const vin = limpiarVIN(entrada);
  const r = { vin, errores: [], avisos: [], completo: false };
  if (!vin){ r.errores.push("Escribe un VIN de 17 caracteres."); return r; }
  /* Series anteriores a 1981: sin formato único, de 5 a 13 caracteres (a veces hasta 16), sin dígito verificador. */
  if (vin.length < 5){
    r.errores.push("Tiene " + vin.length + " caracteres. Un número de serie tiene al menos 5 (series antiguas) y 17 desde 1981.");
    return r;
  }
  if (vin.length < 17){
    r.antiguo = true;
    r.longitud = vin.length;
    r.posibleIncompleto = vin.length >= 14;
    r.avisos.push("Serie de " + vin.length + " caracteres: formato anterior a 1981, cuando cada fabricante usaba su propia estructura. No tiene dígito verificador y no se puede leer marca ni año por posición.");
    if (r.posibleIncompleto) r.avisos.push("Si la unidad es 1981 o posterior, faltan " + (17 - vin.length) + " caracteres: revisa la captura contra la tarjeta de circulación.");
    r.avisos.push("Captura marca, año y modelo a mano desde la factura o la tarjeta de circulación.");
    return r;
  }
  const malos = [...new Set(vin.split("").filter(c => "IOQ".includes(c)))];
  if (malos.length){
    r.errores.push("El VIN no usa las letras I, O ni Q. Revisa: " + malos.join(", ") + ". Suele ser un 1 o un 0 mal capturado.");
    r.sugerencia = vin.replace(/[OQ]/g,"0").replace(/I/g,"1");
  }
  if (vin.length !== 17){
    r.errores.push("Tiene " + vin.length + " caracteres y el máximo es 17. Sobran " + (vin.length - 17) + ".");
    return r;
  }
  if (malos.length) return r;
  r.completo = true;

  r.wmi = vin.slice(0,3); r.vds = vin.slice(3,8); r.dv = vin[8];
  r.codAnio = vin[9]; r.planta = vin[10]; r.serie = vin.slice(11);
  r.region = REGIONES[vin[0]] || null;
  r.pais = paisDe(vin);
  r.norteamerica = "12345".includes(vin[0]);

  const f = WMI[r.wmi];
  r.marca = f ? f[0] : null;
  r.tipo = f ? f[1] : null;
  r.pequenoFabricante = vin[2] === "9";

  r.dvCalculado = digitoVerificador(vin);
  r.dvValido = r.dvCalculado === r.dv;
  if (!r.dvValido){
    if (r.norteamerica) r.errores.push("El dígito verificador no coincide: la posición 9 trae " + r.dv + " y el cálculo da " + r.dvCalculado + ". Lo más probable es un carácter mal capturado.");
    else r.avisos.push("El dígito verificador no coincide (trae " + r.dv + ", el cálculo da " + r.dvCalculado + "). Fuera de Norteamérica no siempre se usa, así que no prueba un error.");
  }

  const idx = ANIOS.indexOf(r.codAnio);
  if (idx < 0){
    r.anio = null;
    r.avisos.push("La posición 10 trae " + r.codAnio + ", que no es un código de año modelo. Algunos fabricantes fuera de Norteamérica no codifican el año aquí.");
  } else {
    const viejo = 1980 + idx, nuevo = 2010 + idx;
    let elegido;
    if (r.norteamerica && /[A-Z]/.test(vin[6])) elegido = nuevo;
    else if (r.norteamerica && /[0-9]/.test(vin[6])) elegido = viejo;
    else elegido = nuevo;
    if (elegido > anioActual + 1) elegido = viejo;
    r.anio = elegido;
    r.anioAlterno = elegido === nuevo ? viejo : (nuevo <= anioActual + 1 ? nuevo : null);
    r.anioRegla = r.norteamerica ? "posicion7" : "reciente";
    if (!r.norteamerica) r.avisos.push("Año modelo tomado de la posición 10. Fuera de Norteamérica algunos fabricantes no siguen este código; confírmalo con la tarjeta de circulación.");
  }
  if (!r.marca) r.avisos.push("El prefijo " + r.wmi + " no está en el catálogo de fabricantes de esta herramienta. El resto del desglose sigue siendo válido.");
  return r;
}

export { decodificarVIN, digitoVerificador, limpiarVIN };
