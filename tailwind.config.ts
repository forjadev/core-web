const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");
import type { Config } from "tailwindcss";
const svgToDataUri = require("mini-svg-data-uri");
const colors = require("tailwindcss/colors");

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ["var(--font-inter)"],
        secondary: ["var(--font-jetbrains)"],
      },
      colors: {
        orange: {
          DEFAULT: "#ff9900",
          "50": "#fffbea",
          "100": "#fff2c5",
          "200": "#ffe685",
          "300": "#ffd246",
          "400": "#ffbd1b",
          "500": "#ff9900",
          "600": "#e27200",
          "700": "#bb4d02",
          "800": "#983b08",
          "900": "#7c310b",
          "950": "#481700",
        },
        perolous: {
          DEFAULT: "#2baec0",
          "50": "#effbfc",
          "100": "#d7f5f6",
          "200": "#b3e9ee",
          "300": "#7fd8e1",
          "400": "#44bdcc",
          "500": "#2baec0",
          "600": "#248396",
          "700": "#236a7b",
          "800": "#255865",
          "900": "#234956",
          "950": "#12303a",
        },
        neutral: {
          DEFAULT: "#737373",
          "50": "#f6f6f6",
          "100": "#e7e7e7",
          "200": "#d1d1d1",
          "300": "#b0b0b0",
          "400": "#888888",
          "500": "#737373",
          "600": "#5d5d5d",
          "700": "#4f4f4f",
          "800": "#454545",
          "900": "#3d3d3d",
          "950": "#262626",
        },
        "surface-dark": {
          DEFAULT: "#000606",
          base: "#000606",
          mantle: "#000909",
          crust: "#001515",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [
    addVariablesForColors,
    function ({ matchUtilities, theme }: any) {
      matchUtilities(
        {
          "bg-grid": (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`,
            )}")`,
          }),
          "bg-grid-small": (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="8" height="8" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`,
            )}")`,
          }),
          "bg-dot": (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="1.6257413380501518"></circle></svg>`,
            )}")`,
          }),
        },
        {
          values: flattenColorPalette(theme("backgroundColor")),
          type: "color",
        },
      );
    },
  ],
};
export default config;

// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val]),
  );

  addBase({
    ":root": newVars,
  });
}
