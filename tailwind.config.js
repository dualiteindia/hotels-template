/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: "#E6E6E6", // Soft neutral light-grey
          black: "#111111",
          green: "#007A4D",
          pink: "#F49EB8",
          yellow: "#FDB813",
          red: "#EE3B3B",
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // We will style this to look editorial
      },
      fontSize: {
        '10xl': '10rem',
        '11xl': '12rem',
        '12xl': '14rem',
      },
      letterSpacing: {
        tighter: '-0.04em',
        tightest: '-0.06em',
      },
      transitionTimingFunction: {
        'editorial': 'cubic-bezier(0.25, 0.1, 0.25, 1.0)', // Smooth, non-bouncy
      }
    },
  },
  plugins: [],
}
