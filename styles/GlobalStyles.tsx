import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *,*::before,*::after{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root{
    --main-col:#2d406a;
  }

  /* html{
    font-size: 62.5%;
  }

  body{
    font-size: 1.6rem;
  } */

`;
