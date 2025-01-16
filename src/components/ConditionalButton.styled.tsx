import styled from "@emotion/styled";
import { colors, shadows, typography } from "../stylesVariables";


export const InputAsButton = styled.input`
padding:12px;
border: none;
border-radius: 12px;
background-color: ${colors.purple};

font-family: ${typography.rubikMedium};
font-size:18px;
line-height:1;
color:${colors.white} ;
box-shadow: ${shadows.listShadow};
`;