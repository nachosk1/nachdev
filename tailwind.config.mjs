/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: "#E63946",
        secondary: "#A8DADC",
        third: "#457B9D",
        fourth: "#1D3557",
        background: "#F1FAEE",
      },
    },
  },
  plugins: [],
};
