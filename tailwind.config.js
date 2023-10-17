/** @type {import('tailwindcss').Config} */
import Daisyui from "daisyui"
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      Poppins: ["Poppins", "sans-serif"],
    },
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [Daisyui],
  daisyui: {
    themes: [
      {
        main: {
          "primary": "#333333",
          "secondary": "#d9cdbf",
          "base-100": "#757575",
          "base-content": "#FAFAFA",
          // titleColor: "#333333",
          // titleDarkColor: "#d9cdbf",
          // textColor: "#757575",
          // bodyColor: "#FAFAFA",
          "info": "#3abff8",
          "success": "#36d399",
          "warning": "#fbbd23",
          "error": "#f87272",
        },
      },
    ],
  }
}