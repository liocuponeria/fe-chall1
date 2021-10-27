import { createContext, useState } from "react";

interface IProductsProps {
  children: any;
}

interface IProductsList {
  productsList: string[];
  setProductsList: any;
  filtredProductsList: string[];
  setFiltredProductsList: any;
  selectedProductId: number;
  setSelectedProductId: any;
}

export const ProductListContext = createContext({} as IProductsList);

export function ProductListProvider({ children }: IProductsProps) {
  const [productsList, setProductsList] = useState<string[]>([]);
  const [filtredProductsList, setFiltredProductsList] =
    useState<string[]>(productsList);
  const [selectedProductId, setSelectedProductId] = useState<number>(0);

  return (
    <ProductListContext.Provider
      value={{
        productsList,
        setProductsList,
        filtredProductsList,
        setFiltredProductsList,
        selectedProductId,
        setSelectedProductId
      }}
    >
      {children}
    </ProductListContext.Provider>
  );
}
