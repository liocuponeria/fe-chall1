import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 100%;

  padding: 2rem;
  gap: 2rem;

  display: flex;
  align-items: center;
  justify-content: center;

  background: #fff;
  border-radius: 0.5rem;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

  img {
    max-width: 200px;
    max-height: 200px;
    width: 100%;
    height: 100%;

    object-fit: contain;
    object-position: center;
  }

  @media (max-width: 668px) {
    flex-direction: column;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

const Row = styled.div`
  width: 100%;

  gap: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;

    margin-bottom: 2rem;
  }
`;

const Title = styled.h1`
  font-size: 2rem;

  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;

  @media (max-width: 668px) {
    text-align: center;
  }
`;

const Price = styled.div`
  padding: 1rem 2rem;

  display: flex;
  align-items: center;
  justify-content: center;

  background: red;
  border-radius: 0.5rem;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

  font-size: 1.5rem;
  color: #fff;

  @media (max-width: 768px) {
    width: 100%;

    flex-direction: column;
  }
`;

const Description = styled.p`
  font-size: 1rem;

  line-height: 1.6;
`;

interface IDetailsCard {
  image: string;
  title: string;
  price: number;
  description: string;
}

export default function DetailsCard({
  image,
  title,
  price,
  description,
}: IDetailsCard) {
  return (
    <Container>
      <img src={image} alt={title} />
      <Content>
        <Row>
          <Title>{title}</Title>
          <Price>{price}</Price>
        </Row>
        <Description>{description}</Description>
      </Content>
    </Container>
  );
}
