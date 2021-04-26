import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 592px;
  width: 100%;
  height: 100%;

  padding: 1rem;
  gap: 1rem;

  display: flex;
  align-items: center;
  justify-content: center;

  background: #fff;
  border-radius: 0.5rem;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

  img {
    max-width: 288px;
    width: 100%;
    height: 100%;

    object-fit: cover;
    object-position: center;

    @media (max-width: 500px) {
      max-width: unset;
    }
  }

  @media (max-width: 500px) {
    flex-direction: column;
  }
`;

const Content = styled.div`
  max-width: 288px;
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  @media (max-width: 500px) {
    max-width: unset;
  }
`;

const Title = styled.h1`
  font-size: 1.25rem;

  margin-bottom: 0.5rem;

  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;

  @media (max-width: 500px) {
    -webkit-line-clamp: 1;
  }
`;

const Description = styled.p`
  font-size: 1rem;

  margin-bottom: 1rem;

  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;

const Button = styled.a`
  color: #fff;
  font-size: 0.875rem;
  font-family: 'Nunito', sans-serif;
  font-weight: 700;
  text-transform: uppercase;

  width: 100%;
  padding: 0.5rem;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 0.5rem;

  background: red;
`;

export default function DiscoverCard() {
  return (
    <Container>
      <img
        src="https://images.unsplash.com/photo-1512790182412-b19e6d62bc39?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1189&q=80"
        alt="Image"
      />
      <Content>
        <Title>Solid Gold Petite Micropave </Title>
        <Description>
          "Satisfaction Guaranteed. Return or exchange any order within 30
          days.Designed and sold by Hafeez Center in the United States.
          Satisfaction Guaranteed. Return or exchange any order within 30 days."
        </Description>
        <Button href="">Shop</Button>
      </Content>
    </Container>
  );
}
