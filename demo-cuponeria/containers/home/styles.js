import styled from 'styled-components';

export const Container = styled.div`
  padding: 10px;
  display:flex;
  width: ${({ isMobile }) => (isMobile ? '360px' : '660px')};
  background: ${({ theme, color }) => theme.productCard[color].background};
  box-shadow: 1px 1px 10px 0px rgb(0 0 0 / 50%);
  border-radius: 20px;
  height: 150px;
`;

export const Subtitle = styled.div`
  font-weight: bold;
  font-size: 35px;
`;

export const DiscoverList = styled.div`
  display:flex;
    justify-content: space-evenly;
`;
