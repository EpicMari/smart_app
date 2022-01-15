import styled, { css } from "styled-components";

export const StyledButton = styled.button`
  ${({ header__btn }) =>
    header__btn &&
    css`
      border: none;
      background-color: transparent;
      width: 3rem;
      height: 3rem;
      margin-left: 1rem;
      grid-area: 1 / 1;
      justify-self: start;
      align-self: center;
    `}
`;
