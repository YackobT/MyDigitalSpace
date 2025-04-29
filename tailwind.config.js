/** @type {import('tailwindcss').Config */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0077B6',
        secondary: '#F9F9F9',
        tertiary: '#023E8A',
        dark: '#03045E',
        light: '#CAF0F8',
      },
    },
  },
  plugins: [],
}
