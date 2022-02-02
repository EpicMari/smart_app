import React from "react";
import Slider from "@mui/material/Slider";
import Span from "../../atoms/Span";
import Div from "../../atoms/Div";
import Heading from "../../atoms/Heading";

const TimeSlider = () => {
  const [value, setValue] = React.useState(5);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <Div timeSlider>
      <Heading timeSlider__heading>Turn off devices after</Heading>
      <Span timeSlider__timeValue>{value === 0 ? "OFF" : value}</Span>
      <Span timeSlider__label>Minutes</Span>
      <Slider
        style={{ width: "200px", color: "#f88340" }}
        value={value}
        min={0}
        max={60}
        step={1}
        onChange={handleChange}
        aria-labelledby="non-linear-slider"
      />
    </Div>
  );
};

export default TimeSlider;
