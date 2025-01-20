import styled from "@emotion/styled";
import {  mq, typography } from "../stylesVariables";


export const SectionResult = styled.section`
display: grid;
place-items:center;
padding: 32px;
gap: 16px;
border-radius: 12px;
background-color: ${({theme})=>theme.listBg};
margin-bottom: 12px;

${mq[1]}{
padding: 48px;
border-radius: 24px;
gap: 40px;
margin-bottom: 32px;
}

${mq[3]}{
flex-basis: 50%;    
}

& + [data-showdecor]{
display:grid;
place-self: stretch;

${mq[3]}{
flex-basis: 50%;   
margin-left :auto ;
}

}
`;


export const SpanScore = styled.span`
display: block;
margin-bottom: 16px;
font-family: ${typography.rubikMedium};
line-height:1;
font-size:88px;
color:${({theme})=>theme.textColor};    

${mq[1]}{
font-size: 144px;
}
`;

export const ScoreP = styled.p`
font-family: ${typography.rubikRegular};
line-height:1;
font-size:18px;
color:${({theme})=>theme.textExtraColor};     
text-align: center;

${mq[1]}{
font-size: 24px;
line-height: 1.5;
}
`;