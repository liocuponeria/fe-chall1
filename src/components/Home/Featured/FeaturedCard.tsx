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
    max-width: 179px;
    width: 100%;
    height: 229px;
    height: 100%;

    padding: 1.5rem;

    object-fit: contain;
    object-position: center;
  }

  @media (max-width: 568px) {
    margin-bottom: 16px;

    min-width: 227px;

    scroll-snap-align: start;
  }
`;

const Title = styled.h1`
  width: 100%;

  padding: 1rem;

  font-size: 1rem;
  font-weight: 600;

  background: #000;
  color: #fff;

  text-align: center;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
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

interface IFeaturedCard {
  id: string;
  image: string;
  title: string;
  price: number;
}

export default function FeaturedCard({
  image,
  title,
  price,
  id,
}: IFeaturedCard) {
  return (
    <Container>
      <img src={image} alt={title} />
      <Title>{title}</Title>
      <Price>{price}</Price>
    </Container>
  );
}
