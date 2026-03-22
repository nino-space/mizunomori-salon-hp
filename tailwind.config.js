/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'kominka': {
          'brown': '#8B4513',
          'beige': '#F5E6D3',
          'cream': '#FFF8DC',
          'dark': '#3E2723',
          'light': '#D7CCC8',
        }
      },
      fontFamily: {
        'serif': ['Noto Serif JP', 'serif'],
      },
    },
  },
  plugins: [],
}
