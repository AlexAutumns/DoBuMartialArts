/** @type {import('tailwindcss').Config} */

// #EBE8BE FBFADA 086972 4E9F3D 1E5128 191A19 #fef08a

const colors1 = {
  // Dark mode
  firstColorDark: "#D8E9A8",
  secondColorDark: "#4E9F3D",
  thirdColorDark: "#1E5128",
  fourthColorDark: "#191A19",

  // Light Mode
  firstColor: "#e6f0ca",
  secondColor: "#B3C87A",
  thirdColor: "#347A2A",
  fourthColor: "#202E24",
};

const colors2 = {

  firstColorDark: "#D8E9A8",
  secondColorDark: "#4E9F3D",
  thirdColorDark: "#1E5128",
  fourthColorDark: "#191A19",

  firstColor: "#FBFAD3",
  secondColor: "#C6E377",
  thirdColor: "#729D39",
  fourthColor: "#191A19",
};

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: colors2,
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "3rem",
        },
      },
      fontFamily: {
        ubuntu: ["Ubuntu", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
      boxShadow: {
        // lg shadows
        "left-lg": "0 10px 15px -3px var(--tw-shadow-color), -5px 4px 6px -4px var(--tw-shadow-color)", // Shadow to the left
        "right-lg": "0 10px 15px -3px var(--tw-shadow-color), 5px 4px 6px -4px var(--tw-shadow-color)", // Shadow to the right
        "top-lg": "0 -10px 15px -3px var(--tw-shadow-color), 0 -4px 6px -4px var(--tw-shadow-color)", // Shadow at the top
        "bottom-lg": "0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color)", // Shadow at the bottom
      },
      screens: {
        sm: '1367px',  
        md: '1536px', 
        lg: '1792px',
        xl: '2048px', 
        '2xl': '2560px', 
      },
    },
  },
  plugins: [],
};
