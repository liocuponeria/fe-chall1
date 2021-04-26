import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import LoadingDiscoverCard from '../../Shimmer/LoadingComponents/LoadingDiscoverCard';

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
    max-height: 162px;
    width: 100%;
    height: 100%;

    object-fit: contain;
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

interface IDiscoverCard {
  id: string;
  image: string;
  title: string;
  description: string;
}

export default function DiscoverCard({
  image,
  title,
  description,
  id,
}: IDiscoverCard) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  if (isLoading) {
    return <LoadingDiscoverCard />;
  }

  return (
    <Container>
      <img src={image} alt={title} />
      <Content>
        <Title>{title}</Title>
        <Description>{description}</Description>
        <Button href={`/products/${id}`}>Shop</Button>
      </Content>
    </Container>
  );
}
