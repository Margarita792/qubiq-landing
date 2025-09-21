/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
   theme: {
    container: { center: true, padding: "1rem", screens: { lg: "1120px" } },
    extend: {
      colors: {
        primary: "#111827",   
        accent:  "#22C55E",
        muted:   "#6B7280",
        bg:      "#0B0D10"
      },
      fontFamily: {
        sans: ["Inter","system-ui","-apple-system","Segoe UI","Roboto","sans-serif"]
      },
      boxShadow: {
        soft: "0 6px 24px rgba(0,0,0,.12)"
      }
    }
  },
  plugins: [],
};