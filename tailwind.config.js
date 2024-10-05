/** @type {import('tailwindcss').Config} */
export default {
  content: ["index.html"],
  theme: {
    container: {
      center: true,
      padding: "16px",
      screens: {
        lg: "1184px",
      },
    },
    fontFamily: {
      primary: ["Inter , sans-serif"],
    },
    fontSize: {
      14: "14px",
    },
    extend: {
      colors: {
        BodyBg: "#F0F3F7",
        HeadBg: "rgba(255, 255, 255, 0.92)",
        grey: "#EAEDF0",
        white: "#FFFFFF",
        black: {
          DEFAULT: "#000000",
          100: "#16191D",
        },
      },
      boxShadow: {
        logo: "0px 12px 36px 0px rgba(14, 17, 22, 0.1)",
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
};
