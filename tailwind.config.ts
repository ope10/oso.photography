import type { Config } from "tailwindcss";

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
        sans: ["Manrope", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "sans-serif"],
        heading: ["Manrope", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "sans-serif"],
      },
      colors: {
        dark: {
          950: "#070708", // Deep Obsidian Black
          900: "#0E0E10", // Secondary Dark Surface
          850: "#131316", // Elevated Dark Surface
          800: "#18181B", // Border & hover dark
          700: "#1E1E22", // Border divider dark
          600: "#2F2F37", // Border stroke dark
          500: "#4A4A55", // Icon dark
          400: "#797C86", // Muted text dark
          300: "#A2A4AD", // Secondary text dark
          100: "#F2F2F2", // Text light
        },
        light: {
          50: "#FFFFFF",
          100: "#F9FAFB",
          200: "#F3F4F6",
          300: "#E5E7EB",
          400: "#D1D5DB",
          500: "#9CA3AF",
          600: "#6B7280",
          700: "#374151",
          800: "#1F2937",
          900: "#111827",
        },
        brand: {
          purple: "#6B46FF",
          purpleHover: "#5532E6",
        },
      },
      animation: {
        "marquee": "marquee 28s linear infinite",
        "marquee-reverse": "marquee-reverse 28s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "marquee-reverse": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0%)" },
        },
      },
      letterSpacing: {
        widest: ".2em",
        extrawide: ".25em",
      },
    },
  },
  plugins: [],
};
export default config;
