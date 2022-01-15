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
export const H3 = styled.h3``;
export const H4 = styled.h4``;
export const H5 = styled.h5``;
export const H6 = styled.h6``;
