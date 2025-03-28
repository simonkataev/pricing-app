/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#4F46E5",
        purple: "#4E1DF6",
        black: "#1D1D21",
        "light-gray": "#E5EAF1",
        grey: "#9D9D9D",
        "disabled-gray": "#9CA3AF",
        white: "#FFFFFF",
        "blue-ish": "#E2EAFF",
        "gray-500": "#6B7280",
        "gray-200": "#E5E7EB",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      boxShadow: {
        sm: "0px 4px 6px -1px rgba(0, 0, 0, 0.10), 0px 2px 4px -2px rgba(0, 0, 0, 0.05)",
      },
    },
  },
  plugins: [],
};
