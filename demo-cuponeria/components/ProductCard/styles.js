import styled from 'styled-components';

export const Container = styled.div`
  padding: 10px;
  display:flex;
  width: ${({ isMobile }) => (isMobile ? '360px' : '500px')};
  background: ${({ theme, color }) => theme.productCard[color].background};
  box-shadow: 1px 1px 10px 0px rgb(0 0 0 / 50%);
  border-radius: 20px;
  height: 150px;
`;

export const Row = styled.div`
display:flex;
`;

export const Column = styled.div`
display:flex;
flex-grow: 1;
flex-direction:column;
`;

export const Title = styled.span`
font-weight: bold;
font-size: 22px;
display:flex;
    line-height: 26px;
flex-grow:1;
height:52px;
overflow:hidden;

`;

export const Description = styled.span`
padding-top:10px;
font-weight: 500;
font-size: 14px;
color: #A8A4A4;
line-height: 17px;
`;

export const Image = styled.div`
background: url(${({ src }) => src});
    height: 100px;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    width: 170px;
    height: 220px;

`;
