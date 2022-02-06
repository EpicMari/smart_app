import React from "react";
import { StyledParagraph } from "./StyledParagraph";

const Paragraph = ({
  children,
  roomsListItem__members,
  roomsListItem__devices,
}) => {
  return (
    <StyledParagraph
      roomsListItem__members={roomsListItem__members}
      roomsListItem__devices={roomsListItem__devices}
    >
      {children}
    </StyledParagraph>
  );
};

export default Paragraph;
