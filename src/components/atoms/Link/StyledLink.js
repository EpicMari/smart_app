import { Link, NavLink } from "react-router-dom";
import styled, { css } from "styled-components";

export const StyledNavLink = styled(NavLink)``;

export const StyledLink = styled(Link)`
  ${({ roomsListItem }) =>
    roomsListItem &&
    css`
      height: 100%;
      width: 100%;
      display: grid;
      align-items: center;
    `}
`;
