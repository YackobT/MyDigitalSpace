/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // 👈 Enable class-based dark mode
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0077B6',
        secondary: '#F9F9F9',
        tertiary: '#023E8A',
        dark: '#03045E',
        light: '#F8FAFC',
      },
    },
  },
  plugins: [],
}
