const { readdirSync, readFileSync } = require('node:fs')
const { join } = require('node:path')

// ¿Hay entradas del blog visibles? (status: publicado; en next dev y previews de Vercel también las de revisión).
// Controla el enlace "Blog" del menú y del footer.
const blogVisible = readdirSync(join(__dirname, 'content/blog'))
  .filter((archivo) => archivo.endsWith('.md'))
  .some((archivo) => process.env.NODE_ENV === 'development' || process.env.VERCEL_ENV === 'preview' || /^status:\s*publicado\s*$/m.test(readFileSync(join(__dirname, 'content/blog', archivo), 'utf8')))

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: false,
  // [PENDIENTE] y el borrador del aviso visibles solo con next dev. Ocultos en todo build (producción y previews),
  // para que promover un preview a producción nunca publique datos pendientes.
  env: {
    NEXT_PUBLIC_MOSTRAR_PENDIENTES: process.env.NODE_ENV === 'development' ? '1' : '',
    NEXT_PUBLIC_BLOG_VISIBLE: blogVisible ? '1' : '',
  },
  // Encabezados de seguridad en todas las rutas
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=(), payment=(), usb=()' },
        ],
      },
    ]
  },
  // URLs anteriores → nuevas (301). El host www y https ya los fuerza Vercel.
  async redirects() {
    return [
      { source: '/index', destination: '/', statusCode: 301 },
      { source: '/productos', destination: '/seguros', statusCode: 301 },
      { source: '/segurosvida', destination: '/seguros-de-vida', statusCode: 301 },
      { source: '/seguroauto', destination: '/seguro-de-auto', statusCode: 301 },
      { source: '/serviciopublico', destination: '/seguro-para-taxi', statusCode: 301 },
      { source: '/gastosmedicos', destination: '/gastos-medicos-mayores', statusCode: 301 },
      { source: '/planesretiro', destination: '/plan-personal-de-retiro', statusCode: 301 },
      { source: '/danos', destination: '/seguro-de-danos', statusCode: 301 },
      { source: '/testimonios', destination: '/opiniones', statusCode: 301 },
      { source: '/cotiza', destination: '/cotizar', statusCode: 301 },
      { source: '/privacidad', destination: '/aviso-de-privacidad', statusCode: 301 },
    ]
  },
}

module.exports = nextConfig
