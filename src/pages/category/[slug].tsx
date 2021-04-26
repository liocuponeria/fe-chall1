import { GetServerSideProps } from 'next';
import styled from 'styled-components';
import FeaturedCardList from '../../components/Home/Featured/FeaturedCardList';
import { api } from '../../services/api';

type IProduct = {
  id: string;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
};

interface ICategory {
  products: Array<IProduct>;
}

export default function Category({ products }: ICategory) {
  return (
    <>
      <FeaturedCardList allProducts={products} />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { slug } = params;

  const response = await api.get(`products/category/${slug}`);

  const data = response.data;

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

  return {
    props: {
      products,
    },
  };
};
