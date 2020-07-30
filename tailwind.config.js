const defaultTheme = require("tailwindcss/defaultTheme");
const tailwindConfig = require("@cafeta/components-react/tailwind.config");

module.exports = {
  purge: [
    "./src/**/*.html",
    "./src/**/*.js",
    "./src/**/*.jsx",
    "./src/**/*.ts",
    "./src/**/*.tsx",
    "./public/index.html",
  ],
  theme: {
    ...tailwindConfig.theme,
    fontFamily: {
      ...defaultTheme.fontFamily,
      sans: ["Lato", ...defaultTheme.fontFamily.sans],
    },
  },
};
