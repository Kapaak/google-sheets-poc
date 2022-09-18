import { css } from "styled-components";

//not yet working :)
export const breakpoints = (props: any, dimension: string) => css`
  ${props.theme.breakpoints.up("sm")} {
    display: flex;
  }
`;
