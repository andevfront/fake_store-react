/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs: "400px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    container: {
      screens: {
        sm: "100%",
        md: "100%",
        lg: "1024px",
        xl: "1280px",
        // "2xl": "1536px",
      },
    },
    extend: {
      colors: {
        primary: {
          50: "#fdf6fc",
          100: "#fbecfa",
          200: "#f7d7f4",
          300: "#f0b7e8",
          400: "#e58dd6",
          500: "#d560c2",
          600: "#b940a4",
          700: "#993284",
          800: "#802c6e",
          900: "#672858",
          950: "#430f37",
        },
      },
    },
  },
  plugins: [],
};
