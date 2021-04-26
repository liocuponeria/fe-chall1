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

    padding-bottom: 8px;

    & + li {
      margin-left: 24px;
    }

    @media (max-width: 568px) {
      scroll-snap-align: start;
    }
  }

  @media (max-width: 568px) {
    width: calc(100% - 32px);
    max-width: 600px;

    overflow-x: auto;

    scroll-snap-type: x mandatory;

    align-items: flex-start;
    justify-content: start;

    ::-webkit-scrollbar {
      height: 8px;
    }

    ::-webkit-scrollbar-thumb {
      height: 8px;

      background: #444444;
      border: 0.5rem;
      border-radius: 0.5rem;
    }

    ::-webkit-scrollbar-track {
      height: 8px;

      background: #222;
      border-radius: 0.5rem;
    }
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
