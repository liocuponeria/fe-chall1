import { GlobalStyle } from "../styles/global";
import type { AppProps } from "next/app";
import { CategoriesListProvider } from "../context/categoriesContext";
import { ProductListProvider } from "../context/productsContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <CategoriesListProvider>
        <ProductListProvider>
          <GlobalStyle />
          <Component {...pageProps} />
        </ProductListProvider>
      </CategoriesListProvider>
    </>
  );
}
export default MyApp;
