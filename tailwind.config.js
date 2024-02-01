/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: "#696CFF",
        primary: "#696CFF",
        secondary: "#E7E7FF",
        lightGray: "#BCC3CA",
        darkGray: "#A2ACB5",
        hoverBtnColor: "#FAFBFB",
        white: "#FFFFFF",
        layoutColor: "#F5F5F9",
        layoutColorDark: "#232333",
        ComponentColorDark: "#2B2C3E"
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
