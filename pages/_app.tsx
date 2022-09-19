import type { AppProps } from "next/app";
import { GlobalStyles } from "../styles/GlobalStyles";
import Header from "../components/Header/Header";
import { StylesProvider, createGenerateClassName } from "@mui/styles";

//fix className mismatch
const generateClassName = createGenerateClassName({
  productionPrefix: "c",
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <StylesProvider generateClassName={generateClassName}>
      <GlobalStyles />
      <Header />
      <Component {...pageProps} />
    </StylesProvider>
  );
}

export default MyApp;
