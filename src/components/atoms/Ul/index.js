import React from "react";
import { StyledUl } from "./StyledUl";

const Ul = ({ children, roomsList }) => {
  return <StyledUl roomsList={roomsList}>{children}</StyledUl>;
};

export default Ul;
