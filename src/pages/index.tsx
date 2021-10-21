import { useContext } from "react";
import axios from "axios";
import styled from "styled-components";
import { CategoriesListContext } from "../context/categoriesContext";
import { Header } from "../components/Header";
import type { NextPage } from "next";

interface IHomeProps {
  categories?: string[];
}

const Home: NextPage | any = ({ categories }: IHomeProps) => {
  const { setCategoriesList } = useContext(CategoriesListContext);

  setCategoriesList(categories);

  return (
    <>
      <Header />
      <Content></Content>
    </>
  );
};

//Método do próprio NextJs, serve para armazenar os dados enquanto está sendo gerado o build da aplicação,
//fazendo com que ja tenha os dados da API antes mesmo da página ser renderizada para o User.
Home.getInitialProps = async () => {
  let categories = null; //this line

  try {
    const response = await axios.get(
      `https://fakestoreapi.com/products/categories`
    );
    categories = response.data;
  } catch (err) {
    console.error(err);
  }

  return { categories: categories };
};

const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(5, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
`;

export default Home;
