/** @type {import('prettier').Config} */
const config = {
  tabWidth: 2,
  useTabs: false,
  semi: true,
  singleQuote: false,
  quoteProps: "as-needed",
  jsxSingleQuote: false,
  trailingComma: "all",
  bracketSpacing: true,
  bracketSameLine: false,
  arrowParens: "avoid",
  singleAttributePerLine: true,
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
  ],

  plugins: ["prettier-plugin-astro", "prettier-plugin-tailwindcss"],
};

export default config;
