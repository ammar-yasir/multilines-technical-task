import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      borderRadius: {
        10: "10px",
        30: "30px",
      },
      text: {
        10: "10px",
        44: "44px",
      },
      colors: {
        "background": "#F5F8FA",

        "primary": "#1D3557",
        "secondary": "#8597A8",
        "muted": "#F5F8FB",

        "success": "#1EA54E",
        "warning": "#F59F0A",
        "danger": "#F50A0A",
        "active": "#0078D7",
        "pending": "#004479",

        "accent-green": "#34C759",
        "accent-green-100": "#34C7591A",

        "accent-yellow": "#FFCC00",
        "accent-yellow-100": "#FFCC001A",

        "accent-red": "#DB1F26",

        "white-100": "#FFFFFF1A",
        "gray-100": "#E0E8ED",
        "gray-100-transparent": "#E0E8ED80",
        "gray-200": "#F9FAFA",
        "gray-300": "#1B35570D",
        "gray-500": "#4a5e8a",
        "link": "#7B9FC3",
        "hover-link": "#98AEC01A",
      },
    },
  },
  plugins: [],
} satisfies Config;
