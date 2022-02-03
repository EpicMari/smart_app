import React from "react";
import { StyledDiv } from "./StyledDiv";

const Div = ({ children, navigation, header, timeSlider, addRoomTemplate }) => {
  return (
    <StyledDiv
      navigation={navigation}
      header={header}
      timeSlider={timeSlider}
      addRoomTemplate={addRoomTemplate}
    >
      {children}
    </StyledDiv>
  );
};

export default Div;
