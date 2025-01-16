import styled from "@emotion/styled";
import coorectSvg from "../assets/images/icon-correct.svg";
import incorrectSvg from "../assets/images/icon-incorrect.svg"
import { colors, shadows, starterDecorListBg, typography } from "../stylesVariables";

export const List = styled.ul<{ valid?: string,child?:number }>`
  display: grid;
  gap: 12px;

  & > li {
    padding: 12px;
    border-radius: 12px;
    background-color: ${({ theme }) => theme.listBg};
    box-shadow: ${shadows.listShadow};
    pointer-events: ${({ valid }) => (valid ? "none" : "all")};

    &:active {
      outline: 3px solid ${colors.purple};
    }

    &:has(input:checked) {
      outline: 3px solid
        ${({ valid }) => {
          if (valid) return colors[valid as "green" | "red"];

          return colors.purple;
        }};
    }

    &:has(input:focus-visible) {
      outline: 3px solid ${colors.purple};
    }

    @media (hover: hover) {
      &:hover {
        outline: 3px solid ${colors.purple};
        transition: 250ms;
      }
      &:has(input:focus) {
        outline: 3px solid ${colors.purple};
      }
    }
    
    &:nth-of-type(${({child})=> child as number + 1})  label:after{
     content: '';
     background-image: url("${coorectSvg}");
     background-size: cover;
     flex-shrink: 0;
     width: 24px;
    height: 24px;
    margin-left: auto;
    }


    &:nth-of-type(1) label::before {
      content: "A";
      background-color: ${starterDecorListBg.childOne};
    }
    &:nth-of-type(2) label::before {
      content: "B";
      background-color: ${starterDecorListBg.childTwo};
    }
    &:nth-of-type(3) label::before {
      content: "C";
      background-color: ${starterDecorListBg.childThree};
    }
    &:nth-of-type(4) label::before {
      content: "D";
      background-color: ${starterDecorListBg.childFour};
    }
  }
`;

export const LableList = styled.label<{ svg?: string; valid?: string }>`
  font-family: ${typography.rubikMedium};
  font-size: 18px;
  line-height: 1;
  color: ${({ theme }) => theme.textColor};
  position: relative;
  display: flex;
  align-items: center;
  gap: 16px;

  &:has(input:checked)::before {
    background-color: ${({ valid }) => {
      if (valid) return colors[valid as "green" | "red"];
      return colors.purple;
    }}!important;
    color: ${colors.white};
  }
 
  &::after{
    content: "";
    flex-shrink: 0;
    width: 24px;
    height: 24px;
  }

  &:has(input:checked)::after {
    margin-left: auto;
    background-size: cover;
    background-image: url("${({ valid }) => (valid ? valid === 'red'?incorrectSvg : "":"")}");
  }

  &::before {
    content: "";
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    color: ${({ svg }) => (!svg ? colors.greyNavy : "transparent")};
    border-radius: 6px;
    background-color: ${({ svg }) => !svg && colors.lightGrey + "!important"};
    width: 40px;
    height: 40px;
    background-image: url("${({ svg }) => (svg ? svg : "")}");
    background-repeat: no-repeat;
    background-size: ${({ svg }) => (svg ? "29px" : "unset")};
    background-position: center;
    filter: ${({ theme }) => theme.invertColor};
  }

  & > input {
    display: contents;
    outline: none;
    z-index: -1;
  }
`;
