/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: false,
  images: {
    domains: ['res.cloudinary.com'],
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
