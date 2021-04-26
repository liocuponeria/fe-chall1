import React from 'react';
import styled from 'styled-components';
import FeaturedCard from './FeaturedCard';

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

  margin-bottom: 1rem;
`;

const FeaturedCards = styled.div`
  gap: 1rem;

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
          <FeaturedCard />
          <FeaturedCard />
          <FeaturedCard />
          <FeaturedCard />
          <FeaturedCard />
          <FeaturedCard />
          <FeaturedCard />
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
