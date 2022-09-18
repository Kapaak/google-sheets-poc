//styles
import NextLink from "next/link";
import * as S from "./Logo.style";

const Logo = () => {
  return (
    <S.Logo variant="h6" component="div">
      <NextLink href="/" passHref>
        <S.Link underline="none">POC</S.Link>
      </NextLink>
    </S.Logo>
  );
};
export default Logo;
