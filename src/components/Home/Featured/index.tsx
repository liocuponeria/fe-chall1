import React from 'react';
import styled from 'styled-components';
import FeaturedCardList from './FeaturedCardList';

const Container = styled.div`
  width: 100%;
  height: 100%;

  padding: 2rem 1rem;
`;

const Wrapper = styled.div`
  max-width: 1200px;

  margin: 0 auto;
`;

const Title = styled.h1`
  font-size: 2rem;
`;

type IProduct = {
  id: string;
  title: string;
  description: string;
  category: string;
  image: string;
  price: number;
};

interface IFeatured {
  allProducts: Array<IProduct>;
}

export default function Featured({ allProducts }: IFeatured) {
  return (
    <Container>
      <Wrapper>
        <Title>Featured</Title>
        <FeaturedCardList allProducts={allProducts} />
      </Wrapper>
    </Container>
  );
}
