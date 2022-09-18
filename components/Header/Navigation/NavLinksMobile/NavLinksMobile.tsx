//components
import NavLink from "../NavLink/NavLink";
import Logo from "../../Logo/Logo";
import Close from "../Close/Close";
//styles
import * as S from "./NavLinksMobile.style";
import { Box, List } from "@mui/material";

interface Props {
  toggleOpen: () => void;
  isOpened: boolean;
}

const NavLinksMobile = ({ toggleOpen, isOpened }: Props) => {
  return (
    <S.NavLinksMobile
      variant="temporary"
      open={isOpened}
      onClose={toggleOpen}
      ModalProps={{ keepMounted: true }}
      anchor="right"
      // PaperProps={{ sx: { width: "100%" } }}
    >
      <Box padding="0 20px">
        <S.FlexContainer
          flexDirection="row"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <Logo />
          <Close toggleOpen={toggleOpen} />
        </S.FlexContainer>
        <List>
          <NavLink href="/">Domů</NavLink>
          <NavLink href="/prihlasky">Přihlášky</NavLink>
          <NavLink href="/kontakt">Kontakt</NavLink>
        </List>
      </Box>
    </S.NavLinksMobile>
  );
};
export default NavLinksMobile;
