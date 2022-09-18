import type { AppProps } from "next/app";
import { GlobalStyles } from "../styles/GlobalStyles";
import Header from "../components/Header/Header";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
