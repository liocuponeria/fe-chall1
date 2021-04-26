import React from 'react';
import styled from 'styled-components';
import FeaturedCard from './FeaturedCard';

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

  margin: 0 auto;
`;

const Title = styled.h1`
  font-size: 2rem;

  margin-bottom: 1rem;
`;

const FeaturedCards = styled.div`
  gap: 1rem;

  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

export default function Featured() {
  return (
    <Container>
      <Wrapper>
        <Title>Featured</Title>
        <FeaturedCards>
          <FeaturedCard />
          <FeaturedCard />
          <FeaturedCard />
          <FeaturedCard />
          <FeaturedCard />
          <FeaturedCard />
          <FeaturedCard />
        </FeaturedCards>
      </Wrapper>
    </Container>
  );
}
