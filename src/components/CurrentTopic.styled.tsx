import styled from "@emotion/styled";
import { mq, starterDecorListBg, typography } from "../stylesVariables";

export const DecorH = styled.h2<{ svg: string; bgIndex: number }>`
  font-family: ${typography.rubikMedium};
  font-size: 18px;
  line-height: 1;
  color: ${({ theme }) => theme.textColor};
  align-items: center;
  gap: 16px;

  ${mq[1]} {
    font-size: 28px;
    gap: 24px;
  }

  &.decorTopic {
    display: none;
  }

  &::before {
    content: "";
    width: 40px;
    height: 40px;
    border-radius: 4px;
    background-image: url("${({ svg }) => svg}");
    background-color: ${({ bgIndex }) => Object.values(starterDecorListBg)[bgIndex]};
    background-repeat: no-repeat;
    background-size: 29px;
    background-position: center;

    ${mq[1]} {
      width: 56px;
      height: 56px;
      background-size: 40px;
    }
  }
`;
