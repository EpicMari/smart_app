import styled, { css } from "styled-components";

export const StyledParagraph = styled.p`
  ${({ roomsListItem__members }) =>
    roomsListItem__members &&
    css`
      font-size: ${({ theme }) => theme.fontSizes.xxs};
      color: ${({ theme }) => theme.colors.grey};
      margin-bottom: 20px;
    `}

  ${({ roomsListItem__devices }) =>
    roomsListItem__devices &&
    css`
      color: ${({ theme }) => theme.colors.orange};
      font-weight: 600;
      font-size: ${({ theme }) => theme.fontSizes.xs};
      margin-bottom: 15px;
    `}
`;
