# Plan del Blog — PorTi Seguros (Fase 5)

> **Para Claude Code:** este documento complementa `SPEC_SEO_PORTISEGUROS.md`. Respeta todas sus reglas (sección 4). Aquí está la estrategia editorial, la especificación técnica del blog (sección 6), la plantilla de cada entrada (sección 7) y la ficha de las 16 entradas (sección 9). Las entradas ya redactadas están en `blog/posts/*.md`. Ninguna entrada se publica si su `status` no es `publicado`.

**Versión:** 1.0 · **Fecha:** 3 nov 2026 · **Autora de las entradas:** Claudia Pacheco · **URL:** https://www.portiseguros.com.mx/blog

---

## 1. Objetivo del blog

1. **Aparecer en Google, Bing y asistentes de IA** (ChatGPT, Gemini, Perplexity, Copilot) cuando alguien en Chihuahua pregunta por seguros de vida, retiro, plataformas, taxis, gastos médicos, eventos y siniestros.
2. **Ser la fuente que las IA citan:** respuestas directas, con fuentes oficiales y fecha, firmadas por una agente con cédula CNSF y experiencia desde 2007.
3. **Llevar al lector a la página de servicio y a WhatsApp**, con un mensaje prellenado que identifica el artículo de origen.

**Lo que NO es el blog:** noticias genéricas, contenido copiado de aseguradoras, comparativas de precios, ni textos masivos escritos por IA sin revisión.

---

## 2. Reglas editoriales (obligatorias)

| Regla | Detalle |
|---|---|
| Respuesta corta primero | Cada entrada abre con un bloque "Respuesta corta" de 40–80 palabras que responde la pregunta del título. Es lo que las IA tienden a citar. |
| Fuentes oficiales | Mínimo 2 fuentes por entrada; preferir CNSF, CONDUSEF, SAT, DOF, INEGI, leyes (LISR, Ley sobre el Contrato de Seguro), páginas oficiales de plataformas y aseguradoras. Fuentes secundarias (medios especializados) solo como apoyo. |
| Cifras | Solo con fuente y fecha. Las cifras que cambian cada año (UMA, topes fiscales) llevan el año en el texto y se revisan cada febrero. Los ejemplos con números inventados se etiquetan como **ejemplo hipotético**. |
| Prohibido | Precios o primas como referencia de mercado, "el mejor/el más barato", promesas de rendimiento, comparar negativamente aseguradoras, consejos fiscales definitivos (siempre "confirma con tu contador"). |
| Localización | "Chihuahua" en el H1 o en la primera frase cuando aplique, y al menos una mención más con contexto real (oficina en Col. San Felipe, requisitos locales, temporada). Sin repetir de forma forzada. |
| Voz | Tú, frases cortas, sin jerga sin explicar. Tono: "Proteger antes que vender". |
| Experiencia propia | Campos `notaClaudiaTitulo` y `notaClaudia` en el frontmatter: 1–4 párrafos en primera persona, escritos por Claudia, sobre cómo asesora en ese tema. **Claude Code no los inventa ni los edita**; si están vacíos, el bloque no se muestra. |
| Nada pendiente visible | Prohibido publicar texto con `[PENDIENTE]`, `TODO`, `XXX` o corchetes de revisión. Las notas internas van en `notasRevision` (no se renderiza). |
| Copyright | Parafrasear las fuentes; nada de copiar párrafos. Citas textuales solo de leyes y muy breves. |
| Revisión | Toda entrada pasa por Claudia (y por su contador en temas fiscales) antes de cambiar `status` a `publicado`. |

---

## 3. Arquitectura de contenido (clusters)

Cada cluster tiene una **página de servicio** (ya existe en el sitio) y varias entradas que enlazan hacia ella.

| Cluster | Página de servicio (pilar) | Entradas (IDs) |
|---|---|---|
| **Vida y familia** | `/seguros-de-vida` | B02, B03, B06, B10 |
| **Retiro y fiscal** | `/plan-personal-de-retiro` | B01, B05, B12 |
| **Plataformas y taxi** | `/seguro-uber-didi`, `/seguro-para-taxi` | B04, B11 |
| **Auto y siniestros** | `/seguro-de-auto` | B07, B14, B15 |
| **Salud** | `/gastos-medicos-mayores` | B09, B12 |
| **Empresas y eventos** | `/seguro-eventos-masivos`, `/seguro-flotillas`, `/responsabilidad-civil` | B13, B16 |
| **Viaje** | `/seguro-de-viaje` | B08 |

**Enlazado obligatorio por entrada:**
- 1 enlace a su página de servicio (en el primer tercio del texto y en el CTA final).
- 1–2 enlaces a otras entradas del mismo cluster (cuando existan).
- 1 enlace a `/claudia-pacheco` (en la caja de autora).
- Las páginas de servicio muestran un bloque "Artículos relacionados" con las entradas de su cluster (ver 6.6).

---

## 4. Calendario editorial (6 meses)

