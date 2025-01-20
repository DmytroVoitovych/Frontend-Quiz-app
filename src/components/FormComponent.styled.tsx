import styled from "@emotion/styled";
import {mq, typography } from "../stylesVariables";
import incorrectSvg from "../assets/images/icon-incorrect.svg"


export const Form = styled.form`
display:grid;
row-gap:12px;
width: 100%;

${mq[1]}{
row-gap: 24px;
}

${mq[3]}{
max-width: 564px;    
row-gap: 32px;
}

&:has(+ #emptyAlert){
margin-bottom:12px;    

${mq[1]}{
margin-bottom: 32px;
}
}

&:has(+ #emptyAlert) > input{
pointer-events:none;
background-color: lightgray;
}
`;

export const AlertSpan = styled.span`
font-family:${typography.rubikRegular};
line-height:1;
font-size:18px;
color: ${({theme})=>theme.alertColor};
display: flex;
justify-content: center;
align-items: center;
gap: 8px;

${mq[1]}{
font-size: 24px;
line-height: 1.5;
}

${mq[3]}{
margin-left: auto;
flex-basis: 50%;    
}

&::before{
content:'';
width: 24px;
height: 24px;
background-image:url("${incorrectSvg}") ;
background-repeat:no-repeat;
background-size: cover;

${mq[1]}{
width: 30px;
height: 30px;
}
}
`;







