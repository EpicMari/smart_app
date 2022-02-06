import React from "react";
import { StyledLi } from "./StyledLi";

const Li = ({ children, roomList__item }) => {
  return <StyledLi roomList__item={roomList__item}>{children}</StyledLi>;
};

export default Li;
