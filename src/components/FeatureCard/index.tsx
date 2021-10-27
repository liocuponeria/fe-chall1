import { Container, Button, Price, Footer } from "./style";
import Image from "next/image";
import Link from "next/link";

interface IFeatureCardProps {
  data: {
    id: number;
    title: string;
    image: string;
    price: string;
  };
}

export const FeatureCard: any = ({ data }: IFeatureCardProps) => {
  const { id, title, image, price } = data;

  const formatPrice = price.toString().replace(".", ",");

  return (
    <>
      <Container>
        <Button
          href={{
            pathname: "/detail",
            query: { productid: id },
          }}
        >
          <a>
            <Image width={250} height={400} src={image} />
            <Price>R$ {formatPrice}</Price>
          </a>
        </Button>

        <Footer>
          <span>{title}</span>
        </Footer>
      </Container>
    </>
  );
};
