import { Container, Button, Price, Footer } from "./style";
import Image from "next/image";

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
            <Image width={200} height={380} src={image} />
          </a>
        </Button>
        <Price>R$ {price}</Price>

        <Footer>
          <span>{title}</span>
        </Footer>
      </Container>
    </>
  );
};
