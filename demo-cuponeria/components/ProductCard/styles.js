import styled, { css } from 'styled-components';

export const Container = styled.div`
  padding: 10px;
  display:flex;
  background: ${({ theme, color }) => theme.productCard[color].background};
  box-shadow: 1px 1px 10px 0px rgb(0 0 0 / 50%);
  border-radius: 20px;
  justify-self: center;

  ${({ isMobile, large }) => {
    if (isMobile) {
      return css`
    height: ${() => !large && '300px'} ;
    width:360px;
    flex-direction: column;
    align-items: center;
    `;
    }
    return large ? css`
    height:440px;
    max-width: 1050px;
    width: 70vw;
    ` : css` 
    height:180px;
    `;
  }}
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
margin-top: ${({ isMobile }) => isMobile && '10px'};
text-align: ${({ isMobile }) => isMobile && 'center'};
`;

export const RightSide = styled.div`
  display:flex;
  flex-grow: 1;
  flex-direction:column;
`;

export const RightSideInfo = styled.div`
  display:flex;
/* flex-direction:column; */
  flex-direction: ${({ isMobile }) => (isMobile ? 'column' : 'row')} ;
height: ${({ isMobile, large }) => isMobile && !large && '100%'};
`;

export const Description = styled.span`
padding-top:10px;
font-weight: 500;
font-size: 14px;
color: #A8A4A4;
line-height: ${({ large }) => (large ? '20px' : '17px')} ;
overflow:hidden;
display:${({ large, isMobile }) => isMobile && !large && 'none'};
`;

export const Image = styled.div`
background: url(${({ src }) => src});
    height: 100px;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    ${({ large, isMobile }) => (large ? css`
    max-width: 550px;
    min-width: 300px;
    width: 30vw;
    height: ${() => (isMobile ? '220px' : '420px')} ;`
    : css`
    width: 170px;
    height: ${() => (isMobile ? '170px' : '220px')};
    `)}
`;
