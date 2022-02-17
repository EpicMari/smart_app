import React from "react";
import { StyledDiv } from "./StyledDiv";

const Div = ({
  children,
  navigation,
  header,
  timeSlider,
  addRoomTemplate,
  homeTemplate,
  singleRoomHeader,
  singleRoomHeader__wrapperImg,
  singleRoomHeader__nameAndSettings,
  singleRoomHeader__wrapperIcon,
  singleRoomHeader__temperature,
  singleRoomHeader__humidity,
  singleRoomTemplate,
}) => {
  return (
    <StyledDiv
      navigation={navigation}
      header={header}
      timeSlider={timeSlider}
      addRoomTemplate={addRoomTemplate}
      homeTemplate={homeTemplate}
      singleRoomHeader={singleRoomHeader}
      singleRoomHeader__wrapperImg={singleRoomHeader__wrapperImg}
      singleRoomHeader__nameAndSettings={singleRoomHeader__nameAndSettings}
      singleRoomHeader__wrapperIcon={singleRoomHeader__wrapperIcon}
      singleRoomHeader__temperature={singleRoomHeader__temperature}
      singleRoomHeader__humidity={singleRoomHeader__humidity}
      singleRoomTemplate={singleRoomTemplate}
    >
      {children}
    </StyledDiv>
  );
};

export default Div;
