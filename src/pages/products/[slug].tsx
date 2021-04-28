import React from 'react';
//? Components
import DetailsCard from '../../components/Details/DetailsCard';
//? styled-components
import styled from 'styled-components';
//? Functionalities from Next.js
import Head from 'next/head';
import { GetServerSideProps } from 'next';

const Container = styled.div`
  width: 100%;
  height: 100%;

  padding: 2rem 1rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  max-width: 800px;
`;

const Title = styled.h1`
  font-size: 2rem;

  margin-bottom: 1rem;
`;

interface IProductDetail {
  product: {
    id: string;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
  };
}

export default function ProductDetail({ product }: IProductDetail) {
  return (
    <>
      <Head>
        <title>Cuponeria Store | {product.title} </title>
        <meta
          property="og:title"
          content={`Cuponeria Store | ${product.title}`}
        />
        <meta name="robots" content="index, follow" />
        <meta name="description" content={product.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="theme-color" content="#000" />
      </Head>

      <Container>
        <Wrapper>
          <Title>Details</Title>
          {product && (
            <DetailsCard
              key={product.id}
              image={product.image}
              title={product.title}
              price={product.price}
              description={product.description}
            />
          )}
        </Wrapper>
      </Container>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { slug } = params;

  let response = await fetch(`https://fakestoreapi.com/products/${slug}`);
  let data = await response.json();

  const product = {
    id: String(data.id),
    title: data.title,
    price: new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(data.price),
    description: data.description,
    category: data.category,
    image: data.image,
  };

  return {
    props: {
      product,
    },
  };
};
