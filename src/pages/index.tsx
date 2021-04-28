//? Components
import Featured from '../components/Home/Featured';
import Discover from './../components/Home/Discover/index';
//? Functionalities from Next.js
import Head from 'next/head';
import { GetStaticProps } from 'next';

type IProduct = {
  id: string;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
};

interface IHome {
  discoverProducts: Array<IProduct>;
  allProducts: Array<IProduct>;
}

export default function Home({ allProducts, discoverProducts }: IHome) {
  return (
    <>
      <Head>
        <title>Cuponeria Store | Home</title>
        <meta property="og:title" content="Cuponeria Store | Home" />
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="Este site foi desenvolvido a partir de um teste para a vaga de Front-end que foi aplicado pela empresa Cuponeria."
        />
        <link rel="canonical" href="http://localhost:3000/" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="theme-color" content="#000" />
      </Head>

      <Discover discoverProducts={discoverProducts} />
      <Featured allProducts={allProducts} />
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  let response = await fetch(`https://fakestoreapi.com/products`);
  let data = await response.json();

  const products = data.map((product) => {
    return {
      id: String(product.id),
      title: product.title,
      price: new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }).format(product.price),
      description: product.description,
      category: product.category,
      image: product.image,
    };
  });

  const discoverProducts = products.slice(0, 2);
  const allProducts = products.slice(2, data.length);

  return {
    props: {
      discoverProducts,
      allProducts,
    },
    revalidate: 60 * 60 * 8,
  };
};
