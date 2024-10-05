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
        grey: {
          DEFAULT: "#EAEDF0",
          100: "#8E9297",
        },
        white: "#FFFFFF",
        black: {
          DEFAULT: "#000000",
          100: "#16191D",
        },
        blue: {
          DEFAULT: "#388ff3",
        },
      },
      boxShadow: {
        logo: "0px 12px 36px 0px rgba(14, 17, 22, 0.1)",
        card: "0px 4px 16px 0px rgba(0, 0, 0, 0.02)",
        cardIcon: "0px 4px 20px 0px rgba(0, 0, 0, 0.08)",
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
};
