import styled from "@emotion/styled";
import { mq, typography } from "../stylesVariables";




export const TextBlock = styled.div`
color: ${({ theme }) => theme.textColor};
margin-bottom: 40px;

${mq[1]}{
margin-bottom: 64px;
}

${mq[3]}{
margin-bottom: 0px;
}

& h1{
display:grid;
row-gap:8px;
margin-bottom: 16px;
font-size:40px;  
line-height:1;
font-family: ${typography.rubikMedium};

${mq[1]}{
font-size: 64px;
}

${mq[3]}{
margin-bottom: 48px;

&:not(:has(+p)){
margin-bottom: 0;
}
}


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

${mq[1]}{
font-size: 20px;
}
`;