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
        sans: ["var(--font-poppins)", ...fontFamily.sans],
      },
      colors: {
        background: '#1C2526',
        "text-primary": '#FFFFFF',
        "text-secondary": '#B0B0B0',
        "accent_primary": '#A855F7', // Purple
        "accent_secondary": '#C084FC', // Lighter Purple
        "accent_green": '#34C759',
        "accent_deep_purple": '#6B21A8',
        // Existing colors are removed as per the new palette
      },
    },
  },
  plugins: [],
}
