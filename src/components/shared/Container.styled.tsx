import styled from "@emotion/styled";
import { breakpoints, mq } from "../../stylesVariables";





export const ContainerBlock = styled.div`
padding: 0 24px;    
margin: 0 auto;
padding-bottom: 16px;

${mq[0]}{
max-width:${breakpoints[0]}px;
}

${mq[1]}{
padding:0 64px;
max-width:${breakpoints[1]}px;
padding-bottom: 40px;
}

${mq[2]}{
max-width:${breakpoints[2]}px;
}

${mq[3]}{
padding:0 140px;
max-width:${breakpoints[3]}px;
padding-bottom: 83px;
}


`;
