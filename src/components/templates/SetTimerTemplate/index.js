import React from "react";
import Header from "../../molecules/Header";
import TimeSlider from "../../organisms/TimeSlider";

const SetTimerTemplate = () => {
  return (
    <>
      <Header headingText="Set Timer" />
      <TimeSlider />
    </>
  );
};

export default SetTimerTemplate;
