import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        cream: "#fdfaf6",
        rose: "#d58a94",
        sage: "#6b8368",
        ink: "#1f2937"
      }
    }
  },
  plugins: []
};

export default config;