> Lanzamiento con 4 entradas ya redactadas (B01–B04). Después, 2 entradas por mes. Las fechas de temporada están pensadas para que el artículo se indexe **antes** de que la gente busque.

| Mes | ID | Entrada | Motivo de la fecha | Estado |
|---|---|---|---|---|
| Nov 2026 | B01 | PPR deducible 2026 | Aportar antes del 31 de diciembre; aguinaldo | ✅ Redactada |
| Nov 2026 | B02 | ¿Cuánto seguro de vida necesito? | Búsqueda permanente; pilar de Vida | ✅ Redactada |
| Nov 2026 | B03 | Cómo cobrar un seguro de vida | Búsqueda permanente; muy citada por IA | ✅ Redactada |
| Nov 2026 | B04 | Seguro para Uber y DiDi en Chihuahua 2026 | Requisito local verificado (DiDi Chihuahua) | ✅ Redactada |
| Nov 2026 | B17 | Seguro MAPS en Chihuahua para Uber, DiDi e InDrive | Prioridad comercial: posicionar MAPS + Claudia | ✅ Redactada (falta dato de registro) |
| Dic 2026 | B05 | Aguinaldo: 3 formas de usarlo para proteger a tu familia | Pago de aguinaldo | Por redactar |
| Dic 2026 | B08 | Seguro de viaje para cruzar a EE. UU. desde Chihuahua | Vacaciones de invierno | Por redactar |
| Ene 2027 | B07 | Renovación del seguro de auto: qué revisar antes de pagar | Renovaciones de inicio de año | Por redactar |
| Ene 2027 | B06 | Seguro de vida temporal o con ahorro | Propósitos de año nuevo | Por redactar |
| Feb 2027 | B09 | Deducible y coaseguro en gastos médicos, sin rodeos | Búsqueda permanente | Por redactar |
| Feb 2027 | B10 | Cómo nombrar beneficiarios (y el error con menores de edad) | Búsqueda permanente | Por redactar |
| Mar 2027 | B12 | Cómo deducir gastos médicos y primas de GMM en la declaración anual | Declaración anual de abril | Por redactar |
| Mar 2027 | B11 | Seguro para taxi en Chihuahua: coberturas que no pueden faltar | Búsqueda permanente | Por redactar |
| Abr 2027 | B13 | Seguro de RC para eventos en Chihuahua: qué piden y con cuánto tiempo | Temporada de ferias y eventos | Por redactar |
| Abr 2027 | B14 | Qué hacer en un choque en Chihuahua: los primeros 30 minutos | Búsqueda permanente | Por redactar |
| May 2027 | B15 | Granizo y lluvias: qué cubre tu seguro de auto y de casa | Antes de la temporada de lluvias | Por redactar |
| May 2027 | B16 | Seguro para flotillas: cómo administrar los autos de tu empresa | Búsqueda permanente | Por redactar |

**Mantenimiento:**
- Cada **febrero**: actualizar B01, B05 y B12 con la UMA nueva (INEGI publica en enero y aplica desde el 1 de febrero).
- Cada **6 meses**: revisar B04 (los requisitos de plataformas cambian) y cualquier entrada con tráfico; actualizar `actualizado` en el frontmatter.

---

## 5. Palabras clave

> **Importante:** no tenemos volúmenes de búsqueda reales. Las palabras clave son hipótesis basadas en cómo pregunta la gente. Se validan a las 6–8 semanas con Search Console (consultas reales) y con el Planificador de Palabras Clave de Google Ads. Después de validar, se ajustan títulos y subtítulos.

**Cómo usarlas en cada entrada:**
- Palabra clave principal en: `title` (inicio, si se puede), H1, slug, primera frase de la respuesta corta, al menos un H2 y la meta description.
- Secundarias: en H2/H3 y de forma natural en el texto. Una vez cada una basta.
- Variantes en forma de pregunta: en las preguntas frecuentes (las IA las usan mucho).
- Nunca repetir la misma frase más de 3–4 veces en todo el artículo.

---

## 6. Especificación técnica del blog (para Claude Code)

### 6.1 Rutas
| Ruta | Contenido | Indexación |
|---|---|---|
| `/blog` | Índice de entradas, la más reciente primero; filtro por categoría | index |
| `/blog/[slug]` | Entrada | index |
| `/blog/categoria/[categoria]` | Entradas de una categoría | index solo si tiene ≥3 entradas; si no, `noindex,follow` |
| `/blog/rss.xml` | Feed RSS 2.0 con las últimas 20 entradas | — |
| `/autor/claudia-pacheco` | No crear: usar `/claudia-pacheco` como página de autora | — |

Sin páginas de etiquetas (tags) para evitar páginas delgadas.

### 6.2 Archivos de contenido
- Carpeta: `content/blog/*.md` (mover aquí los archivos de `blog/posts/`).
- Leer con `gray-matter` + `remark`/`rehype` (o MDX si ya se usa). Renderizado **estático** (SSG con `getStaticPaths`/`getStaticProps`).
- Validar el frontmatter con `zod`; el build falla si falta un campo obligatorio.
- **Solo se generan** las entradas con `status: publicado`. `borrador` y `revision` no existen en producción ni en el sitemap.

