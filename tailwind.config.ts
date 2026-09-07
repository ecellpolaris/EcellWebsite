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
        paper: {
          DEFAULT: "#F6F3EC",
          card: "#FFFEFA",
          sunken: "#EFEAE0",
          border: "#E6E1D6",
        },
        ink: {
          DEFAULT: "#111114",
          muted: "#6F6B64",
          light: "#8E8A83",
        },
        lime: {
          DEFAULT: "#B6F000",
          hover: "#A3D900",
          ink: "#10140A",
        },
        heat: {
          DEFAULT: "#FF4D1C",
          muted: "#FFEAE4",
        },
        teal: {
          data: "#007C86",
        },
        status: {
          ok: "#0F9F6E",
        },
      },
      fontFamily: {
        display: ["var(--font-syne)", "sans-serif"],
        body: ["var(--font-outfit)", "sans-serif"],
        mono: ["ui-monospace", "SFMono-Regular", "Menlo", "Monaco", "Consolas", "monospace"],
      },
      boxShadow: {
        paper: "0 4px 20px -2px rgba(17, 17, 20, 0.05)",
        card: "0 2px 10px rgba(17, 17, 20, 0.04)",
        lift: "0 12px 32px -4px rgba(17, 17, 20, 0.08)",
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
      animation: {
        marquee: "marquee 35s linear infinite",
        "marquee-reverse": "marquee-reverse 38s linear infinite",
        "marquee-fast": "marquee 22s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
