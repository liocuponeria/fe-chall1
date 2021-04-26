import React from 'react';
import styled from 'styled-components';
import DiscoverCard from './DiscoverCard';

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
  max-width: 1200px;
`;

const Title = styled.h1`
  font-size: 2rem;

  margin-bottom: 1rem;
`;

const DiscoverCards = styled.div`
  width: 100%;
  height: 100%;

  gap: 1rem;

  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;

type IProduct = {
  id: string;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
};

interface IDiscover {
  discoverProducts: Array<IProduct>;
}

export default function Discover({ discoverProducts }: IDiscover) {
  return (
    <Container>
      <Wrapper>
        <Title>Discover</Title>
        <DiscoverCards>
          {discoverProducts.map((item) => (
            <DiscoverCard
              key={item.id}
              image={String(item.image)}
              title={item.title}
              description={item.description}
              id={item.id}
            />
          ))}
        </DiscoverCards>
      </Wrapper>
    </Container>
  );
}