### 6.3 Esquema del frontmatter
```yaml
---
title: "…"                       # ≤ 60 caracteres (es el <title>); obligatorio
h1: "…"                          # puede ser más largo que title; obligatorio
slug: "…"                        # minúsculas, guiones, sin fecha; obligatorio
description: "…"                 # 120–155 caracteres; obligatorio
fecha: 2026-11-04                # publicación; obligatorio
actualizado: 2026-11-04          # última revisión; obligatorio
autor: claudia-pacheco           # obligatorio
categoria: vida | retiro | plataformas | auto | salud | empresas | viaje
cluster_url: "/seguros-de-vida"  # página de servicio destino; obligatorio
palabra_clave: "…"               # principal
palabras_secundarias: ["…", "…"]
whatsapp: "Hola, leí el artículo de … y quiero asesoría."
respuesta_corta: "…"             # 40–80 palabras; obligatorio
faq:                             # 4–8; se renderizan visibles y en JSON-LD
  - pregunta: "…"
    respuesta: "…"
fuentes:                         # mínimo 2
  - titulo: "…"
    url: "https://…"
    consultado: 2026-11-03
relacionados: ["slug-1", "slug-2"]
notaClaudiaTitulo: "…"           # título de la nota de Claudia (opcional)
notaClaudia: |                   # experiencia propia, escrita por Claudia; párrafos separados por línea en blanco; si está vacío no se muestra
  …
imagen: "/blog/og/slug.jpg"      # 1200×630
status: borrador | revision | publicado
notasRevision: "…"               # interno, NUNCA se renderiza
---
```

### 6.4 Plantilla de página de entrada (orden de bloques)
1. Migas de pan: Inicio › Blog › [Categoría] › [Título].
2. `<h1>` + fecha de publicación + "Actualizado el …" + tiempo de lectura.
3. **Caja "Respuesta corta"** (`respuesta_corta`), visualmente destacada.
4. Índice de contenidos (anclas a los H2) si el texto tiene ≥4 H2.
5. Cuerpo (Markdown).
6. **"Nota de Claudia"** (solo si `notaClaudia` tiene texto): encabezado "En palabras de Claudia" + `notaClaudiaTitulo` como subtítulo (si existe), los párrafos tal cual y la firma automática "— Claudia Pacheco, PorTi Seguros" con su foto. Ubicarla después del cuerpo y antes de las preguntas frecuentes. No usar etiquetas de encabezado que rompan la jerarquía (el título de la nota va como H2 o como texto destacado, nunca H1).
7. **Preguntas frecuentes** (de `faq`), visibles.
8. **CTA**: "¿Quieres revisarlo con nosotros?" + botón WhatsApp con el mensaje de `whatsapp` + enlace a `cluster_url`.
9. **Fuentes consultadas**: lista con título, enlace (`rel="nofollow noopener"` y `target="_blank"`) y fecha de consulta.
10. **Caja de autora**: foto, "Claudia Pacheco, agente de seguros desde 2007", cédula CNSF (desde `config/business.ts`; si no existe, no mostrar esa línea), enlace a `/claudia-pacheco`.
11. Aviso legal: "Este artículo es informativo. Las coberturas, sumas aseguradas, deducibles y primas dependen de la aseguradora y de la póliza contratada. En temas fiscales, confirma tu caso con tu contador."
12. 2–3 entradas relacionadas.

### 6.5 Metadatos y datos estructurados
- `<title>`: valor de `title` (no agregar sufijo si ya rebasa 60 caracteres; si cabe, " | PorTi Seguros").
- Canonical absoluto, `og:type=article`, `article:published_time`, `article:modified_time`, `og:image` por entrada.
- JSON-LD por entrada (`@graph`):
  - `BlogPosting`: `headline` (h1), `description`, `datePublished`, `dateModified`, `inLanguage: es-MX`, `author: {"@id": ".../claudia-pacheco#persona"}`, `publisher: {"@id": ".../#agencia"}`, `mainEntityOfPage`, `image`, `about` (tema), `citation` (URLs de `fuentes`).
  - `FAQPage` con las preguntas de `faq` (solo si están visibles).
  - `BreadcrumbList`.
- `/blog`: `Blog` + `ItemList` de entradas.

### 6.6 Integración con el resto del sitio
- Menú principal y footer: agregar "Blog".
- Cada página de servicio muestra "Artículos relacionados" con las entradas cuyo `cluster_url` coincide (máximo 3, solo `publicado`).
- `sitemap.xml`: agregar `/blog`, cada entrada (`lastmod` = `actualizado`) y las categorías indexables.
- `llms.txt`: agregar sección "## Blog" con título, URL y respuesta corta de cada entrada.
- IndexNow (T18 de la ficha técnica): notificar cada entrada nueva o actualizada al desplegar.
- GA4: evento `click_whatsapp` con parámetros `pagina=blog` y `articulo=slug`.

