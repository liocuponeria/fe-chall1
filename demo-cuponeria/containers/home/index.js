import React, { useCallback, useEffect, useState } from 'react';
import Head from 'next/head';
import Header from '../../components/Header';
import ProductCard from '../../components/ProductCard';
import * as styles from './styles';
import FeaturedCard from '../../components/FeaturedCard';
import ButtonList from './ButtonList';
import { useIsMobile } from '../../utils/hooks/isMobile';

// TODO: melhorar a estrutura desse componente (tá meio gambiarra)
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
    <styles.Container>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header>
        <ButtonList currentCategory={category} onClick={onClickHeader} />
      </Header>
      <styles.Wrapper isMobile={isMobile}>
        <styles.GridContainer>
          <styles.Subtitle isMobile={isMobile}>Discover</styles.Subtitle>
          {products.discover.map((item, index) => (
            <ProductCard
              product={item}
              key={item.title}
              color={index % 2 ? 'secondary' : 'primary'}
            />
          ))}
        </styles.GridContainer>
        <styles.GridContainer>
          <styles.Subtitle>Featured</styles.Subtitle>
          <styles.FeaturedList>
            {products.features.map((item, index) => (
              <FeaturedCard
                product={item}
                key={item.title}
                color={index % 2 ? 'secondary' : 'primary'}
              />
            ))}
          </styles.FeaturedList>
        </styles.GridContainer>
      </styles.Wrapper>
    </styles.Container>
  );
}
