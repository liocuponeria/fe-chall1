import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";
import axios from "axios";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import type { NextPage } from "next";

import { Header } from "../components/Header";

interface IDetailProps {
  product: { title: string; price: number; description: string; image: string };
}

const Detail: NextPage | any = ({ product }: IDetailProps) => {
  const { title, description, price, image } = product;

  const formatedPrice = price.toString().replace(".", ",");

  return (
    <>
      <Head>
        <title>Product | Detail</title>
      </Head>
      <Header />
      <Container>
        <h1>DETAILS</h1>

        <Content>
          <Image src={image} width={300} height={300} />

          <Infos>
            <div>
              <h2>{title}</h2>
              <button>R$ {formatedPrice}</button>
            </div>
            <p>{description}</p>
          </Infos>
        </Content>
      </Container>
    </>
  );
};

Detail.getInitialProps = async ({ query: productid }: any) => {
  let product = null;

  let productIdentification = parseInt(productid.productid);

  try {
    //Puxando as categorias disponiveis na API:
    const productResponse = await axios.get(
      `https://fakestoreapi.com/products/${productIdentification}`
    );
    product = productResponse.data;
  } catch (err) {
    console.error(err);
  }

  return { product: product };
};

const Container = styled.div`
  width: 89%;

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

export const Content = styled.div`
  width: 100%;

  padding: 20px;

  border-radius: 10px;

  background: #3f7fcb20;

  display: flex;
  align-items: center;
  justify-content: space-around;

  @media (max-width: 769px) {
    flex-direction: column;
  }
`;

export const Infos = styled.div`
  width: 45%;

  @media (max-width: 769px) {
    width: 90%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  div {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;

    @media (max-width: 769px) {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin: 30px auto 0 auto;
    }

    h2 {
      width: 50%;
      font-family: "Roboto", sans-serif;
      font-weight: 700;
      font-size: 1.6rem;
      color: #111;
      margin-top: 0;

      @media (max-width: 769px) {
        width: 80%;
        text-align: center;
      }
    }

    button {
      width: 30%;
      height: 70px;

      padding: 2vh 0;

      border: none;
      border-radius: 10px;

      background: #619ceb;

      cursor: pointer;

      font-family: "Roboto", sans-serif;
      font-weight: 700;
      font-size: 1.4rem;
      line-height: 18.75px;
      color: #fff;

      @media (max-width: 769px) {
        width: 80%;
      }
    }
  }

  p {
    width: 100%;

    font-family: "Roboto", sans-serif;
    font-weight: 500;
    font-size: 1.1rem;
    line-height: 17px;
    text-align: left;
    color: #a8a4a4;

    @media (max-width: 769px) {
      text-align: center;
    }
  }
`;

export default Detail;
