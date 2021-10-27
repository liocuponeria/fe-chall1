import Head from "next/head";
import { useContext, useMemo } from "react";
import axios from "axios";
import styled, { keyframes } from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CategoriesListContext } from "../context/categoriesContext";
import { ProductListContext } from "../context/productsContext";
import { Header } from "../components/Header";
import { ProductCard } from "../components/ProductCard";
import { FeatureCard } from "../components/FeatureCard";
import { Carousel } from "../components/Carousel";
import { Footer } from "../components/FeatureCard/style";
import type { NextPage } from "next";
import Link from "next/link";

interface IHomeProps {
  categories?: string[];
  products?: [];
}

const Home: NextPage | any = ({ categories, products }: IHomeProps) => {
  const { setCategoriesList, category } = useContext(CategoriesListContext);
  const {
    productsList,
    setProductsList,
    filtredProductsList,
    setFiltredProductsList,
  } = useContext(ProductListContext);

  setCategoriesList(categories);
  setProductsList(products);

  const filterTest = useMemo(() => {
    function searchByCategory(product: any) {
      if (product.category === category) return product;
    }

    let filteredProducts;

    return (filteredProducts = productsList.filter(searchByCategory));
  }, [category]);

  setFiltredProductsList(filterTest);

  return (
    <>
      <Head>
        <title>Home | Cuponeria Store</title>
      </Head>
      <Header pageName="home" />
      <Content>
        <h1>DISCOVER</h1>
        <ProductsContainer>
          {productsList
            .filter((_, index) => index <= 1)
            .map((item) => (
              <ProductCard data={item} />
            ))}
        </ProductsContainer>

        <h1>FEATURED</h1>
        <FeatureContainer>
          <Carousel>
            {filtredProductsList.length > 0
              ? filtredProductsList.map((item: any) => (
                  <FeatureCard data={item} />
                ))
              : productsList.map((item: any) => <FeatureCard data={item} />)}
          </Carousel>
        </FeatureContainer>
      </Content>
      <Footer />
    </>
  );
};

//Método do próprio NextJs, serve para armazenar os dados enquanto está sendo gerado o build da aplicação,
//fazendo com que ja tenha os dados da API antes mesmo da página ser renderizada para o User.
Home.getInitialProps = async () => {
  let categories = null;
  let products = null;

  try {
    //Puxando as categorias disponiveis na API:
    const categoriesResponse = await axios.get(
      `https://fakestoreapi.com/products/categories`
    );
    categories = categoriesResponse.data;

    //Puxando as categorias disponiveis na API:
    const productsResponse = await axios.get(
      `https://fakestoreapi.com/products`
    );
    products = productsResponse.data;
  } catch (err) {
    console.error(err);
  }

  return { categories: categories, products: products };
};

const scaleOnInit = keyframes`
  0% {
    transform: scale(0, 0);
    opacity: 0;
  },

  50% {
    transform: scale(1.3, 1.3);
    opacity: 0.5;
  }

  100% {
    transform: scale(1, 1);
    opacity: 1;
  }
`;

const Content = styled.div`
  width: 93%;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  margin: 0 auto;
  padding: 0;

  margin-bottom: 10%;

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

    @media (max-width: 1200px) {
      grid-area: 1 / 1 / 3 / 6;
    }
  }

  div:last-child {
    grid-area: 1 / 4 / 3 / 6;

    @media (max-width: 1200px) {
      grid-area: 3 / 1 / 5 / 6;
    }
  }

  margin-bottom: -20%;

  animation: ${scaleOnInit} 0.8s linear alternate;
`;

const FeatureContainer = styled.div`
  width: 100%;
  animation: ${scaleOnInit} 1.4s linear alternate;
`;

export default Home;
