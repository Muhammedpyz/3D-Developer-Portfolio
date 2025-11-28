/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#001219", // Dark Teal/Black
        secondary: "#00d4ff", // Bright Cyan
        tertiary: "#0a2530", // Darker Teal
        "black-100": "#001821",
        "black-200": "#000f14",
        "white-100": "#e0f7fa",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #002b36",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
      },
    },
  },
  plugins: [],
};
