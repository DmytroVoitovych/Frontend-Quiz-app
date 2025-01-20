import styled from "@emotion/styled";
import { colors, mq, shadows, typography } from "../stylesVariables";

export const InputAsButton = styled.input`
  padding: 12px;
  border: none;
  border-radius: 12px;
  background-color: ${colors.purple};

  font-family: ${typography.rubikMedium};
  font-size: 18px;
  line-height: 1;
  color: ${colors.white};
  box-shadow: ${shadows.listShadow};

  &:active {
    transform: scale(0.98);
    box-shadow: 3px 2px 22px 1px rgba(0, 0, 0, 0.24);
  }

  @media (hover: hover) {
    &:hover {
      cursor: pointer;
      filter: drop-shadow(2px 4px 6px black);
      transition: mix-blend-mode 250ms;
    }
  }

  ${mq[1]} {
    padding: 32px;
    border-radius: 24px;
    font-size: 28px;
  }
`;
