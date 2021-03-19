import styled from 'styled-components';

export const Container = styled.div`
`;

export const GridContainer = styled.div`
  display:grid;
  grid-gap: 1rem 20px;
  max-width:1050px;
  margin: 0 auto;
`;

export const Subtitle = styled.div`
  font-weight: bold;
  font-size: 35px;
  grid-column-start: 1;
  grid-column-end: ${({ isMobile }) => (isMobile ? 2 : 3)};
`;

export const DiscoverList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

export const Wrapper = styled.div`
margin:${({ isMobile }) => (isMobile ? '10px' : '10px 50px')};
`;

export const FeaturedList = styled.div`
  display: grid;
  grid-auto-flow: column;
  overflow-x: auto; 
    grid-column-start: 1;
    grid-column-end: 3;
    grid-gap: 10px;
  & > div {
    justify-self: center;
  }
`;
