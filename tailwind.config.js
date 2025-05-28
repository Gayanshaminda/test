/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xs': '480px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      '3xl': '1920px',
    },
    extend: {
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
        'product-sans': ['"Product Sans"', 'sans-serif'],
        'product-sans-black': ['"Product Sans Black"', 'sans-serif'],
      },      colors: {
        pink: {
          500: '#E84481',
          800: 'rgba(147, 42, 81, 0.78)',
          950: 'rgba(81, 19, 42, 0.6474)',
        },
        accent: {
          pink: '#FB74B0',
        }
      },
      gradientColorStops: {
        'pink-800-80': 'rgba(147, 42, 81, 0.78)',
        'pink-950-90': 'rgba(81, 19, 42, 0.6474)',
      },
      boxShadow: {
        'card': '0 0 10px rgba(232, 68, 129, 0.5)',
        'md': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      },      backgroundImage: {
        'gradient-button': 'linear-gradient(to right, rgba(147, 42, 81, 0.78), rgba(81, 19, 42, 0.6474), rgba(147, 42, 81, 0.78))',
        'gradient-card': 'linear-gradient(to right, rgba(147, 42, 81, 0.78), rgba(81, 19, 42, 0.6474), rgba(147, 42, 81, 0.78))',
      },
      animation: {
        'frame-marquee': 'frame-marquee 20s linear infinite',
      },
      keyframes: {
        'frame-marquee': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
    },
  },
  plugins: [],
}
