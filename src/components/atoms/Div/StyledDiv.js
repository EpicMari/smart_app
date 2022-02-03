import styled, { css } from "styled-components";

export const StyledDiv = styled.div`
  ${({ navigation }) =>
    navigation &&
    css`
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;
      margin: 0 auto;
      height: 80px;
      max-width: 1000px;
      border-radius: 25px 25px 0 0;
      box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
        rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
      background-color: ${({ theme }) => theme.colors.white};
    `}

  ${({ header }) =>
    header &&
    css`
      display: grid;
      grid-template-rows: 80px;
      height: 80px;
      max-width: 1000px;
      background-color: ${({ theme }) => theme.colors.orange};
      border-radius: 0 0 25px 25px;
      box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
        rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
    `}

    ${({ timeSlider }) =>
    timeSlider &&
    css`
      display: grid;
      place-content: center;
      height: calc(100vh - 160px);
      width: 100vw;
    `}

    ${({ addRoomTemplate }) =>
    addRoomTemplate &&
    css`
      height: 100vh;
      width: 100vw;
      background-color: ${({ theme }) => theme.colors.lightGrey};
    `}
`;
