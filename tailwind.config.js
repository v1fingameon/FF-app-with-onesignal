/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./containers/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary1: "#2F9CD9",
        primary2: "#2F9CD9 ",
        primary3: "#1d68a7 ",
        primary4: "#545454",
        primary5:"#DCEEF9"
      },
      screens: {
        xs: "400px",
        ls: "550px",
        sm: "640px",
        md: "768px",
        lg: "1000px",
        xl: "1200px",
        "2xl": "1536px",
        "3xl": "1636px",
      },
      boxShadow: {
        custom: "2px 2px 14px rgb(0 0 0 / 40%)",
      },
      fontFamily: {
        Jost: ["Jost", "sans-serif"],
        TitleFont: ["alternate-gothic-compressed", "sans-serif"],
        SubTitleFont: ["eds-market-regular-slant", "sans-serif"],
        ApercuRegular: ["Apercu-Regular", "sans-serif"],
        ApercuMedium: ["Apercu-Medium", "sans-serif"],
        ApercuBold: ["Apercu-Bold", "sans-serif"],
      }
    },
  },
  plugins: [],
};
