import styled from 'styled-components';

export const Container = styled.div`
  
`;

export const DisconverContent = styled.div `
    padding: 2.5%;

    @media(min-width: 320px) and (max-width: 1300px) {
        padding: 5%;
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
        gap: 7%;
    }

`;