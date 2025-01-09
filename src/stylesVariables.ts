import mobImgDark from "./assets/images/pattern-background-mobile-dark.svg";
import mobImgLight from "./assets/images/pattern-background-mobile-light.svg";
import moonLight from "./assets/images/icon-moon-light.svg";
import moonDark from "./assets/images/icon-moon-dark.svg";
import sunLight from "./assets/images/icon-sun-light.svg";
import sunDark from "./assets/images/icon-sun-dark.svg";

export const colors = {
  purple: "#A729F5",
  darkNavy: "#313E51",
  navy: "#3B4D66",
  greyNavy: "#626C7F",
  lightBlue: "#ABC1E1",
  lightGrey: "#F4F6FA",
  white: "#ffffff",
  green: "#26D782",
  red: "#EE5454",
};

export const images = {};

export const theme = {
  light: {
    mainBg: colors.lightGrey,
    mobileBgImg: mobImgLight,
    switcherMoonImg: moonDark,
    switcherSunImg: sunDark,
  },
  dark: {
    mainBg: colors.darkNavy,
    mobileBgImg: mobImgDark,
    switcherMoonImg: moonLight,
    switcherSunImg: sunLight,
  },
};