### 6.7 Verificación (extender `check-seo`)
Para cada entrada publicada:
- `title` ≤ 60, `description` 120–155, un solo H1, canonical correcto.
- `respuesta_corta` entre 40 y 80 palabras; ≥ 2 fuentes; 4–8 FAQ.
- Palabra clave principal presente en title, H1, slug y respuesta corta.
- Ningún texto renderizado contiene `[PENDIENTE`, `[DATO`, `TODO`, `XXX`, `notasRevision`.
- Enlace a `cluster_url` presente en el cuerpo.
- JSON-LD válido.
- Fecha `actualizado` ≥ `fecha`.

---

## 7. Plantilla para redactar nuevas entradas

```markdown
---
(frontmatter de la sección 6.3)
---

[Párrafo de entrada: 2–3 frases que ubican al lector y mencionan Chihuahua si aplica.]

## [H2 con la palabra clave o una pregunta real]
[Explicación clara. Si hay cifra: cifra + año + fuente.]

## [H2 …]
### [H3 si hace falta]

## [Tabla o lista práctica: requisitos, pasos, comparación]

## Errores comunes / Qué revisar
[Lista de 4–6 puntos.]

## Cómo te ayudamos en PorTi Seguros
[Metodología de 4 pasos adaptada al tema + oficina en Col. San Felipe + WhatsApp. Sin promesas.]
```

**Lista de control antes de pasar a `revision`:**
- [ ] Respuesta corta responde exactamente el título.
- [ ] Cada cifra tiene fuente y fecha; ejemplos hipotéticos etiquetados.
- [ ] Sin precios de mercado ni "el mejor".
- [ ] Enlace a la página de servicio y a 1 entrada relacionada.
- [ ] `notasRevision` lista lo que Claudia/contador deben confirmar.

**Lista de difusión al publicar:**
- [ ] Publicación en el Perfil de Negocio de Google (resumen + enlace).
- [ ] Facebook e Instagram: 1 publicación con la respuesta corta.
- [ ] Estado de WhatsApp y lista de difusión de clientes del ramo.
- [ ] Video corto (30–60 s) de Claudia respondiendo la pregunta del título (YouTube Shorts / Reels), con enlace en la descripción.

---

## 8. Medición

| KPI | Fuente | Frecuencia |
|---|---|---|
| Impresiones, clics y posición por entrada y consulta | Search Console | Mensual |
| Consultas reales que traen tráfico (para ajustar títulos) | Search Console | Mensual |
| Visitas desde chatgpt.com, perplexity.ai, gemini.google.com, copilot | GA4 (fuente/medio) | Mensual |
| Clics a WhatsApp por artículo | GA4 `click_whatsapp` | Mensual |
| Conversaciones de WhatsApp con mensaje de blog | WhatsApp Business (etiqueta "Blog") | Mensual |
| Menciones en asistentes de IA (8 preguntas de prueba + 1 por entrada nueva) | Prueba manual | Mensual |
| Entradas publicadas vs. calendario | Este plan | Mensual |

---

## 9. Fichas de las entradas

> Formato: **ID · Título (`title`) · H1 · slug · palabra clave principal · secundarias · intención · página de servicio · mensaje de WhatsApp · estructura · preguntas frecuentes · fuentes a usar · datos que debe aportar Claudia.**

---

### B01 · ✅ Redactada — `blog/posts/ppr-deducible-2026.md`
- **Title:** PPR deducible 2026: cuánto puedes deducir y cuándo
- **H1:** PPR deducible en 2026: cuánto puedes deducir y por qué aportar antes del 31 de diciembre
- **Slug:** `ppr-deducible-2026`
- **Principal:** ppr deducible 2026
- **Secundarias:** plan personal de retiro Chihuahua, cuánto puedo deducir de PPR, deducir PPR en la declaración anual, artículo 151 fracción V, tope de deducción PPR
- **Intención:** informativa con decisión cercana (aportar antes de fin de año).
- **Servicio:** `/plan-personal-de-retiro`
- **Fuentes:** INEGI (UMA 2026), LISR arts. 151-V, 142-XVIII y 145; SAT; medios fiscales especializados como apoyo.
- **Claudia aporta:** ✅ `notaClaudia` entregada (3 nov 2026); falta confirmación de su contador sobre el texto fiscal.

### B02 · ✅ Redactada — `blog/posts/cuanto-seguro-de-vida-necesito.md`
- **Title:** ¿Cuánto seguro de vida necesito? Cálculo paso a paso
- **H1:** ¿Cuánto seguro de vida necesito? Cómo calcular tu suma asegurada paso a paso
- **Slug:** `cuanto-seguro-de-vida-necesito`
- **Principal:** cuánto seguro de vida necesito
- **Secundarias:** cómo calcular la suma asegurada, suma asegurada seguro de vida, seguro de vida Chihuahua, seguro de vida para padres de familia
- **Intención:** informativa / evaluación.
- **Servicio:** `/seguros-de-vida`
- **Fuentes:** INEGI (inflación anual dic. 2025, del boletín UMA 2026); advertencia legal sobre menores beneficiarios en formatos de aseguradoras; CONDUSEF.
- **Claudia aporta:** ✅ `notaClaudia` entregada (3 nov 2026).

