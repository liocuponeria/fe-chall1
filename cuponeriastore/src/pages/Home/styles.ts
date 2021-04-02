import styled from 'styled-components';

export const Container = styled.div`
  
`;

export const ContainerContents = styled.div `
    padding: 2.5%;

    @media(min-width: 320px) and (max-width: 1300px) {
        padding: 10% 5%;
    }
`;

export const Title = styled.h2 `
    font-size: 35px;
    margin-bottom: 1.5%;
`;

export const DiscoverArea = styled.div `
    display: grid;
    gap: 1%;
    grid-template-columns: repeat(2, 1fr);

    @media(min-width: 320px) and (max-width: 767px) {
        grid-template-columns: 1fr;
        gap: 5%;
    }

`;

export const FeaturedContainer = styled.div `
    display: flex;
    flex-direction: row;

    @media(min-width: 320px) {
        overflow-x: scroll;

        ::-webkit-scrollbar-track {
            background-color: var(--color-yellow);
            height: 2px;
        }
        ::-webkit-scrollbar-track {
            background-color: #ddd;
            height: 2px;
        }
        ::-webkit-scrollbar-thumb {
            height: 2px;
            background-color: var(--color-yellow);
            border-radius: 2.5rem;
        }
        ::-webkit-scrollbar {
            width: 6.25rem;
            height: 4px;
        }
    }
`;