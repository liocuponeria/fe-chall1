import { useContext } from "react";
import { CategoriesListContext } from "../../context/categoriesContext";
import { RadioInput } from "../RadioInput";
import { Container } from "./style";

export const CategoriesList = () => {
  const { categoriesList } = useContext(CategoriesListContext);

  return (
    <>
      <Container>
        {categoriesList.map((item) => {
          return (
            <RadioInput
              key={item}
              radioName="categorias"
              radioValue={item}
              onChange={() => console.log(item)}
            />
          );
        })}
      </Container>
    </>
  );
};