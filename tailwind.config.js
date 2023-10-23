/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "space-mono":["Space Mono","monospace"],
        "work-sans":["Work Sans","sans-serif"]
      },
      colors: {
        "body-color": "#2B2B2B",
      }
    },
  },
  plugins: [],
};
