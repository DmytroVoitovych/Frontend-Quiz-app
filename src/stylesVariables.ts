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

export const shadows = {
  listShadow: "0 16px 40px 0 rgba(49, 62, 81, 0.14)",
};

export const typography = {
  rubikRegular: "Rubik-Regular, sans-serif",
  rubikMedium: "Rubik-Medium, sans-serif",
  rubikItalic: "Rubik-Italic, sans-serif",
};

export const starterDecorListBg = {
  childOne: "#FFF1E9",
  childTwo: "#E0FDEF",
  childThree: "#EBF0FF",
  childFour: "#F6E7FF",
};

export const theme = {
  light: {
    mainBg: colors.lightGrey,
    mobileBgImg: mobImgLight,
    switcherMoonImg: moonDark,
    switcherSunImg: sunDark,
    textColor: colors.darkNavy,
    textExtraColor: colors.greyNavy,
    listBg: colors.white,
    invertColor: 'contrast(0.9)'
  },
  dark: {
    mainBg: colors.darkNavy,
    mobileBgImg: mobImgDark,
    switcherMoonImg: moonLight,
    switcherSunImg: sunLight,
    textColor: colors.white,
    textExtraColor: colors.lightBlue,
    listBg: colors.navy,
    invertColor:'unset'
  },
};
