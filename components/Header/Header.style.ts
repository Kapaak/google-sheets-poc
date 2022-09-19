import { styled, AppBar as SAppBar, Toolbar as SToolbar } from "@mui/material";

export const AppBar = styled(SAppBar)`
  background-color: var(--main-col);

  ${(props) => props.theme.breakpoints.up("md")} {
    position: absolute;
  }
`;

export const Toolbar = styled(SToolbar)`
  justify-content: space-between;
`;
