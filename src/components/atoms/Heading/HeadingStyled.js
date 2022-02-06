import styled, { css } from "styled-components";

export const H1 = styled.h1`
  ${({ header__heading }) =>
    header__heading &&
    css`
      color: ${({ theme }) => theme.colors.white};
      font-size: ${({ theme }) => theme.fontSizes.xl};
      grid-area: 1 / 1;
      justify-self: center;
      align-self: center;
    `}
`;
export const H2 = styled.h2``;
export const H3 = styled.h3`
  ${({ roomsListItem__heading }) =>
    roomsListItem__heading &&
    css`
      font-size: ${({ theme }) => theme.fontSizes.xs};
      font-weight: 900;
      color: ${({ theme }) => theme.colors.black};
      margin-bottom: 10px;
    `}
`;
export const H4 = styled.h4``;
export const H5 = styled.h5``;
export const H6 = styled.h6`
  ${({ timeSlider__heading }) =>
    timeSlider__heading &&
    css`
      font-size: ${({ theme }) => theme.fontSizes.s};
      margin-bottom: 20px;
    `}
`;
