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
        background: '#FFFFFF', // White
        "text-primary": '#000000', // Black
        "text-secondary": '#555555', // Darker Gray for secondary text on light background
        accent: '#000000', // Black (for primary interactive elements)
        'accent-subtle': '#E5E5E5', // Light Gray (for subtle borders, backgrounds)
        
        // Old theme colors - commented out
        // accent: '#00E5FF', // Neon cyan
        // 'accent-purple': '#9f7aea', // Vibrant Purple
        // 'accent-teal': '#38b2ac',   // Deep Teal
        
        // Existing generic colors - can be kept or removed if not used by components directly
        primary: '#0077B6', 
        secondary: '#F1F5F9', 
        dark: '#03045E', 
        light: '#F8FAFC' 
      },
    },
  },
  plugins: [],
}
