import React from "react";
import { StyledSpan } from "./StyledSpan";

const Span = ({
  children,
  timeSlider__timeValue,
  timeSlider__label,
  singleRoomHeader__valueBold,
}) => {
  return (
    <StyledSpan
      timeSlider__timeValue={timeSlider__timeValue}
      timeSlider__label={timeSlider__label}
      singleRoomHeader__valueBold={singleRoomHeader__valueBold}
    >
      {children}
    </StyledSpan>
  );
};

export default Span;
