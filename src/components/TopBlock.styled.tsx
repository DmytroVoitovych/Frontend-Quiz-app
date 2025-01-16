import styled from "@emotion/styled";
import { typography } from "../stylesVariables";




export const TextBlock = styled.div`
color: ${({ theme }) => theme.textColor};
margin-bottom: 40px;

& h1{
display:grid;
row-gap:8px;
margin-bottom: 16px;
font-size:40px;  
line-height:1;
font-family: ${typography.rubikMedium};



& span{
font-family:${typography.rubikRegular};
}


}

`;

export const Explainer = styled.p`
font-family:${typography.rubikItalic};
font-size:14px;
line-height:1.5;
color: ${({theme})=>theme.textExtraColor};    
`;