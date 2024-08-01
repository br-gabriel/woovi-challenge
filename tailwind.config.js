/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      transparent: 'transparent',
      "white": "#FFFFFF",
      "textDark": "#4D4D4D",
      "textLight": "#B2B2B2",
      "gray": "#E5E7Eb",
      "success": {
        light: "#F4FBF9",
        DEFAULT: "#03D69D",
      },
      "blue": {
        light: "#234575",
        DEFAULT: "#133A6F",
      },
    }
  },
  plugins: [],
};
