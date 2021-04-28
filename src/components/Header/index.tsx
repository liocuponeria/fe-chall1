import React from 'react';
import Logo from './Logo';
import styled from 'styled-components';
import Navigation from './Navigation';

const Container = styled.div`
  width: 100%;
  height: 100%;

  padding: 2rem 1rem;

  background: #000;

  color: #fff;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default function Header() {
  return (
    <Container>
      <Logo />
      <Navigation />
    </Container>
  );
}
