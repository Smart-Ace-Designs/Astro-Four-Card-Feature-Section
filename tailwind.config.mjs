/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primaryRed: "hsl(0, 78%, 62%)",
        primaryCyan: "hsl(180, 62%, 55%)",
        primaryOrange: "hsl(34, 97%, 64%)",
        primaryBlue: "hsl(212, 86%, 64%)",
        secondaryVeryDarkBlue: "hsl(234, 12%, 34%)",
        secondaryGrayishBlue: "hsl(229, 6%, 66%)",
        secondaryLightGray: "hsl(0, 0%, 98%)",
      },
      fontFamily: {
        poppins: ["Poppins", "san-serif"],
      },
    },
  },
  plugins: [],
};
