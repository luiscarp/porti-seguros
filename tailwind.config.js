/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      // Paleta tomada del logotipo de PorTi Seguros
      colors: {
        brand: {
          50: '#EEF6FC',
          100: '#D6EAF8',
          200: '#AED5F1',
          400: '#2E9BDB',
          500: '#0E86C9',
          600: '#0569AE',
          700: '#025596',
          800: '#0A4373',
          900: '#0B2E4F',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['var(--font-montserrat)', 'var(--font-inter)', 'ui-sans-serif', 'sans-serif'],
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
