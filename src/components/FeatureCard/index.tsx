import { Container, Button, Footer } from "./style";
import Slider from "react-slick";
import Image from "next/image";

interface IFeatureCardProps {
  data: {
    title: string;
    image: string;
  };
}

export const FeatureCard: any = ({ data }: IFeatureCardProps) => {
  const { title, image } = data;

  return (
    <>
      <Container>
        <Button>
          <Image width={250} height={400} src={image} />
        </Button>

        <Footer>
          <span>{title}</span>
        </Footer>
      </Container>
    </>
  );
};
