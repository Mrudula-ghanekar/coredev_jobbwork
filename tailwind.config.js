/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        darkslateblue: {
          "100": "#003173",
          "200": "rgba(0, 49, 115, 0.6)",
        },
        gainsboro: {
          "100": "#d9d9d9",
          "200": "rgba(217, 217, 217, 0.2)",
        },
        black: "#000",
        skyblue: "#9cdcf9",
      },
      spacing: {},
      fontFamily: {
        verdana: "Verdana",
      },
      borderRadius: {
        "8xs-1": "4.1px",
        "10xs-7": "2.7px",
      },
    },
    fontSize: {
      "26xl-9": "45.9px",
      "xl-3": "20.3px",
      "sm-5": "13.5px",
      "base-2": "16.2px",
      "lg-9": "18.9px",
      "9xl": "28px",
      "5xl": "24px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
