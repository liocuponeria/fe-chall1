import styled from "styled-components";

export const Container = styled.div`
  width: 43vw;

  display: flex;
  align-items: center;
  justify-content: space-between;

  background: #3f7fcb20;

  padding: 0.9rem;

  border-radius: 10px;

  @media (max-width: 1200px) {
    width: 85vw;
    margin: 20px auto;

    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const Content = styled.div`
  width: 60%;

  p {
    width: 80%;

    font-family: "Roboto", sans-serif;
    font-weight: 500;
    font-size: 0.9rem;
    line-height: 17px;
    text-align: left;
    color: #a8a4a4;

    @media (max-width: 1200px) {
      display: none;
    }
  }
`;

export const ContentHeader = styled.div`
  width: 100%;

  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  @media (max-width: 1200px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;

    margin-top: 40px;
  }

  h1 {
    width: 70%;
    font-family: "Roboto", sans-serif;
    font-weight: 700;
    font-size: 1.3rem;
    color: #111;
    margin-top: 0;

    @media (max-width: 1200px) {
      width: 100%;
      text-align: center;
    }
  }
`;

export const Button = styled.button`
  width: 30%;

  padding: 2vh 0;

  border: none;
  border-radius: 10px;

  background: #619ceb;

  cursor: pointer;

  font-family: "Roboto", sans-serif;
  font-weight: 700;
  font-size: 1rem;
  line-height: 18.75px;
  color: #fff;

  @media (max-width: 1200px) {
    width: 100%;
    margin-top: 10px;
  }

  a {
  }
`;