### B03 · ✅ Redactada — `blog/posts/como-cobrar-un-seguro-de-vida.md`
- **Title:** Cómo cobrar un seguro de vida: pasos, papeles y plazos
- **H1:** Cómo cobrar un seguro de vida en México: pasos, documentos y plazos para los beneficiarios
- **Slug:** `como-cobrar-un-seguro-de-vida`
- **Principal:** cómo cobrar un seguro de vida
- **Secundarias:** cómo saber si soy beneficiario de un seguro de vida, SIAB-Vida CONDUSEF, documentos para cobrar un seguro de vida, plazo para cobrar seguro de vida
- **Intención:** informativa urgente (momento difícil): tono empático.
- **Servicio:** `/seguros-de-vida`
- **Fuentes:** CONDUSEF (SIAB-Vida), Ley sobre el Contrato de Seguro arts. 66, 71 y 81; LISR art. 93-XXI.
- **Claudia aporta:** ✅ `notaClaudia` entregada (3 nov 2026).

### B04 · ✅ Redactada — `blog/posts/seguro-uber-didi-chihuahua.md`
- **Title:** Seguro para Uber y DiDi en Chihuahua 2026: qué piden
- **H1:** Seguro para Uber y DiDi en Chihuahua 2026: qué póliza piden y qué debe cubrir
- **Slug:** `seguro-uber-didi-chihuahua`
- **Principal:** seguro para Uber Chihuahua / seguro DiDi Chihuahua
- **Secundarias:** requisitos seguro DiDi Chihuahua, póliza ERT, seguro Uber AXA, seguro multiplataforma, seguro para InDrive
- **Intención:** transaccional-informativa (va a contratar).
- **Servicio:** `/seguro-uber-didi`
- **Fuentes:** DiDi México – requisitos Chihuahua (consultado 3 nov 2026); Uber México – blog de seguros (18 ago 2026).
- **Claudia aporta:** ✅ `notaClaudia` entregada (3 nov 2026); falta confirmar qué productos de plataforma maneja (no se publica la lista si no lo autoriza).

### B05 · Aguinaldo
- **Title:** Aguinaldo: 3 formas de usarlo para proteger a tu familia
- **H1:** Tu aguinaldo 2026: tres formas de usarlo para proteger a tu familia
- **Slug:** `aguinaldo-proteger-familia`
- **Principal:** en qué invertir el aguinaldo · **Secundarias:** aguinaldo PPR, aguinaldo seguro de vida, fondo de emergencia, aguinaldo Chihuahua
- **Intención:** informativa estacional.
- **Servicio:** `/plan-personal-de-retiro` (secundario `/seguros-de-vida`)
- **Estructura:** Primero, el colchón de emergencia · Segundo, revisar o contratar protección (vida/GMM) · Tercero, el PPR deducible (enlace a B01) · Qué no hacer con el aguinaldo · Cómo te ayudamos.
- **FAQ:** ¿Cuándo se paga el aguinaldo por ley? · ¿El aguinaldo paga impuestos? · ¿Conviene meter todo al PPR? · ¿Puedo pagar mi seguro anual con el aguinaldo?
- **Fuentes:** Ley Federal del Trabajo art. 87 (fecha y mínimo de aguinaldo); LISR art. 93-XIV (exención de 30 UMA); INEGI UMA 2026.
- **Claudia aporta:** `notaClaudia`.

### B06 · Temporal vs. con ahorro
- **Title:** Seguro de vida temporal o con ahorro: ¿cuál te conviene?
- **H1:** Seguro de vida temporal o con ahorro: diferencias y cuál conviene en cada etapa
- **Slug:** `seguro-de-vida-temporal-o-con-ahorro`
- **Principal:** seguro de vida temporal o con ahorro · **Secundarias:** seguro dotal, seguro de vida con ahorro Chihuahua, seguro vitalicio, qué seguro de vida conviene
- **Servicio:** `/seguros-de-vida`
- **Estructura:** Qué es cada uno · Tabla comparativa (objetivo, duración, qué pasa al final, costo relativo, ideal para) · Por etapa de vida (joven con hijos, crédito hipotecario, 45+, dueño de negocio) · ¿Y el seguro del trabajo? · Errores comunes · Cómo te ayudamos.
- **FAQ:** ¿Recupero mi dinero en un temporal? · ¿Qué pasa si cancelo uno con ahorro? · ¿Se puede cambiar de temporal a otro plan? · ¿Conviene en UDIS, pesos o dólares?
- **Fuentes:** CONDUSEF (tipos de seguro de vida); LISR art. 93-XXI (tratamiento de seguros de supervivencia).

