import React from "react";
import {
  StyledIconAdd,
  StyledIconArrow,
  StyledIconHome,
  StyledIconHumidity,
  StyledIconRemove,
  StyledIconSettings,
  StyledIconSleep,
  StyledIconTemperature,
} from "./StyledIcon";
import { listTypesIcon } from "../../../utils/listTypes";

const Icon = ({ iconType }) => {
  const _renderIcon = () => {
    switch (iconType) {
      case listTypesIcon.home:
        return <StyledIconHome />;
      case listTypesIcon.add:
        return <StyledIconAdd />;
      case listTypesIcon.remove:
        return <StyledIconRemove />;
      case listTypesIcon.arrow:
        return <StyledIconArrow />;
      case listTypesIcon.settings:
        return <StyledIconSettings />;
      case listTypesIcon.temperature:
        return <StyledIconTemperature />;
      case listTypesIcon.humidity:
        return <StyledIconHumidity />;
      default:
        return <StyledIconSleep />;
    }
  };

  return _renderIcon();
};

export default Icon;
