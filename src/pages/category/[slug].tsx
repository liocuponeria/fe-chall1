import { GetServerSideProps } from 'next';
import FeaturedCardList from '../../components/Home/Featured/FeaturedCardList';
import styled from 'styled-components';

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

const Container = styled.div`
  width: 100%;
  height: 100%;

  padding: 0 1rem;
`;

export default function Category({ products }: ICategory) {
  return (
    <Container>
      <FeaturedCardList allProducts={products} />
    </Container>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { slug } = params;

  let response = await fetch(
    `https://fakestoreapi.com/products/category/${slug}`
  );
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

  return {
    props: {
      products,
    },
  };
};
