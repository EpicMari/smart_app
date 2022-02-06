import styled, { css } from "styled-components";

export const StyledLi = styled.li`
  ${({ roomList__item }) =>
    roomList__item &&
    css`
      background-color: ${({ theme }) => theme.colors.white};
      border-radius: 15px;
      padding: 15px;
      min-height: 130px;
    `}
`;
