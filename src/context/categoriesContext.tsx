import { createContext, useState } from "react";

interface ICategoriesProps {
  children: any;
}

interface ICategoriesList {
  categoriesList: string[];
  setCategoriesList: any;
  category: string;
  setCategory: any;
}

export const CategoriesListContext = createContext({} as ICategoriesList);

export function CategoriesListProvider({ children }: ICategoriesProps) {
  const [categoriesList, setCategoriesList] = useState<string[]>([]);
  const [category, setCategory] = useState<string>("");

  return (
    <CategoriesListContext.Provider
      value={{
        categoriesList,
        setCategoriesList,
        category,
        setCategory,
      }}
    >
      {children}
    </CategoriesListContext.Provider>
  );
}
