import { useContext, useMemo } from "react";
import { CategoriesListContext } from "../../context/categoriesContext";
import { RadioInput } from "../RadioInput";
import { Container } from "./style";
import type { NextPage } from "next";

interface ICategoriesListProps {
  categoriesData: string[];
}

export const CategoriesList = () => {
  const { categoriesList } = useContext(CategoriesListContext);

  return (
    <>
      <Container>
        {categoriesList.map((item) => {
          return <RadioInput key={item} radioName={item} radioValue={item} />;
        })}
      </Container>
    </>
  );
};
