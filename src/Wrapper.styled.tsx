import styled from "@emotion/styled";
import { mq } from "./stylesVariables";


export const Main = styled.main`
background-color: ${({theme}) => theme.mainBg};
min-height:inherit;
background-image: url("${({ theme }) =>(theme.mobileBgImg)}");
background-repeat: no-repeat;
background-position: right;
background-size: cover;

${mq[1]}{
background-image: url("${({ theme }) =>(theme.tabletBgImg)}");
background-position: 0 0;
background-size: auto;
}

${mq[3]}{
background-image: url("${({ theme }) =>(theme.desctopBgImg)}");
background-size: cover;
}

&:has([data-showdecor]) .decorTopic{
display: flex;

}
`;