### B07 · Renovación del seguro de auto
- **Title:** Renovación del seguro de auto: qué revisar antes de pagar
- **H1:** Renovación del seguro de auto en Chihuahua: 8 cosas que revisar antes de pagar
- **Slug:** `renovacion-seguro-de-auto`
- **Principal:** renovar seguro de auto · **Secundarias:** por qué subió mi seguro de auto, renovación automática seguro, seguro de auto Chihuahua, deducible
- **Servicio:** `/seguro-de-auto`
- **Estructura:** Por qué cambia la prima · Suma asegurada (valor comercial vs. factura) · Deducibles · Coberturas que cambiaron · Uso declarado (particular/plataforma) · Conductores habituales · Renovación automática y cargos a tarjeta · Cuándo conviene comparar.
- **FAQ:** ¿Mi aseguradora puede renovar sin avisarme? · ¿Puedo cancelar si ya se renovó? · ¿Pierdo algo si cambio de aseguradora? · ¿Qué pasa si se vence mi póliza?
- **Fuentes:** Ley sobre el Contrato de Seguro (renovación tácita, art. 17); CONDUSEF (comparativo de seguros de auto).

### B08 · Viaje a EE. UU.
- **Title:** Seguro de viaje para cruzar a EE. UU. desde Chihuahua
- **H1:** Seguro de viaje para ir a Estados Unidos desde Chihuahua: qué debe cubrir
- **Slug:** `seguro-de-viaje-estados-unidos-desde-chihuahua`
- **Principal:** seguro de viaje Estados Unidos · **Secundarias:** seguro de viaje Chihuahua, seguro médico para viajar a EE. UU., seguro de auto para cruzar la frontera
- **Servicio:** `/seguro-de-viaje` (secundario `/seguro-de-auto`)
- **Estructura:** Por qué la atención médica en EE. UU. es el riesgo principal · Qué cubre un seguro de viaje · Si cruzas en tu auto: tu póliza mexicana y la cobertura en EE. UU. · Tarjetas de crédito con seguro de viaje: qué revisar · Antes de salir (checklist).
- **FAQ:** ¿Mi seguro de gastos médicos me cubre en EE. UU.? · ¿Mi seguro de auto mexicano sirve en El Paso? · ¿Cuánto tiempo antes contratar? · ¿Cubre COVID/enfermedades preexistentes?
- **Fuentes:** CONDUSEF (seguros de viaje); condiciones de aseguradoras (genéricas); información oficial sobre requisitos de responsabilidad civil en Texas/Nuevo México (verificar en fuente oficial del estado).
- **Claudia aporta:** si ofrece pólizas de auto con extensión a EE. UU.

### B09 · Deducible y coaseguro
- **Title:** Deducible y coaseguro en gastos médicos, explicados
- **H1:** Deducible y coaseguro en gastos médicos mayores: qué son y cómo afectan lo que pagas
- **Slug:** `deducible-y-coaseguro-gastos-medicos`
- **Principal:** deducible y coaseguro · **Secundarias:** qué es el coaseguro, tope de coaseguro, gastos médicos mayores Chihuahua, nivel hospitalario
- **Servicio:** `/gastos-medicos-mayores`
- **Estructura:** Deducible · Coaseguro · Tope de coaseguro · Ejemplo hipotético con números redondos · Nivel hospitalario y red · Periodos de espera y preexistencias · Cómo elegir el balance prima/deducible.
- **FAQ:** ¿El deducible se paga cada vez? · ¿Qué es la eliminación de deducible por accidente? · ¿Hay hospitales de la red en Chihuahua? · ¿Qué son los periodos de espera?
- **Fuentes:** CONDUSEF (glosario y guía de GMM).
- **Claudia aporta:** hospitales de Chihuahua con los que suele trabajar la red (solo si lo autoriza; si no, no nombrar).

### B10 · Beneficiarios
- **Title:** Cómo nombrar beneficiarios en tu seguro de vida
- **H1:** Cómo nombrar beneficiarios en tu seguro de vida (y el error más común con menores de edad)
- **Slug:** `como-nombrar-beneficiarios-seguro-de-vida`
- **Principal:** beneficiarios seguro de vida · **Secundarias:** menores de edad beneficiarios, cambiar beneficiario, beneficiario irrevocable, qué pasa si no hay beneficiarios
- **Servicio:** `/seguros-de-vida`
- **Estructura:** Quién puede ser beneficiario · Porcentajes · El error con menores (advertencia legal de los formatos) · Opciones: tutor, fideicomiso, testamento · Beneficiario irrevocable · Qué pasa si no designas · Cuándo actualizar.
- **FAQ:** ¿Puedo nombrar a mi pareja si no estamos casados? · ¿Cómo cambio a mis beneficiarios? · ¿El testamento cambia la designación del seguro? · ¿Qué pasa si mi beneficiario fallece antes que yo?
- **Fuentes:** Ley sobre el Contrato de Seguro (arts. sobre designación de beneficiarios); CONDUSEF; advertencia de formatos de consentimiento de aseguradoras.

