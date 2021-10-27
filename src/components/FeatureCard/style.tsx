import styled from "styled-components";

export const Container = styled.div`
  width: 80%;
  margin: 30px 0 30px 0;
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

  position: relative;

  img {
    object-fit: contain;
  }
`;

export const Footer = styled.div`
  width: 100%;
  height: 65px;

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

    max-width: 90%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export const Price = styled.span`
  position: absolute;

  bottom: 30px;
  right: 20px;

  width: 85px;
  height: 36px;

  background: red;

  border-radius: 10px;

  display: flex;
  align-items: center;
  justify-content: center;

  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 1rem;
  line-height: 19px;
  color: #fff;
`;
