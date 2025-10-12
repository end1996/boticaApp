/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#4A934A",
        "background-light": "#F8F9FA",
        "background-dark": "#112117",
        "text-light": "#333333",
        "text-dark": "#F8F9FA",
        warning: "#FFC107",
        danger: "#DC3545",
        success: "#28A745",
      },
      fontFamily: {
        display: ["Inter", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "0.25rem",
        lg: "0.5rem",
        xl: "0.75rem",
        full: "9999px",
      },
    },
  },
  plugins: [],
};
