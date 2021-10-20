import type { NextPage } from "next";
import LogoImg from "../../assets/logo.png";
import { Container, StaticContent, Logo, Title } from "./style";

export const Header: NextPage = () => {
  return (
    <>
      <Container>
        <StaticContent>
          <Logo width={64} height={64} src={LogoImg} alt="Cuponeria" />
          <Title>
            CUPONERIA STORE
          </Title>
        </StaticContent>

        
      </Container>
    </>
  );
};
