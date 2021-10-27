import LogoImg from "../../assets/logo.png";
import { CategoriesList } from "../CategoriesList";
import { Container, StaticContent, Logo, Title } from "./style";
import Link from "next/link";

export const Header = ({ pageName }: any) => {
  return (
    <>
      <Container>
        <StaticContent>
          <Link href="/">
            <a>
              <Logo width={64} height={64} src={LogoImg} alt="Cuponeria" />
            </a>
          </Link>
          <Title>CUPONERIA STORE</Title>
        </StaticContent>
        {pageName === "home" ? <CategoriesList /> : null}
      </Container>
    </>
  );
};
