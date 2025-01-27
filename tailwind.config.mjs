/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "theme-red": "hsl(0, 78%, 62%)",
        "theme-cyan": "hsl(180, 62%, 55%)",
        "theme-orange": "hsl(34, 97%, 64%)",
        "theme-blue": "hsl(212, 86%, 64%)",
        "theme-very-dark-blue": "hsl(234, 12%, 34%)",
        "theme-grayish-blue": "hsl(229, 6%, 66%)",
        "theme-light-gray": "hsl(0, 0%, 98%)",
      },
      fontFamily: {
        poppins: ["Poppins", "san-serif"],
      },
    },
  },
  plugins: [],
};
