import React from 'react';
import { GetServerSideProps } from 'next';
import styled from 'styled-components';
import DetailsCard from '../../components/Details/DetailsCard';

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
