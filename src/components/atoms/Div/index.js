import React from "react";
import { StyledDiv } from "./StyledDiv";

const Div = ({ children, navigation, header }) => {
  return (
    <StyledDiv navigation={navigation} header={header}>
      {children}
    </StyledDiv>
  );
};

export default Div;
