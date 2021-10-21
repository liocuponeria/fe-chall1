import { useContext } from "react";
import axios from "axios";
import styled from "styled-components";
import { CategoriesListContext } from "../context/categoriesContext";
import { Header } from "../components/Header";
import { ProductCard } from "../components/ProductCard";
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
      <Content>
        <h1>DISCOVER</h1>
        <ProductsContainer>
          <ProductCard />
          <ProductCard />
        </ProductsContainer>
      </Content>
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
  width: 93%;

  margin: 0 auto;
  padding: 0;

  box-sizing: border-box;

  h1 {
    font-family: "Roboto", sans-serif;
    font-weight: 700;
    font-size: 2.3rem;
    color: #111;
  }
`;

const ProductsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(5, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;

  div:first-child {
    grid-area: 1 / 1 / 3 / 3;
  }

  div:last-child {
    grid-area: 1 / 4 / 3 / 6;
  }
`;

export default Home;
