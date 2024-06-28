/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "var(--black)",
        white: "var(--white)",
        gray2: "var(--gray-2)",
        gray1: "var(--gray-1)",
        gray3: "var(--gray-3)",
        "lime-green": "var(--lime-green)",
      },
      fontFamily: {
        inter: ["var(--default-font)", "sans-serif"],
        Thunder: ["Thunder", "sans-serif"],
      },
    },
  },
  plugins: [],
};
