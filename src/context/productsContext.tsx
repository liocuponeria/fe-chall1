import { createContext, useState } from "react";

interface IProductsProps {
  children: any,
}

interface IProductsList {
  productsList: string[],
  setProductsList: any
}

export const ProductListContext = createContext({} as IProductsList);

export function ProductListProvider({ children }: IProductsProps) {
  const [productsList, setProductsList] = useState<string[]>([]);

  return (
    <ProductListContext.Provider
      value={{
        productsList,
        setProductsList,
      }}
    >
      {children}
    </ProductListContext.Provider>
  );
}
