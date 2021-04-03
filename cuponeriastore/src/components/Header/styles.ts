import styled from 'styled-components';

export const Wrapper = styled.header`
  background-color: var(--color-black);
  padding: 2.5% 0;

    @media(min-width: 320px) and (max-width: 1300px) {
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

    @media (min-width: 320px) and (max-width: 767px) {
        display: flex;
        align-items: center;
        justify-content: flex-start;
    }
`;

export const ContainerImg = styled.div`
    @media (min-width: 320px) and (max-width: 768px) {
        margin-right: 5%;
    }
`;

export const ContainerTitle = styled.div`
    text-align: center;
`;

export const LogoImg = styled.img`
    width: 64px;
    height: 64px;

    @media (min-width: 320px) and (max-width: 768px) {
        width: 50px;
        height: 50px;
    }
`;

export const Title = styled.h1`
    font-size: 30px;
    text-transform: uppercase;
    color: var(--color-white);

    @media (min-width: 320px) and (max-width: 768px) {
        font-size: 20px;
    }
`;

export const ContainerButtons = styled.div`
    margin-top: 2%;
    display: flex;
    justify-content: center;
    align-items: center;
    
    @media (min-width: 320px) and (max-width: 768px) {
        margin-top: 10%;
        overflow-x: auto;
        justify-content: unset;

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