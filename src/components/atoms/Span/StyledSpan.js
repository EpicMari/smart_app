import styled, { css } from "styled-components";

export const StyledSpan = styled.span`
  ${({ timeSlider__timeValue }) =>
    timeSlider__timeValue &&
    css`
      justify-self: center;
      margin-bottom: 20px;
      font-size: ${({ theme }) => theme.fontSizes.s};
    `}

  ${({ timeSlider__label }) =>
    timeSlider__label &&
    css`
      font-size: 0.9rem;
    `}
`;
