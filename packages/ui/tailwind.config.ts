import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: { DEFAULT: "#0F1F3D", mid: "#1B3461", deep: "#0A1630" },
        gold: { DEFAULT: "#F0B84C", dark: "#D4991E", light: "#FDF6E3", pale: "#FEF9EE" },
        brand: { DEFAULT: "#2B5EA7", light: "#EBF2FF" },
      },
      fontFamily: {
        heading: ["Montserrat", "ui-sans-serif", "system-ui", "sans-serif"],
        body: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 4px 16px rgba(15,31,61,0.10), 0 2px 6px rgba(15,31,61,0.06)",
        lift: "0 10px 40px rgba(15,31,61,0.14), 0 4px 12px rgba(15,31,61,0.08)",
      },
    },
  },
  plugins: [],
};

export default config;
