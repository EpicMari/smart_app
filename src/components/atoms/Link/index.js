import React from "react";
import { StyledLink, StyledNavLink } from "./StyledLink";

const Link = ({ children, linkType, to, roomsListItem }) => {
  const _renderLink = () => {
    switch (linkType) {
      case "link":
        return (
          <StyledLink to={to} roomsListItem={roomsListItem}>
            {children}
          </StyledLink>
        );
      default:
        return <StyledNavLink to={to}>{children}</StyledNavLink>;
    }
  };

  return <>{_renderLink()}</>;
};

export default Link;
