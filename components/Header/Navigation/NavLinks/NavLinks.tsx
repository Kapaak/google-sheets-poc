import * as S from "./NavLinks.style";

const NavLinks = () => {
  return (
    <S.NavLinks>
      <S.NavLink href="/">Domů</S.NavLink>
      <S.NavLink href="/prihlasky">Přihlášky</S.NavLink>
      <S.NavLink href="/kontakt">Kontakt</S.NavLink>
    </S.NavLinks>
  );
};

export default NavLinks;
