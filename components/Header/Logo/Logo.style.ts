import {
  styled,
  Typography as STypography,
  Link as SLink,
} from "@mui/material";

export const Logo = styled(STypography)<{ component: string }>`
  padding: 1.4rem 0;
`;

export const Link = styled(SLink)`
  color: inherit;
`;
