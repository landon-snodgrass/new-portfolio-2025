import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        burntOrange: "#CC5500",
        warmCream: "#F5F2E8",
        deepBrown: "#4A3426",
        goldenYellow: "#D4A574",
        sageGreen: "#9CAF88",
      },
      fontFamily: {
        fascinate: ["Fascinate", "cursive"],
        serif: ["Lora", "serif"],
      },
    },
  },
  plugins: [],
};
export default config;
