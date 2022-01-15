import React from "react";
import {
  StyledIconAdd,
  StyledIconArrow,
  StyledIconHome,
  StyledIconRemove,
  StyledIconSleep,
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
      default:
        return <StyledIconSleep />;
    }
  };

  return _renderIcon();
};

export default Icon;
