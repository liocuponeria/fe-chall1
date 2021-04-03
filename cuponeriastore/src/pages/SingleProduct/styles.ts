import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div``;

export const Button = styled(Link)`
    padding: 15px 30px;
    background-color: var(--color-yellow);
    transition: background-color .4s;
    font-weight: 700;
    display: flex;
    align-items: center;
    justify-content: center;
    text-transform: uppercase;
    text-decoration: none;
    color: var(--color-black);

    &:hover {
        background-color: var(--color-yellow-hover);
    }
`;

export const ArrowIcon = styled.img `
    margin-right: 14px;
`;

export const DetailsContainer = styled.div `
    padding: 2.5% 0;
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;

    @media(min-width: 320px) and (max-width: 1300px) {
        padding: 10% 5%;
    }
`;

export const DetailsTitle = styled.h2 `
    font-size: 35px;
    margin-bottom: 1.5%;
    text-transform: uppercase;
`;