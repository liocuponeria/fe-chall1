import styled from "styled-components";

export const Footer: any = () => {
  return (
    <>
      <Container>
        <p>
          Teste Realizado por - <strong>Nathan Osti Miguel</strong>
        </p>
      </Container>
    </>
  );
};

const Container = styled.footer`
  width: 100vw;
  height: 100px;

  background: #111;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 0;

  @media (max-width: 1200px) {
    position: fixed;
    bottom: 0;
  }

  @media (max-width: 769px) {
    position: unset;
    bottom: 0;
  }

  p {
    font-family: "Roboto", sans-serif;
    font-size: 1.3rem;
    color: #fff;
    text-align: center;

    strong {
      font-size: 1.6rem;
      @media (max-width: 1200px) {
        font-size: 1.2rem;
      }
    }

    @media (max-width: 1200px) {
      font-size: 1rem;
    }
  }
`;
