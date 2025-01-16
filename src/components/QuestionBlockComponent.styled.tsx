import styled from "@emotion/styled";
import { colors, typography } from "../stylesVariables";




export const QuestionSpan = styled.span`
display:inline-block;
 font-family:${typography.rubikItalic};
 font-size:14px;
 line-height:1.5;
 color: ${({theme})=>theme.textExtraColor};  
margin-bottom: 12px;
`;

export const QuestionH = styled.h1`
font-family: ${typography.rubikMedium};
font-size:20px;
line-height: 1.2;
color: ${({theme})=>theme.textColor};
margin-bottom: 24px;
`;

export const QuestionSection = styled.section`
margin-bottom: 40px;
`;

export const InputRange = styled.input<{ num:number }>`
display:block;
padding: 4px;
width: 100%;
border-radius: 999px;
height: 16px;
background-color: ${colors.white};
pointer-events: none;
outline: none;
overflow: hidden;
appearance: none;


&::-webkit-slider-thumb{
  appearance: none;
  width: 16px;
  height: 8px;
  background-color: ${colors.purple};
  border-radius: 999px;
  border: none;
  -webkit-appearance: none;
  
		
  }

  &::-webkit-slider-runnable-track {
    background-image: ${({num})=> `linear-gradient(to right, ${colors.purple} calc(${num}0%),${colors.white} calc(${num}0% + 2px))`}; 
    border-radius: 16px;
    background-size:cover;
  }

    &::-moz-range-thumb {
    appearance: none;
  width: 8px;
  height: 8px;
  background-color: ${colors.purple};
border-top-right-radius: 999px;
border-bottom-right-radius: 999px;
  border: none;  
  }

  &::-moz-range-progress{
  background-color:${colors.purple} ;
  border-top-left-radius: 999px;
  border-bottom-left-radius: 999px;
  height: 8px;
  }
  
`;

