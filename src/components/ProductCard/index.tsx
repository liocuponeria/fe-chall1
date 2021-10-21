import { Container, Content, ContentHeader } from "./style";
import Image from "next/image";

interface IProductCardProps {
  data: {
    id: number;
    title: string;
    description: string;
    price: number;
    category: string;
    image: string;
    rating: {
      rate: number;
      count: number;
    };
  };
}

export const ProductCard: any = ({ data }: IProductCardProps) => {
  const { title, description, image } = data;

  return (
    <>
      <Container>
        <Image width={200} height={200} src={image} />

        <Content>
          <ContentHeader>
            <h1>{title}</h1>
            <button>SHOP</button>
          </ContentHeader>
          <p>{description}</p>
        </Content>
      </Container>
    </>
  );
};
