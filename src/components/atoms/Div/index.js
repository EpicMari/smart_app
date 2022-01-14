import React from "react";
import { StyledDiv } from "./StyledDiv";

const Div = ({ children, navigation }) => {
  return <StyledDiv navigation={navigation}>{children}</StyledDiv>;
};

export default Div;
