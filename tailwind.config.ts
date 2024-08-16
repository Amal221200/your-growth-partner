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
        primary: "var(--primary-color)",
        "primary-light": "var(--primary-light)",
        "primary-medium": "var(--primary-medium)",
        "primary-dark": "var(--primary-dark)",
      }
    }
  },
  plugins: [ta],
};
export default config;
