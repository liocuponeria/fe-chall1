import { Container, Button, Price, Footer } from "./style";
import Image from "next/image";

interface IFeatureCardProps {
  data: {
    title: string;
    image: string;
    price: string;
  };
}

export const FeatureCard: any = ({ data }: IFeatureCardProps) => {
  const { title, image, price } = data;

  const formatPrice = price.toString().replace(".", ",");

  return (
    <>
      <Container>
        <Button>
          <Image width={250} height={400} src={image} />
          <Price>R$ {formatPrice}</Price>
        </Button>

        <Footer>
          <span>{title}</span>
        </Footer>
      </Container>
    </>
  );
};
