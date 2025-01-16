import styled from "@emotion/styled";
import {  typography } from "../stylesVariables";






export const SectionResult = styled.section`
display: grid;
place-items:center;
padding: 32px;
gap: 16px;
border-radius: 12px;
background-color: ${({theme})=>theme.listBg};
margin-bottom: 12px;

& + [data-showdecor]{
display:grid;
place-self: stretch;
}
`;


export const SpanScore = styled.span`
display: block;
margin-bottom: 16px;
font-family: ${typography.rubikMedium};
line-height:1;
font-size:88px;
color:${({theme})=>theme.textColor};    
`;

export const ScoreP = styled.p`
font-family: ${typography.rubikRegular};
line-height:1;
font-size:18px;
color:${({theme})=>theme.textExtraColor};     
text-align: center;

`;