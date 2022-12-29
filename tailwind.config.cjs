/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        Teal: "#20c997",
        accent: "#1cc3b2",
        dark: "#2a303b",
        dark2: "#343a40",
      },
      maxWidth: {
        desktop: "69.375rem",
      },
      backgroundImage: {
        hero: "url('/src/assets/images/bg-hero.jpg')",
      },
      screens: {
        "breakpoint-sm": "36rem",
        "breakpoint-md": "48rem",
        "breakpoint-lg": "62rem",
        "breakpoint-xl": "75rem",
      },
    },
  },
  plugins: [],
};
