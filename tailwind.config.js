/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],  theme: {   
    
    screens: {
      xs: "480px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
      "3xl": "1920px",
    },    extend: {
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
        'product-sans': ['"Product Sans"', 'sans-serif'],
        'product-sans-black': ['"Product Sans Black"', 'sans-serif'],
      },
      colors: {
        // Custom theme colors
        'theme-pink': {
          400: '#FB74B0',
          500: '#E84481',
          800: 'rgb(147 42 81)',
          950: 'rgb(81 19 42)',
        }
      },
      boxShadow: {
        'theme-glow': '0 0 10px rgba(232, 68, 129, 0.5)',
      },
      backgroundImage: {
        'button-gradient': 'linear-gradient(to right, rgba(147, 42, 81, 0.8), rgba(81, 19, 42, 0.9), rgba(147, 42, 81, 0.8))',
        'card-gradient': 'linear-gradient(to right, rgba(147, 42, 81, 0.78), rgba(81, 19, 42, 0.6474), rgba(147, 42, 81, 0.78))',
      }
    },
  },
  plugins: [],
}
