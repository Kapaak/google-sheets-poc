import { IconButton } from "@mui/material";
//icons
import { Close as CloseIcon } from "@mui/icons-material";

interface Props {
  toggleOpen: () => void;
}

const Close = ({ toggleOpen }: Props) => {
  return (
    <IconButton onClick={toggleOpen}>
      <CloseIcon />
    </IconButton>
  );
};
export default Close;
