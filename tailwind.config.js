/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "space-mono": ["Space Mono", "monospace"],
        "work-sans": ["Work Sans", "sans-serif"],
      },
    },
    screens: {
      xl: { max: "1280px" },
      lg: { max: "1024px" },
      md: { max: "830px" },
      sm: { max: "640px" },
      xs: { max: "480px" },
    },
  },
  plugins: [],
};
