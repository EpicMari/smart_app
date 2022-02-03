import React from "react";
import { StyledInput } from "./StyledInput";

const Input = ({ children, type, name, id, placeholder }) => {
  return (
    <StyledInput type={type} name={name} id={id} placeholder={placeholder}>
      {children}
    </StyledInput>
  );
};

export default Input;
