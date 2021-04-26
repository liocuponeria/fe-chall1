import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const Container = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: 32px;

  li {
    cursor: pointer;
    white-space: nowrap;

    & + li {
      margin-left: 24px;
    }
  }

  @media (max-width: 568px) {
    width: 100%;
    max-width: 600px;
    overflow-x: auto;
  }
`;

export default function Navigation() {
  return (
    <Container>
      <Link href="">
        <li>Home</li>
      </Link>
      <Link href="">
        <li>Men Clothing</li>
      </Link>
      <Link href="">
        <li>Women Clothing</li>
      </Link>
      <Link href="">
        <li>Electronics</li>
      </Link>
      <Link href="">
        <li>Jewelery</li>
      </Link>
    </Container>
  );
}
