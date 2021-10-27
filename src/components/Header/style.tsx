import styled, { keyframes } from "styled-components";
import Image from "next/image";

const scaleOnInit = keyframes`
  0% {
    transform: translate(-300px);
    opacity: 0;
  },

  100% {
    transform: translate(0);
    opacity: 1;
  }
`;

export const Container = styled.header`
  width: 100vw;
  height: 27vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background: #111;

  animation: ${scaleOnInit} 0.4s linear alternate;
`;

export const StaticContent = styled.div`
  width: 88.8%;

  display: flex;
  align-items: center;
`

export const Logo = styled(Image)`
  width: 64px;
  height: 64px;

  object-fit: contain;
`;

export const Title = styled.h1`
  text-align: center;
  margin-left: auto;
  margin-right: auto;

  font-family: "Roboto", sans-serif;
  font-weight: 700;
  font-size: 1.9rem;
  color: #fff;
`