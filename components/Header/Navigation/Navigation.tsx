import { useState } from "react";
import Hamburger from "./Hamburger/Hamburger";
import NavLinks from "./NavLinks/NavLinks";
import NavLinksMobile from "./NavLinksMobile/NavLinksMobile";

const Navigation = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prev) => !prev);
  };

  return (
    <nav>
      <NavLinks />
      <NavLinksMobile toggleOpen={handleDrawerToggle} isOpened={mobileOpen} />
      <Hamburger toggleOpen={handleDrawerToggle} />
    </nav>
  );
};
export default Navigation;
