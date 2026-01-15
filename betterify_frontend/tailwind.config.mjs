/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        better: {
          base0: "#0b0b12",
          base1: "#141321",
          purple: "#7c3aed",
          blue: "#3b82f6",
          text: "#e5e7eb",
          muted: "#a1a1aa"
        }
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(124,58,237,0.25), 0 10px 30px rgba(124,58,237,0.18)",
        "glow-blue":
          "0 0 0 1px rgba(59,130,246,0.25), 0 10px 30px rgba(59,130,246,0.15)"
      },
      keyframes: {
        floatSlow: {
          "0%, 100%": { transform: "translate3d(0,0,0) scale(1)" },
          "50%": { transform: "translate3d(0,-16px,0) scale(1.02)" }
        },
        drift: {
          "0%": { transform: "translate3d(-5%, -5%, 0)" },
          "50%": { transform: "translate3d(5%, 5%, 0)" },
          "100%": { transform: "translate3d(-5%, -5%, 0)" }
        },
        shimmer: {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "100% 50%" }
        }
      },
      animation: {
        floatSlow: "floatSlow 8s ease-in-out infinite",
        drift: "drift 18s ease-in-out infinite",
        shimmer: "shimmer 10s ease-in-out infinite"
      }
    }
  },
  plugins: []
};

export default config;
