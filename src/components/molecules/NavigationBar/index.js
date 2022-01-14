import React from "react";
import Div from "../../atoms/Div";
import Nav from "../../atoms/Nav";
import Link from "../../atoms/Link";
import { routes } from "../../../routes";
import Icon from "../../atoms/Icon";
import { listTypesIcon } from "../../../utils/listTypes";

const NavigationBar = ({ children }) => {
  return (
    <Div navigation>
      {children}
      <Nav navigation__nav>
        <Link exact to={routes.home}>
          <Icon iconType={listTypesIcon.home} />
        </Link>
        <Link to={routes.addRoom}>
          <Icon iconType={listTypesIcon.add} />
        </Link>
        <Link to={routes.removeRoom}>
          <Icon iconType={listTypesIcon.remove} />
        </Link>
        <Link to={routes.setTimer}>
          <Icon />
        </Link>
      </Nav>
    </Div>
  );
};

export default NavigationBar;
