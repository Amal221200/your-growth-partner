import type { Config } from "tailwindcss";
import ta from "tailwindcss-animate"

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "hsla(288, 30%, 46%, 1)",
        "primary-light": "hsla(262, 73%, 80%, 1)",
        "primary-medium": "hsla(288, 62%, 37%, 1)",
        "primary-dark": "hsla(262, 75%, 27%, 1)",
      }
    }
  },
  plugins: [ta],
};
export default config;
