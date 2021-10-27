import { useContext } from "react";
import axios from "axios";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { CategoriesListContext } from "../context/categoriesContext";
import { ProductListContext } from "../context/productsContext";
import { Header } from "../components/Header";
import { ProductCard } from "../components/ProductCard";
import { FeatureCard } from "../components/FeatureCard";
import type { NextPage } from "next";

interface IHomeProps {
  categories?: string[];
  products?: [];
}

const Home: NextPage | any = ({ categories, products }: IHomeProps) => {
  const { setCategoriesList } = useContext(CategoriesListContext);
  const { productsList, setProductsList } = useContext(ProductListContext);

  setCategoriesList(categories);
  setProductsList(products);

  const slideSettings = {
    dots: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <Header />
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
          <Slider {...slideSettings}>
            {productsList.map((item: any) => (
              <FeatureCard data={item} />
            ))}
          </Slider>
        </FeatureContainer>
      </Content>
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

const Content = styled.div`
  width: 93%;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  margin: 0 auto;
  padding: 0;

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
`;

const FeatureContainer = styled.div`
  width: 100%;
`;

export default Home;
