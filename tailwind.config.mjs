/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: "#1D3557",
        secondary: "#37B48B",
        third: "#04A86B",
        fourth: "#87D300",
        background: "#F1FAEE",
      },
    },
  },
  plugins: [],
};
