import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0F2B46",
          50: "#E8F0F6",
          100: "#C5D7E9",
          200: "#9FBCD9",
          300: "#79A1C9",
          400: "#5386B9",
          500: "#2D6BA9",
          600: "#275E93",
          700: "#1F4D7A",
          800: "#173C61",
          900: "#0F2B46",
        },
        accent: {
          DEFAULT: "#2980B9",
          light: "#3498DB",
          dark: "#1A5E8A",
        },
        success: "#27AE60",
        bgLight: "#F8F9FA",
        bgBlue: "#EBF5FB",
        textPrimary: "#2C3E50",
        textSecondary: "#5D6D7E",
        border: "#D5D8DC",
      },
      fontFamily: {
        heading: ["var(--font-cabinet)", "var(--font-satoshi)", "sans-serif"],
        body: ["var(--font-dm-sans)", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "monospace"],
      },
      fontSize: {
        "display-xl": ["4.5rem", { lineHeight: "1.1", letterSpacing: "-0.03em" }],
        "display-lg": ["3.75rem", { lineHeight: "1.1", letterSpacing: "-0.025em" }],
        "display-md": ["3rem", { lineHeight: "1.15", letterSpacing: "-0.02em" }],
        "display-sm": ["2.25rem", { lineHeight: "1.2", letterSpacing: "-0.015em" }],
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease forwards",
        "fade-in": "fadeIn 0.4s ease forwards",
        "count-up": "countUp 1.5s ease forwards",
      },
      keyframes: {
        fadeUp: {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
      },
      transitionTimingFunction: {
        smooth: "cubic-bezier(0.4, 0, 0.2, 1)",
      },
      maxWidth: {
        site: "1280px",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "mesh-gradient":
          "radial-gradient(at 40% 20%, #1a4a6b 0px, transparent 50%), radial-gradient(at 80% 0%, #0f2b46 0px, transparent 50%), radial-gradient(at 0% 50%, #2980b9 0px, transparent 50%)",
      },
    },
  },
  plugins: [],
};

export default config;
