import styled, { css } from "styled-components";

export const StyledNav = styled.nav`
  ${({ navigation__nav }) =>
    navigation__nav &&
    css`
      display: flex;
      justify-content: space-around;
      align-items: center;
      height: 100%;
    `}
`;
