import React from "react";
import { StyledSpan } from "./StyledSpan";

const Span = ({ children, timeSlider__timeValue, timeSlider__label }) => {
  return (
    <StyledSpan
      timeSlider__timeValue={timeSlider__timeValue}
      timeSlider__label={timeSlider__label}
    >
      {children}
    </StyledSpan>
  );
};

export default Span;
