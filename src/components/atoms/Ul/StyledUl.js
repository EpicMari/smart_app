import styled, { css } from "styled-components";

export const StyledUl = styled.ul`
  ${({ roomsList }) =>
    roomsList &&
    css`
      max-width: 700px;
      margin: 0 auto;
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 20px;
      padding: 0 10px;
    `}
`;
