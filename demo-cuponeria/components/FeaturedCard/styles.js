import styled from 'styled-components';

export const Container = styled.div`
width: 252px;
height: 366px;
border-radius:10px;
background-color:white;
box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.110058);
margin-right:10px;
position:relative;

`;

export const Image = styled.div`
background: url(${({ src }) => src});
    height: 100px;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    width: 252px;
    height: 315px;
`;

export const ProductName = styled.div`
font-weight: bold;
font-size: 16px;
line-height: 19px;
text-align: center;

white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
width: 210px;

`;

export const Footer = styled.div`
color:white;
background-color:black;
height:51px;
    display: flex;
    align-items: center;
    justify-content: center;
border-radius: 0px 0px 10px 10px;
`;

export const PriceTag = styled.div`
background: #FF0000;
color:white;
box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.110058);
border-radius: 10px;
position:absolute;
bottom:60px;
right:10px;
    padding: 4px;
`;

export const Pointer = styled.div`
cursor: pointer;
`;
