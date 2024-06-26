/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    // extend: {},
    colors: {
      background: "var(--background)",
      "card-background": "var(--card-background)",
      text: "var(--text)",
      "text-secundary-text": "var(--text-secundary-text)",
    },
  },
  plugins: [],
};
