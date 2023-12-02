/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    colors: {
      "desaturated-red": "hsl(0, 36%, 70%)",
      "soft-red": "hsl(0, 93%, 68%)",
      "dark-grayish-red": "hsl(0, 6%, 24%)",
      "gradient1-first": "hsl(0, 0%, 100%)",
      "gradient1-second": "hsl(0, 100%, 98%)",
      "gradient2-first": "hsl(0, 80%, 86%)",
      "gradient2-second": "hsl(0, 74%, 74%)",
    },
    fontFamily: {
      Josepins: ["Josefin Sans", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};
