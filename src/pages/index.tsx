import { useContext, useCallback } from "react";
import axios from "axios";
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
    </>
  );
};

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

export default Home;
