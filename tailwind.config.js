const { fontFamily } = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // Can be 'media' or 'class'
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-poppins)', ...fontFamily.sans], // Set Poppins as default sans-serif
      },
      colors: {
        background: '#1C2526',      // Dark grayish-blue
        'text-primary': '#FFFFFF',   // White
        'text-secondary': '#B0B0B0', // Light gray
        'accent-primary': '#A855F7', // Vibrant purple
        'accent-secondary': '#C084FC',// Lighter purple
        'accent-green': '#34C759',   // Green for success/validation
        'accent-deep-purple': '#6B21A8', // Deeper purple for contrast or specific elements
        
        // Removing all old theme colors to avoid conflicts
        // background: '#FFFFFF',
        // "text-primary": '#000000', 
        // "text-secondary": '#555555', 
        // accent: '#000000', 
        // 'accent-subtle': '#E5E5E5', 
        // primary: '#0077B6', 
        // secondary: '#F1F5F9', 
        // dark: '#03045E', 
        // light: '#F8FAFC' 
      },
    },
  },
  plugins: [],
}
