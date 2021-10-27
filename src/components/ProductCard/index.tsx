import Link from "next/link";
import { Container, Content, ContentHeader, Button } from "./style";
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
  const { id, title, description, image } = data;

  return (
    <>
      <Container>
        <Image width={200} height={200} src={image} />

        <Content>
          <ContentHeader>
            <h1>{title}</h1>
            <Link
              href={{
                pathname: "/detail",
                query: { productid: id },
              }}
            >
              <Button>SHOP</Button>
            </Link>
          </ContentHeader>
          <p>{description}</p>
        </Content>
      </Container>
    </>
  );
};
