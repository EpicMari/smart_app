import React from "react";
import { StyledParagraph } from "./StyledParagraph";

const Paragraph = ({
  children,
  roomsListItem__members,
  roomsListItem__devices,
  singleRoomHeader__text,
  singleRoomHeader__iconDescription,
}) => {
  return (
    <StyledParagraph
      roomsListItem__members={roomsListItem__members}
      roomsListItem__devices={roomsListItem__devices}
      singleRoomHeader__text={singleRoomHeader__text}
      singleRoomHeader__iconDescription={singleRoomHeader__iconDescription}
    >
      {children}
    </StyledParagraph>
  );
};

export default Paragraph;
