import styled from "@emotion/styled";
import { mq } from "./stylesVariables";



export const Section = styled.section`
padding-top:32px; 

${mq[1]}{
padding-top: 9px;
}

${mq[3]}{
display:flex;
justify-content: space-between;
padding-top: 2px;

&:has([data-showdecor]){
flex-wrap: wrap;
}
}
`;