import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const SingleProductContainer = styled.div<{ bgContainer: string }> `
    display: grid;
    grid-template-areas:
        "image image title title button"
        "image image description description description"
    ;
    grid-template-rows: 100px;
    background-color: ${props => (props.bgContainer)};
    padding: 4%;
    border-radius: var(--primary-border);

    -webkit-box-shadow: 1px 3px 10px 2px rgba(145,145,145,0.31); 
    box-shadow: 1px 3px 10px 2px rgba(145,145,145,0.31);

    @media(min-width: 280px) and (max-width: 800px) {
        grid-template-areas: 
            "image"
            "title"
            "description"
            "button"
        ;
        box-shadow: none;
        padding: 5%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`;

export const SingleProductContainerImg = styled.div `
    grid-area: image;
    margin-right: 10%;

    @media(min-width: 280px) and (max-width: 768px) {
        margin-right: 0;
    }
`;

export const SingleProductImg = styled.img `
    width: 100%;
    max-width: 494px;
    height: 100%;
    max-height: 410px;

    @media(min-width: 280px) and (max-width: 800px) {
        width: 100%;
        max-width: 200px;
    }
`;

export const SingleProductTitle = styled.h1 `
    grid-area: title;
    font-size: 30px;
    margin-right: 10%;

    @media(min-width: 280px) and (max-width: 800px) {
        font-size: 22px;
        text-align: center;
        margin-right: 0;
        order: 1;
    }
`;

export const DiscoverLink = styled(Link)<{ bgbutton: string, bgbuttonhover: string }> `
    grid-area: button;
    
    height: 70px;
    background-color: ${props => (props.bgbutton)};
    color: var(--color-white);
    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: var(--primary-border);
    text-transform: uppercase;
    font-weight: 700;
    font-size: 24px;

    transition: background-color .4s;
    text-decoration: none;

    &:hover {
        background-color: ${props => (props.bgbuttonhover)};
    }

    @media(min-width: 280px) and (max-width: 425px) {
        width: 100%;
        height: 50px;
        align-items: center;
        order: 0;
        margin: 10% 0%;
    }

    @media(min-width: 426px) and (max-width: 800px) {
        width: 60%;
        height: 50px;
        margin: 6% 0%;
    }
`;

export const SingleProductDescription = styled.p `
    grid-area: description;
    font-weight: 500;
    font-size: 20px;
    color: var(--color-grey);
    margin-top: 4%;
    line-height: 30px;

    @media(min-width: 280px) and (max-width: 800px) {
        order: 2;
        text-align: center;
    }
`;
