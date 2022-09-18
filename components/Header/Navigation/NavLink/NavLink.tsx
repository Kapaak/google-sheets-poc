import NextLink from "next/link";
import { Link, ListItemText } from "@mui/material";
import { PropsWithChildren } from "react";
//styles
import * as S from "./NavLink.style";

interface Props {
  href: string;
  className?: string;
}

const NavLink = ({ children, href, ...rest }: PropsWithChildren<Props>) => {
  return (
    <S.NavLink {...rest}>
      <ListItemText>
        <NextLink href={href} passHref>
          <Link underline="none">{children}</Link>
        </NextLink>
      </ListItemText>
    </S.NavLink>
  );
};
export default NavLink;
