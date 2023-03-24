/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./public/**/*.{html,js}"],
  theme: {
    screens: {
      xxs: "280px",
      xs: "360px",
      ss: "391px",
      xsm: "412px",
      sm: "480px",
      smd: "540px",
      smax: "680px",
      md: "768px",
      lg: "976px",
      xlg: "992px",
      large: "1170px",
      exl: "1280px",
    },
    extend: {
      colors: {
        primaryColor: " #121B27",
        darkColor: "#1D2939",
        darkGradient: " #5404FF",
        lightGradient: "#BD3BD2",
        androidBlue: " #175CE1",
        androidPurple: "#A75FD2",
        white: " #FCFCFC",
        borderColor: " rgba(221, 221, 221, 0.5)",
        featureColor: "rgba(255, 255, 255, 0.7)",
        bgGreen: "#20AC5B",
      },
      fontFamily: {
        sans: ["Satoshi", "sans-serif"],
        asap: ["Asap", "sans-serif"],
      },

      fontWeight: {
        400: ["400"],
        500: ["501"],
        700: ["700"],
        900: ["900"],
      },
    },
  },
  plugins: [],
};
