import styled from "@emotion/styled";
import { colors, typography } from "../stylesVariables";
import incorrectSvg from "../assets/images/icon-incorrect.svg"


export const Form = styled.form`
display:grid;
row-gap:12px;

&:has(+ #emptyAlert){
margin-bottom:12px;    
}

&:has(+ #emptyAlert) > input{
pointer-events: none;
}
`;

export const AlertSpan = styled.span`
font-family:${typography.rubikRegular};
line-height:1;
font-size:18px;
color: ${colors.red};
display: flex;
justify-content: center;
align-items: center;
gap: 8px;

&::before{
content:'';
width: 24px;
height: 24px;
background-image:url("${incorrectSvg}") ;
background-repeat:no-repeat;
background-size: cover;

}
`;







