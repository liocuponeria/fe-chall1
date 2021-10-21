import { GlobalStyle } from "../styles/global";
import type { AppProps } from "next/app";
import { CategoriesListProvider } from "../context/categoriesContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <CategoriesListProvider>
        <GlobalStyle />
        <Component {...pageProps} />
      </CategoriesListProvider>
    </>
  );
}
export default MyApp;
