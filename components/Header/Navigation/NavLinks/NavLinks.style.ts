import { List, styled } from "@mui/material";
import SNavLink from "../NavLink/NavLink";

export const NavLink = styled(SNavLink)`
  a {
    color: #fff;
  }
`;

export const NavLinks = styled(List)`
  display: none;
  ${(props) => props.theme.breakpoints.up("sm")} {
    display: flex;
  }
`;
