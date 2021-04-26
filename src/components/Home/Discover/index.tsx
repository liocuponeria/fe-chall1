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

export default function Discover() {
  return (
    <Container>
      <Wrapper>
        <Title>Discover</Title>
        <DiscoverCards>
          <DiscoverCard />
          <DiscoverCard />
        </DiscoverCards>
      </Wrapper>
    </Container>
  );
}
