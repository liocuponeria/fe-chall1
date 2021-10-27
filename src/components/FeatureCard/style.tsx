import styled from "styled-components";

export const Container = styled.div`
  width: 80%;
  height: 50%;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background: #ffffff20;
  box-shadow: 0px 0px 15px 5px rgba(0, 0, 0, 0.2);

  border-radius: 10px;
`;

export const Button = styled.button`
  width: 100%;

  cursor: pointer;

  background: none;
  border: none;

  img {
    object-fit: contain;
  }
`;

export const Footer = styled.div`
  width: 100%;
  min-height: 65px;
  max-height: fit-content;

  background: #111;

  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;

  display: flex;
  align-items: center;
  justify-content: center;

  span {
    font-family: "Roboto", sans-serif;
    font-weight: bold;
    font-size: 0.9rem;
    color: #fff;
    line-height: 19px;
    text-align: center;
  }
`;
