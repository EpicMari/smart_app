import React from "react";
import { StyledButton } from "./ButtonStyled";

const Button = ({ children, onClick, header__btn }) => {
  return (
    <StyledButton onClick={onClick} header__btn={header__btn}>
      {children}
    </StyledButton>
  );
};

export default Button;
