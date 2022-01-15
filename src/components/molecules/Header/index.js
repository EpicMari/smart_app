import React from "react";
import Button from "../../atoms/Button";
import Div from "../../atoms/Div";
import Heading from "../../atoms/Heading";
import Icon from "../../atoms/Icon";
import { listTypesIcon } from "../../../utils/listTypes";

const Header = ({ headingText }) => {
  const historyBack = () => {
    window.history.back();
  };
  return (
    <Div header>
      <Button header__btn onClick={historyBack}>
        <Icon iconType={listTypesIcon.arrow} />
      </Button>
      <Heading headingType="h1" header__heading>
        {headingText}
      </Heading>
    </Div>
  );
};

export default Header;
