import plugin from "tailwindcss/plugin";

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {},
  },
  plugins: [
    plugin(({ theme, addUtilities }) => {
      const neon = {};
      const sizes = [
        { name: "sm", dimensions: { inner: 2, outer: 10 } },
        { dimensions: { inner: 5, outer: 20 } },
        { name: "lg", dimensions: { inner: 8, outer: 30 } },
      ];
      const colors = theme("colors");

      for (const color in colors) {
        if (typeof colors[color] === "object") {
          const color1 = colors[color]["500"];
          const color2 = colors[color]["700"];

          for (const size of sizes)
            neon[`.neon-${color}${size.name ? "-" + size.name : ""}`] = {
              boxShadow: `0 0 ${size.dimensions.inner}px ${color1}, 0 0 ${size.dimensions.outer}px ${color2}`,
            };
        }
      }

      addUtilities(neon);
    }),
  ],
};
