const { fontFamily } = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", ...fontFamily.sans],
      },
      colors: {
        background: '#0A0F1F', // Deep navy
        "text-primary": '#E5E5E5', // Off-white
        "text-secondary": '#A0A0A0', // Silver gray
        accent: '#00E5FF', // Neon cyan
        primary: '#0077B6', // Existing - keeping for now, might remove later
        secondary: '#F1F5F9', // Existing - keeping for now, might remove later
        dark: '#03045E', // Existing - keeping for now, might remove later
        light: '#F8FAFC' // Existing - keeping for now, might remove later
      },
    },
  },
  plugins: [],
}