### B11 · Taxi
- **Title:** Seguro para taxi en Chihuahua: coberturas clave
- **H1:** Seguro para taxi en Chihuahua: coberturas que no pueden faltar
- **Slug:** `seguro-para-taxi-chihuahua`
- **Principal:** seguro para taxi Chihuahua · **Secundarias:** seguro de servicio público, seguro taxi de sitio, responsabilidad civil pasajeros, requisitos seguro taxi
- **Servicio:** `/seguro-para-taxi`
- **Estructura:** Qué es un seguro de servicio público · RC a pasajeros y a terceros · Daños, robo, gastos médicos ocupantes, asistencia legal · Requisitos de la autoridad de transporte del estado (verificar en fuente oficial) · Taxi que también usa plataforma · Qué hacer en un siniestro con pasajero.
- **FAQ:** ¿Mi seguro de auto particular sirve para taxi? · ¿Qué pide la Subsecretaría de Transporte? · ¿Cubre al chofer si no soy el dueño? · ¿Puedo pagar en mensualidades?
- **Fuentes:** Ley de Transporte del Estado de Chihuahua y su reglamento (verificar artículo vigente sobre seguro obligatorio); Gobierno del Estado – Subsecretaría de Transporte; Uber México – coberturas para Uber Taxi (si aplica).

### B12 · Deducir gastos médicos
- **Title:** Deducir gastos médicos y primas de GMM en tu declaración
- **H1:** Cómo deducir gastos médicos y primas de seguro de gastos médicos en tu declaración anual
- **Slug:** `deducir-gastos-medicos-declaracion-anual`
- **Principal:** deducir gastos médicos declaración anual · **Secundarias:** deducir seguro de gastos médicos, deducciones personales 2026, tope de deducciones personales
- **Servicio:** `/gastos-medicos-mayores`
- **Estructura:** Qué gastos médicos son deducibles · Primas de GMM (art. 151-VI) · Requisitos de pago (no efectivo) y CFDI · Tope global de deducciones (5 UMA o 15%) · El PPR va aparte (enlace a B01) · Calendario de la declaración.
- **FAQ:** ¿Puedo deducir el seguro de mis papás? · ¿Si me lo paga la empresa? · ¿Pago en efectivo es deducible? · ¿Hasta cuándo presento la declaración?
- **Fuentes:** LISR art. 151 fracc. I y VI; SAT (deducciones personales); INEGI UMA.

### B13 · RC para eventos
- **Title:** Seguro de RC para eventos en Chihuahua: qué piden
- **H1:** Seguro de responsabilidad civil para eventos en Chihuahua: qué piden y con cuánto tiempo tramitarlo
- **Slug:** `seguro-responsabilidad-civil-eventos-chihuahua`
- **Principal:** seguro de responsabilidad civil para eventos · **Secundarias:** seguro para conciertos, seguro para palenque, póliza RC evento masivo, protección civil Chihuahua seguro
- **Servicio:** `/seguro-eventos-masivos`
- **Estructura:** Qué cubre la RC de un evento · Qué suele pedir Protección Civil / el municipio (verificar en fuente oficial) · Información para cotizar (fecha, aforo, sede, actividades, montaje) · Con cuánta anticipación · Cancelación de evento: qué no cubre la RC · Errores comunes.
- **FAQ:** ¿Es obligatorio el seguro para un evento en Chihuahua? · ¿Cubre a los asistentes? · ¿Cubre si se cancela el evento? · ¿El recinto ya tiene seguro?
- **Fuentes:** Ley de Protección Civil del Estado de Chihuahua (verificar artículo vigente); reglamento municipal de espectáculos (verificar); CONDUSEF (RC).
- **Claudia aporta:** anticipación recomendada y tipos de eventos que ha asegurado (sin nombres de clientes salvo permiso).

### B14 · Choque: primeros 30 minutos
- **Title:** Qué hacer en un choque en Chihuahua: primeros 30 minutos
- **H1:** Qué hacer si chocas en Chihuahua: guía de los primeros 30 minutos
- **Slug:** `que-hacer-en-un-choque-chihuahua`
- **Principal:** qué hacer en un choque · **Secundarias:** reportar siniestro seguro de auto, ajustador, choque sin seguro Chihuahua, pase médico
- **Servicio:** `/seguro-de-auto`
- **Estructura:** Seguridad primero (911) · Reporta a tu aseguradora antes de mover el auto (salvo riesgo) · No firmes ni negocies sin ajustador · Fotos y datos · Si hay lesionados · Si el otro no tiene seguro · Después: taller, deducible, pase médico.
- **FAQ:** ¿Puedo mover mi auto antes de que llegue el ajustador? · ¿Qué hago si el otro conductor se va? · ¿Pago deducible si no fue mi culpa? · ¿Cuánto tarda el ajustador?
- **Fuentes:** Reglamento de tránsito municipal de Chihuahua (verificar); CONDUSEF (qué hacer en un siniestro de auto).

