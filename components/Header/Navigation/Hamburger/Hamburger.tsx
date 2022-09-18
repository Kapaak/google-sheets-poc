import { IconButton } from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";

interface Props {
  toggleOpen: () => void;
}

const Hamburger = ({ toggleOpen }: Props) => {
  return (
    <IconButton
      color="inherit"
      aria-label="open drawer"
      edge="start"
      sx={{ display: { sm: "none" } }}
      onClick={toggleOpen}
    >
      <MenuIcon />
    </IconButton>
  );
};
export default Hamburger;
