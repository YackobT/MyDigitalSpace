
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0077B6',
        secondary: '#F9F9F9',
        tertiary: '#023E8A',
        dark: '#03045E',
        light: '#F8FAFC' // updated
      },
      fontFamily: {
        sans: ['ui-sans-serif', 'system-ui']
      }
    },
  },
  plugins: [],
}
