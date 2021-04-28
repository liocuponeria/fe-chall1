import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { useRouter } from 'next/dist/client/router';

const Container = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: 32px;

  li {
    cursor: pointer;
    white-space: nowrap;

    padding-bottom: 8px;

    transition: opacity 0.3s;

    &:hover {
      opacity: 1 !important;
    }

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

const Button = styled.a`
  background: red;

  padding: 0.75rem 1.25rem;

  border-radius: 8px;

  font-size: 1.125rem;

  display: flex;
  align-items: center;
  justify-content: center;

  margin: 0 auto;

  cursor: pointer;

  transition: background 0.3s;

  &:hover {
    background: #b40000;
  }
`;

const ArrowLeft = styled(AiOutlineArrowLeft)`
  width: 1.125rem;
  height: 1.125rem;
  margin-right: 8px;
`;

export default function Navigation() {
  const router = useRouter();

  if (router.asPath === '/' || router.asPath.slice(0, 9) === '/category') {
    return (
      <Container>
        <Link href="/">
          <li
            style={{
              fontWeight: router.asPath === '/' ? 800 : 400,
              opacity: router.asPath === '/' ? 1 : 0.5,
            }}
          >
            Home
          </li>
        </Link>
        <Link href="/category/men's clothing">
          <li
            style={{
              fontWeight:
                router.asPath === "/category/men's%20clothing" ? 800 : 400,
              opacity: router.asPath === "/category/men's%20clothing" ? 1 : 0.5,
            }}
          >
            Men Clothing
          </li>
        </Link>
        <Link href="/category/women's clothing">
          <li
            style={{
              fontWeight:
                router.asPath === "/category/women's%20clothing" ? 800 : 400,
              opacity:
                router.asPath === "/category/women's%20clothing" ? 1 : 0.5,
            }}
          >
            Women Clothing
          </li>
        </Link>
        <Link href="/category/electronics">
          <li
            style={{
              fontWeight: router.asPath === '/category/electronics' ? 800 : 400,
              opacity: router.asPath === '/category/electronics' ? 1 : 0.5,
            }}
          >
            Electronics
          </li>
        </Link>
        <Link href="/category/jewelery">
          <li
            style={{
              fontWeight: router.asPath === '/category/jewelery' ? 800 : 400,
              opacity: router.asPath === '/category/jewelery' ? 1 : 0.5,
            }}
          >
            Jewelery
          </li>
        </Link>
      </Container>
    );
  }

  return (
    <Container>
      <Link href="/">
        <Button>
          <ArrowLeft />
          Back
        </Button>
      </Link>
    </Container>
  );
}
