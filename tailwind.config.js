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
        "destructive": "#3C3D8E",
      },
      fontFamily: {
        "sans": ["Roboto", "sans-serif"],
        "serif": ["Merriweather", "serif"],
        "popins": ["Poppins", "sans-serif"],
        "inter": ["Inter", "sans-serif"],
      },
    }
  },
  plugins: [],
}

