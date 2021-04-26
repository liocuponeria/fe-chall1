import React from 'react';
import styled from 'styled-components';
import FeaturedCard from './FeaturedCard';

const Container = styled.div`
  gap: 1rem;

  margin-top: 1rem;

  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

  @media (max-width: 568px) {
    flex-wrap: unset;
    align-items: flex-start;
    justify-content: start;

    overflow-x: scroll;

    scroll-snap-type: x mandatory;

    ::-webkit-scrollbar {
      height: 8px;
    }

    ::-webkit-scrollbar-thumb {
      height: 8px;

      background: #818181;
      border: 0.5rem;
      border-radius: 0.5rem;
    }

    ::-webkit-scrollbar-track {
      height: 8px;

      background: #cecece;
      border-radius: 0.5rem;
    }
  }
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

export default function FeaturedCardList({ allProducts }: IFeatured) {
  return (
    <Container>
      {allProducts.map((item) => (
        <FeaturedCard
          key={item.id}
          image={item.image}
          title={item.title}
          price={item.price}
          id={item.id}
        />
      ))}
    </Container>
  );
}
