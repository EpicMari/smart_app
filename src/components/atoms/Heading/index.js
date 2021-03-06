import React from "react";
import { H1, H2, H3, H4, H5, H6 } from "./HeadingStyled";

const Heading = ({
  children,
  headingType,
  header__heading,
  timeSlider__heading,
  roomsListItem__heading,
  singleRoomHeader__heading,
}) => {
  const _renderHeading = () => {
    switch (headingType) {
      case "h1":
        return <H1 header__heading={header__heading}>{children}</H1>;
      case "h2":
        return (
          <H2 singleRoomHeader__heading={singleRoomHeader__heading}>
            {children}
          </H2>
        );
      case "h3":
        return (
          <H3 roomsListItem__heading={roomsListItem__heading}>{children}</H3>
        );
      case "h4":
        return <H4>{children}</H4>;
      case "h5":
        return <H5>{children}</H5>;
      default:
        return <H6 timeSlider__heading={timeSlider__heading}>{children}</H6>;
    }
  };
  return _renderHeading();
};

export default Heading;
