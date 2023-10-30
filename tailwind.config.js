/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {

      'xl': '1280px',

      'lg': '1024px',

      'md': '768px',

      'sm': '640px',

      'mv': '480px'

      // '2xl': '1536px',
    },
    extend: {
      fontFamily: {
        "space-mono":["Space Mono","monospace"],
        "work-sans":["Work Sans","sans-serif"]
      },
      inset: {
        '30%': '30%',
      }
    }
  },
  plugins: [],
};
