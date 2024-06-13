/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#273321",
        "secondary": "#629549",
        "footer": "#D6FFC0",
        "destructive": "#FF0000",
      },
      fontFamily: {
        "sans": ["Roboto", "sans-serif"],
        "serif": ["Merriweather", "serif"],
        "popins": ["Poppins", "sans-serif"],
        "inter": ["Inter", "sans-serif"],
      },
      backgroundImage:{
        heroCircle:"linear-gradient(194deg, rgba(182, 218, 164, 0.97) -30.62%, rgba(139, 167, 126, 0.97) 29.68%, rgba(118, 142, 106, 0.97) 59.82%, rgba(108, 129, 97, 0.97) 74.9%)",
      },
    }
  },
  plugins: [],
}

