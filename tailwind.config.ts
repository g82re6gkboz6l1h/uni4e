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
      colors: {
        sand: {
          50: "#f7f3ec",
          100: "#f1e9de",
          200: "#e4d5c1",
          300: "#d7be9f",
          400: "#c29a6d",
        },
        ink: {
          50: "#f5f5f4",
          100: "#eae8e4",
          200: "#d6d3cd",
          300: "#b3ada1",
          400: "#7a7264",
          500: "#5a5346",
          600: "#3d352a",
          700: "#2f281e",
          800: "#251f17",
          900: "#1f1a14",
        },
        rust: {
          DEFAULT: "#b45309",
          50: "#fef7ee",
          100: "#fdecd3",
          200: "#fad6a5",
          300: "#f6b96d",
          400: "#f18d33",
          500: "#ed6e0c",
          600: "#de5507",
          700: "#b85309",
          800: "#92420e",
          900: "#77380f",
        },
        moss: {
          DEFAULT: "#0f766e",
          50: "#f0fdfa",
          100: "#ccfbf1",
          200: "#99f6e4",
          300: "#5eead4",
          400: "#2dd4bf",
          500: "#14b8a6",
          600: "#0d9488",
          700: "#0f766e",
          800: "#115e59",
          900: "#134e4a",
        },
        dusk: {
          DEFAULT: "#433d67",
          50: "#f6f5f9",
          100: "#edebf3",
          200: "#dcd9e7",
          300: "#c1bbd4",
          400: "#a094bd",
          500: "#8775a8",
          600: "#725e91",
          700: "#5f4e76",
          800: "#524463",
          900: "#433d67",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Inter", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "Georgia", "serif"],
      },
      backgroundImage: {
        "paper-fiber":
          "radial-gradient(circle at 1px 1px, rgba(0,0,0,0.04) 1px, transparent 0)",
        "soft-gradient":
          "linear-gradient(135deg, rgba(244, 236, 222, 0.95) 0%, rgba(255, 251, 246, 0.9) 50%, rgba(237, 229, 216, 0.95) 100%)",
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.75rem",
      },
      boxShadow: {
        soft: "0 20px 45px rgba(31, 41, 55, 0.08)",
        "soft-lg": "0 30px 60px rgba(15, 23, 42, 0.12)",
        bordered:
          "0 0 0 1px rgba(60, 52, 40, 0.08), 0 25px 60px rgba(15, 23, 42, 0.08)",
      },
      spacing: {
        18: "4.5rem",
        28: "7rem",
      },
      letterSpacing: {
        widest: ".32em",
      },
      animation: {
        "fade-up": "fadeUp 0.7s ease-out forwards",
        "float-slow": "floatSlow 12s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(32px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        floatSlow: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-18px)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
