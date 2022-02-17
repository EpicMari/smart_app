import React from "react";
import { StyledImg } from "./StyledImg";

const Img = ({ children, src, alt, singleRoomHeader__image }) => {
  return (
    <StyledImg
      src={src}
      alt={alt}
      singleRoomHeader__image={singleRoomHeader__image}
    >
      {children}
    </StyledImg>
  );
};

export default Img;
