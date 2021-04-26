import { GetStaticProps } from 'next';
import Featured from '../components/Home/Featured';
import Discover from './../components/Home/Discover/index';

type IProduct = {
  id: string;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
};

interface IHome {
  discoverProducts: Array<IProduct>;
  allProducts: Array<IProduct>;
}

export default function Home({ allProducts, discoverProducts }: IHome) {
  return (
    <>
      <Discover discoverProducts={discoverProducts} />
      <Featured allProducts={allProducts} />
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  let response = await fetch(`https://fakestoreapi.com/products`);
  let data = await response.json();

  const products = data.map((product) => {
    return {
      id: String(product.id),
      title: product.title,
      price: new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }).format(product.price),
      description: product.description,
      category: product.category,
      image: product.image,
    };
  });

  const discoverProducts = products.slice(0, 2);
  const allProducts = products.slice(2, data.length);

  return {
    props: {
      discoverProducts,
      allProducts,
    },
    revalidate: 60 * 60 * 8,
  };
};
