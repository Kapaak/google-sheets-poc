import { styled, Box, Drawer } from "@mui/material";

export const FlexContainer = styled(Box)``;

export const NavLinksMobile = styled(Drawer)`
  .MuiDrawer-paper {
    width: 100%;
  }
  ${(props) => props.theme.breakpoints.up("sm")} {
    display: none;
  }
`;
