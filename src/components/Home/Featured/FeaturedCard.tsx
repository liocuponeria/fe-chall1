import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 227px;
  height: 327px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background: #fff;
  border-radius: 0.5rem;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

  border-radius: 0.5rem;
  overflow: hidden;

  position: relative;

  img {
    width: 100%;
    height: 100%;

    padding: 1.5rem;

    object-fit: cover;
    object-position: center;
  }
`;

const Title = styled.h1`
  width: 100%;

  padding: 1rem 0;

  font-size: 1rem;
  font-weight: 600;

  background: #000;
  color: #fff;

  text-align: center;

  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
`;

const Price = styled.div`
  color: #fff;
  font-size: 0.875rem;
  font-family: 'Nunito', sans-serif;
  font-weight: 700;
  text-transform: uppercase;

  padding: 0.5rem;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 0.5rem;

  background: red;

  position: absolute;
  bottom: 64px;
  right: 24px;
`;

export default function FeaturedCard() {
  return (
    <Container>
      <img
        src="https://images.prismic.io/worldtripnextjs/24b1e69a-a7ca-4b36-b607-3c5b0cd9364c_image+3.png?auto=compress,format"
        alt="Image"
      />
      <Title>Mens Casual Slim Fit</Title>
      <Price>R$ 15,99</Price>
    </Container>
  );
}
