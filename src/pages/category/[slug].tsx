//? Components
import FeaturedCardList from '../../components/Home/Featured/FeaturedCardList';
//? styled-components
import styled from 'styled-components';
//? Functionalities from Next.js
import Head from 'next/head';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/dist/client/router';

type IProduct = {
  id: string;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
};

interface ICategory {
  products: Array<IProduct>;
}

const Container = styled.div`
  width: 100%;
  height: 100%;

  padding: 0 1rem;
`;

export default function Category({ products }: ICategory) {
  const router = useRouter();

  const { slug } = router.query;

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    <>
      <Head>
        <title>Cuponeria Store | {capitalizeFirstLetter(slug)}</title>
        <meta
          property="og:title"
          content={`Cuponeria Store | ${capitalizeFirstLetter(slug)}`}
        />
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content={`Essa sessão é específica para produtos da categoria ${capitalizeFirstLetter(
            slug
          )}.`}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="theme-color" content="#000" />
      </Head>

      <Container>
        <FeaturedCardList allProducts={products} />
      </Container>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { slug } = params;

  let response = await fetch(
    `https://fakestoreapi.com/products/category/${slug}`
  );
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

  return {
    props: {
      products,
    },
  };
};
