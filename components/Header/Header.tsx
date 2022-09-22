import Logo from "./Logo/Logo";
import Navigation from "./Navigation/Navigation";
//styles
import * as S from "./Header.style";

const Header = () => {
  return (
    <S.AppBar position="sticky">
      <S.Toolbar>
        <Logo />
        <Navigation />
      </S.Toolbar>
    </S.AppBar>
  );
};

export default Header;
