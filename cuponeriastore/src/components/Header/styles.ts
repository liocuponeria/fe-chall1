import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Wrapper = styled.header`
  background-color: var(--color-black);
  padding: 2.5% 0;

    @media(min-width: 280px) and (max-width: 1300px) {
        padding: 5% 5%;
    }
`;

export const ContainerWrapper = styled.div`
    width: 100%;
    max-width: 1200px;
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    align-items: center;
    margin: 0 auto;

    @media (min-width: 280px) and (max-width: 767px) {
        display: flex;
        align-items: center;
        justify-content: flex-start;
    }
`;

export const ContainerImg = styled(Link)`
    @media (min-width: 280px) and (max-width: 768px) {
        margin-right: 5%;
    }
`;

export const ContainerTitle = styled.div`
    text-align: center;
`;

export const LogoImg = styled.img`
    width: 64px;
    height: 64px;

    @media (min-width: 280px) and (max-width: 768px) {
        width: 50px;
        height: 50px;
    }
`;

export const Title = styled.h1`
    font-size: 30px;
    text-transform: uppercase;
    color: var(--color-white);

    @media (min-width: 280px) and (max-width: 768px) {
        font-size: 20px;
    }
`;

export const ContainerButtons = styled.div<{ justify: string }>`
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    margin-top: 2%;
    display: flex;
    justify-content: ${props => props.justify};
    align-items: center;
    overflow-x: auto;

    ::-webkit-scrollbar-track {
        background-color: var(--color-grey);
        height: 2px;
    }
    ::-webkit-scrollbar-thumb {
        background-color: var(--color-yellow);
    }
    ::-webkit-scrollbar {
        height: 4px;
    }
    @media (min-width: 280px) and (max-width: 1250px) {
        margin-top: 6%;
        justify-content: unset;
    }
`;