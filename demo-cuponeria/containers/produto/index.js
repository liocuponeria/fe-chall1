import React, { useContext } from 'react';
import Link from 'next/link';
import { ThemeContext } from 'styled-components';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import Header from '../../components/Header';
import * as styled from './styles';
import ProductCard from '../../components/ProductCard';
import LeftArrow from '../../components/icons/LeftArrow';
import Button from '../../components/Button';

export default function ProductPage({ product }) {
  const themeContext = useContext(ThemeContext);
  const router = useRouter();

  return (
    <div>
      <Header>
        <Button onClick={() => router.push('/')} textColor="black" bgColor={themeContext.colors.yellow}>
          <styled.BackButton>
            <LeftArrow />
            Voltar
          </styled.BackButton>
        </Button>
      </Header>
      <styled.Subtitle>Detalhes</styled.Subtitle>
      <styled.Center>
        <ProductCard product={product} color="secondary" large />
      </styled.Center>
    </div>
  );
}

export async function getServerSideProps({ params }) {
  const response = await fetch(`https://fakestoreapi.com/products/${params.id}`);
  const data = await response.json();

  if (!data) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  return {
    props: { product: data },
  };
}

ProductPage.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    price: PropTypes.number,
    description: PropTypes.string,
    category: PropTypes.string,
    image: PropTypes.string,
  }),
};

ProductPage.defaultProps = {
  product: {
    id: 0,
    title: '',
    price: 0,
    description: '',
    category: '',
    image: '',
  },
};
