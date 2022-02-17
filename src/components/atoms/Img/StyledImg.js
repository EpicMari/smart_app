import styled, { css } from "styled-components";

export const StyledImg = styled.img`
  ${({ singleRoomHeader__image }) =>
    singleRoomHeader__image &&
    css`
      filter: invert(100%) sepia(0%) saturate(24%) hue-rotate(114deg)
        brightness(108%) contrast(108%);
      height: 30px;
    `}
`;
