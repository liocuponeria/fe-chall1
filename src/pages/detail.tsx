import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Header } from "../components/Header";
import type { NextPage } from "next";


const Detail: NextPage | any = () => {

  return (
    <>
      <Header />
      <Content>

      </Content>
    </>
  );
};

const Content = styled.div`
  width: 93%;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  margin: 0 auto;
  padding: 0;

  h1 {
    font-family: "Roboto", sans-serif;
    font-weight: 700;
    font-size: 2.3rem;
    color: #111;
  }
`;

export default Detail;
