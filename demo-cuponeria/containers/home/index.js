import React, { useCallback, useEffect, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Header from '../../components/Header';
import ProductCard from '../../components/ProductCard';
import * as styles from './styles';
import FeaturedCard from '../../components/FeaturedCard';

// TODO: melhorar a estrutura desse componente (tá meio gambiarra)
export default function Home() {
  const [products, setProducts] = useState({
    discover: [],
    features: [],
  });

  const getProducts = useCallback(async () => {
    try {
      const response = await fetch('https://fakestoreapi.com/products');
      const produtosJson = await response.json();

      const produtos = {
        discover: produtosJson.splice(0, 2),
        features: produtosJson,
      };
      setProducts(produtos);
    } catch (error) {
      // TODO: Fazer alguma coisa
    }
  }, []);

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div style={{ margin: '50px', backgroundColor: '#F3F2EE' }}>
        <styles.Subtitle>Discover</styles.Subtitle>
        <styles.DiscoverList>
          {products.discover.map((item, index) => (
            <ProductCard
              product={item}
              color={index % 2 ? 'secondary' : 'primary'}
            />
          ))}
        </styles.DiscoverList>
        <styles.Subtitle>Featured</styles.Subtitle>
        <styles.DiscoverList>
          {products.features.map((item, index) => (
            <FeaturedCard
              product={item}
              color={index % 2 ? 'secondary' : 'primary'}
            />
          ))}
        </styles.DiscoverList>
      </div>
    </div>
  );
}
