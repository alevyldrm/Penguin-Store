/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/*/.{js,ts,jsx,tsx}",
  ],
  theme: {

    container: {
      center: true,
      padding: "1rem",
    },

    extend: {
      colors: {
        primary: "#222831",     // navbar
        secondary: "#393E46",   // button / badge
        accent: "#948979",      // hover
        background: "#DFD0B8",  // page bg

      },
    },
  },
  plugins: [],
}