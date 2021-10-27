import { createContext, useState } from "react";

interface IProductsProps {
  children: any;
}

interface IProductsList {
  productsList: string[];
  setProductsList: any;
  filtredProductsList: string[];
  setFiltredProductsList: any;
}

export const ProductListContext = createContext({} as IProductsList);

export function ProductListProvider({ children }: IProductsProps) {
  const [productsList, setProductsList] = useState<string[]>([]);
  const [filtredProductsList, setFiltredProductsList] = useState<string[]>(productsList);

  return (
    <ProductListContext.Provider
      value={{
        productsList,
        setProductsList,
        filtredProductsList,
        setFiltredProductsList,
      }}
    >
      {children}
    </ProductListContext.Provider>
  );
}
