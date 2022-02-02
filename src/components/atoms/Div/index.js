import React from "react";
import { StyledDiv } from "./StyledDiv";

const Div = ({ children, navigation, header, timeSlider }) => {
  return (
    <StyledDiv navigation={navigation} header={header} timeSlider={timeSlider}>
      {children}
    </StyledDiv>
  );
};

export default Div;
