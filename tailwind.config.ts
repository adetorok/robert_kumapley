import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx,mdx}",
    "./components/**/*.{ts,tsx,mdx}",
    "./content/**/*.{ts,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", "Inter", "ui-sans-serif", "system-ui"],
        display: ["var(--font-display)", "Inter", "ui-sans-serif", "system-ui"],
      },
      colors: {
        ink: {
          50: "#f6f7fb",
          100: "#e7eaf5",
          200: "#cfd5ea",
          300: "#a8b4d7",
          400: "#7a8fbe",
          500: "#556eaa",
          600: "#3e558f",
          700: "#324572",
          800: "#2b3a5d",
          900: "#25324e",
          950: "#131827",
        },
        accent: {
          50: "#f1f9ff",
          100: "#dceeff",
          200: "#b9ddff",
          300: "#86c5ff",
          400: "#4fa7ff",
          500: "#1d83f0",
          600: "#0e64c5",
          700: "#0d519e",
          800: "#0f457f",
          900: "#103b68",
          950: "#0a2744",
        },
        sand: {
          50: "#f9f7f3",
          100: "#f1ede2",
          200: "#e3dcc7",
          300: "#cfc1a0",
          400: "#b09c73",
          500: "#9a8157",
          600: "#7f6644",
          700: "#665137",
          800: "#53422f",
          900: "#453829",
          950: "#261e16",
        },
      },
      boxShadow: {
        soft: "0 10px 40px -18px rgba(17, 24, 39, 0.25)",
      },
    },
  },
  plugins: [typography],
};

export default config;