### B15 · Granizo y lluvias
- **Title:** Granizo y lluvias: qué cubre tu seguro de auto y casa
- **H1:** Granizo e inundación: qué cubre tu seguro de auto y de casa en Chihuahua
- **Slug:** `granizo-inundacion-que-cubre-tu-seguro`
- **Principal:** seguro de auto cubre granizo · **Secundarias:** seguro de casa inundación, fenómenos hidrometeorológicos, deducible granizo
- **Servicio:** `/seguro-de-auto` y `/seguro-de-danos`
- **Estructura:** Cobertura amplia vs. limitada frente a granizo · Inundación del auto (no encender el motor) · Seguro de casa: fenómenos hidrometeorológicos · Deducibles especiales · Cómo documentar el daño · Plazos de reporte.
- **FAQ:** ¿La cobertura limitada cubre granizo? · ¿Si se inunda mi auto estacionado? · ¿El seguro de casa cubre filtraciones? · ¿Debo reportar aunque el daño sea pequeño?
- **Fuentes:** CONDUSEF (coberturas de auto y de daños); SMN/CONAGUA para contexto de temporada (verificar dato antes de usar).

### B16 · Flotillas
- **Title:** Seguro para flotillas: cómo administrar los autos de tu empresa
- **H1:** Seguro para flotillas en Chihuahua: cómo administrar los vehículos de tu empresa
- **Slug:** `seguro-para-flotillas-chihuahua`
- **Principal:** seguro para flotillas · **Secundarias:** seguro flotilla empresa, administración de flotillas, seguro vehículos de trabajo Chihuahua
- **Servicio:** `/seguro-flotillas`
- **Estructura:** Cuándo conviene una póliza de flotilla · Qué se puede negociar (coberturas, deducibles, conductores) · Altas y bajas de unidades · Reportes de siniestralidad y prevención · Conductores y uso declarado · Qué preparar para cotizar.
- **FAQ:** ¿Desde cuántas unidades es flotilla? · ¿Puedo incluir autos de diferentes años? · ¿Qué pasa si un empleado choca? · ¿Se puede pagar mensual?
- **Fuentes:** CONDUSEF; condiciones generales tipo de flotilla.
- **Claudia aporta:** número mínimo de unidades con las aseguradoras que maneja.

---

## 10. Prompt sugerido para Claude Code

```
Lee blog/PLAN_BLOG_PORTISEGUROS.md y SPEC_SEO_PORTISEGUROS.md.
1) Implementa la sección 6 (rutas, frontmatter con zod, plantilla, JSON-LD, sitemap, RSS,
   llms.txt, integración con páginas de servicio, GA4 y check-seo).
2) Mueve blog/posts/*.md a content/blog/. Déjalas con status: revision (no se publican).
3) Muéstrame /blog y una entrada en la vista previa con status forzado a publicado
   SOLO en desarrollo, para revisar el diseño.
4) No modifiques el texto de las entradas; si detectas un problema, anótalo en el reporte.
```

Para nuevas entradas:
```
Redacta la entrada BXX siguiendo su ficha en la sección 9 y las reglas de la sección 2.
Investiga y verifica cada dato en las fuentes indicadas; si no puedes verificar un dato,
no lo uses y anótalo en notasRevision. Deja status: revision y notaClaudia vacío.
```

---

### B17 · ✅ Redactada — `blog/posts/seguro-multiplataforma-maps-seguros-chihuahua.md`
- **Title:** Seguro MAPS en Chihuahua para Uber, DiDi e InDrive
- **H1:** Seguro multiplataforma MAPS Seguros en Chihuahua para conductores de Uber, DiDi e InDrive
- **Slug:** `seguro-multiplataforma-maps-seguros-chihuahua`
- **Principal:** MAPS Seguros Chihuahua
- **Secundarias:** seguro multiplataforma Chihuahua, seguro para Uber económico Chihuahua, seguro para DiDi/InDrive Chihuahua, agente MAPS Seguros Chihuahua, Claudia Pacheco MAPS Seguros
- **Diferencia con B04:** B04 responde "qué piden las apps"; B17 responde "con quién y con qué aseguradora contratarlo". Se enlazan entre sí y ambos apuntan a `/seguro-uber-didi` (evita competir por la misma búsqueda).
- **Servicio:** `/seguro-uber-didi`
- **Fuentes:** sitio y condiciones generales de MAPS (consultados 3 nov 2026), DiDi Chihuahua, INEGI UMA 2026.
- **Bloqueante para publicar:** nombre de la institución autorizada y número de registro CNSF/CONDUSEF del producto (ver `notasRevision`). Logo oficial de MAPS en `/public` (no enlazar imágenes de Google).
- **Reglas específicas:** no usar "el más económico", "garantizado" ni "aprobación oficial" sin el dato de registro. Las opiniones sobre MAPS van atribuidas a Claudia.
- **Página de servicio:** cuando se confirme el registro, agregar en `/seguro-uber-didi` un bloque "Trabajamos con MAPS Seguros" con logo oficial y enlace a B17.
