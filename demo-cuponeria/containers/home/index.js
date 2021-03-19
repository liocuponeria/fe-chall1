import React, { useCallback, useEffect, useState } from 'react';
import Head from 'next/head';
import Header from '../../components/Header';
import ProductCard from '../../components/ProductCard';
import * as styled from './styles';
import FeaturedCard from '../../components/FeaturedCard';
import ButtonList from './ButtonList';
import { useIsMobile } from '../../utils/hooks/isMobile';

export default function Home() {
  const isMobile = useIsMobile();
  const [category, setCategory] = useState('');
  const [products, setProducts] = useState({
    discover: [],
    features: [],
  });

  const getProducts = useCallback(async () => {
    const url = process.env.NEXT_PUBLIC_URL + (category && `/category/${category}`);
    const response = await fetch(url);
    let produtosJson = await response.json();

    if (!produtosJson) return;

    // Preciso alterar a url até a alteração de DNS da api surgir efeito
    // https://github.com/keikaavousi/fake-store-api/issues/8
    produtosJson = produtosJson.map((item) => ({ ...item, image: item.image.replace('fakestoreapi', 'fakestoreapi.herokuapp') }));

    const produtos = {
      discover: produtosJson.splice(0, 2),
      features: produtosJson,
    };
    setProducts(produtos);
  }, [category]);

  useEffect(() => {
    getProducts();
  }, [category]);

  const onClickHeader = (id) => {
    setCategory(id);
  };

  return (
    <styled.Container>
      <Head>
        <title>Home Cuponeria</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header>
        <ButtonList currentCategory={category} onClick={onClickHeader} />
      </Header>
      <styled.Wrapper isMobile={isMobile}>
        <styled.GridContainer>
          <styled.Subtitle isMobile={isMobile}>Discover</styled.Subtitle>
          {products.discover.map((item, index) => (
            <ProductCard
              product={item}
              key={item.title}
              color={index % 2 ? 'secondary' : 'primary'}
            />
          ))}
        </styled.GridContainer>
        <styled.GridContainer>
          <styled.Subtitle>Featured</styled.Subtitle>
          <styled.FeaturedList>
            {products.features.map((item, index) => (
              <FeaturedCard
                product={item}
                key={item.title}
                color={index % 2 ? 'secondary' : 'primary'}
              />
            ))}
          </styled.FeaturedList>
        </styled.GridContainer>
      </styled.Wrapper>
    </styled.Container>
  );
}
