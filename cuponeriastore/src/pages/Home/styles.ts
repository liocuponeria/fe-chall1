import styled from 'styled-components';

export const Container = styled.div``;

export const Button = styled.button`
    &:nth-child(1) {
        background-color: var(--color-yellow);
        transition: background-color .4s;
    }
    &:nth-child(1):hover {
        background-color: var(--color-yellow-hover);
    }
    padding: 15px 68px;
    /* margin-right: 2%; */
    background: var(--color-white);
    color: var(--color-black);
    font-weight: bold;
    text-transform: uppercase;
    transition: background-color .4s;
    white-space: nowrap;
    &:hover {
        background-color: var(--color-background);
    }

    @media (min-width: 280px) and (max-width: 428px) {
        margin-right: 6%;
        margin-bottom: 4%;
    }

    @media (min-width: 429px) and (max-width: 1250px) {
        margin-right: 3%;
        margin-bottom: 4%;
    }
`;

export const ContainerContents = styled.div`
    padding: 2.5% 0;
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;

    @media(min-width: 280px) and (max-width: 1300px) {
        padding: 10% 5%;
    }
`;

export const Title = styled.h2`
    font-size: 35px;
    margin-bottom: 1.5%;
    text-transform: uppercase;

    @media(min-width: 280px) and (max-width: 767px) {
        font-size: 28px;
    }
`;

export const DiscoverArea = styled.div`
    display: grid;
    gap: 1%;
    grid-template-columns: repeat(2, 1fr);

    @media(min-width: 280px) and (max-width: 767px) {
        grid-template-columns: 1fr;
        gap: 5%;
    }

`;

export const FeaturedContainer = styled.div`
    display: flex;
    flex-direction: row;

    @media(min-width: 280px){
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
    }
`;