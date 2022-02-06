import React from "react";
import { StyledDiv } from "./StyledDiv";

const Div = ({
  children,
  navigation,
  header,
  timeSlider,
  addRoomTemplate,
  homeTemplate,
}) => {
  return (
    <StyledDiv
      navigation={navigation}
      header={header}
      timeSlider={timeSlider}
      addRoomTemplate={addRoomTemplate}
      homeTemplate={homeTemplate}
    >
      {children}
    </StyledDiv>
  );
};

export default Div;
