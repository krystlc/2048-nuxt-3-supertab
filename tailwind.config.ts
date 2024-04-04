import tailwindTypography from "@tailwindcss/typography";
import tailwindForms from "@tailwindcss/forms";
import defaultTheme from "tailwindcss/defaultTheme";

module.exports = {
  plugins: [tailwindTypography, tailwindForms],
  theme: {
    extend: {},
    fontFamily: {
      display: ["Genos", ...defaultTheme.fontFamily.sans],
      sans: ["Reddit Mono", ...defaultTheme.fontFamily.sans],
    },
  },
};
