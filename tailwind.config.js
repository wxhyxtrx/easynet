/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      transitionProperty: {
        height: "height",
      },
      screens: {
        allMobile: { min: "320px", max: "639px" },
        mobileS: { min: "320px", max: "374px" },
        mobileM: { min: "375px", max: "424px" },
        mobileL: { min: "425px", max: "640px" },
        sm: { min: "641px", max: "767px" },
        md: { min: "768px", max: "1023px" },
        lg: { min: "1024px", max: "1281px" },
        xl: { min: "1282px", max: "1535px" },
        "2xl": "1536px",
        allDekstop: { min: "1023px" },
        allTab: { min: "641px", max: "1023px" },
      },
      colors: {
        primary: "#0076D6",
        secondary: "#FF9800",
        neutral: "#BFBFBF",
        "primary-400": "#5CB5FF",
        "primary-500": "#2EA0FF",
        "primary-600": "#008CFF",
        "primary-700": "#0076D6",
        "primary-800": "#005FAD",
        "primary-900": "#004985",
        "secondary-500": "#FFAA2E",
        "secondary-600": "#FF9800",
        "secondary-700": "#D68000",
        "secondary-800": "#AD6700",
        "neutral-200": "#F0F0F0",
        "neutral-300": "#BFBFBF",
      },
      variants: {
        height: ["responsive", "hover", "focus"],
      },
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [],
};
