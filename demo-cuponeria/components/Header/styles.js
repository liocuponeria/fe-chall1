import styled from 'styled-components';

export const Container = styled.header`
  background: black;
  width:100%;
  padding: 20px;
`;

export const Row = styled.div`
display:flex;
`;

export const Title = styled.h1`
  color: white;
  margin: auto;
  

  @media(min-width: 500px) {
    padding-right: 64px;
  }
`;

export const Center = styled.div`
display:flex;
justify-content: center;
`;

export const Scroll = styled.div`
  overflow-x:auto;
    display: flex;
`;