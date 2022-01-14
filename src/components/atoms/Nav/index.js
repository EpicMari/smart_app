import React from "react";
import { StyledNav } from "./StyledNav";

const Nav = ({ children, navigation__nav }) => {
  return <StyledNav navigation__nav={navigation__nav}>{children}</StyledNav>;
};

export default Nav;
