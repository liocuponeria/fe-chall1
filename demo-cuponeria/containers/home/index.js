import React, { useCallback, useEffect, useState } from 'react';
import Head from 'next/head';
import Header from '../../components/Header';
import ProductCard from '../../components/ProductCard';
import * as styles from './styles';
import FeaturedCard from '../../components/FeaturedCard';
import ButtonList from './ButtonList';

// TODO: melhorar a estrutura desse componente (tá meio gambiarra)
export default function Home() {
  const [category, setCategory] = useState('');
  const [products, setProducts] = useState({
    discover: [],
    features: [],
  });

  const getProducts = useCallback(async () => {
    const url = category ? `https://fakestoreapi.com/products/category/${category}` : 'https://fakestoreapi.com/products';
    const response = await fetch(url);
    const produtosJson = await response.json();

    if (!produtosJson) return;

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
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header>
        <ButtonList currentCategory={category} onClick={onClickHeader} />
      </Header>
      <div style={{ margin: '50px', backgroundColor: '#F3F2EE' }}>
        <styles.Subtitle>Discover</styles.Subtitle>
        <styles.DiscoverList>
          {products.discover.map((item, index) => (
            <ProductCard
              product={item}
              key={item.title}
              color={index % 2 ? 'secondary' : 'primary'}
            />
          ))}
        </styles.DiscoverList>
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
      </div>
    </div>
  );
}
