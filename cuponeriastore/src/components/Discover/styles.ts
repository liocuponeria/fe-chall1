import styled from 'styled-components';

export const DiscoverContainer = styled.div<{ bgContainer: string }>`
    display: grid;
    grid-template-areas: 
    "image image title button button"
    "image image description description description"
    ;

    background-color: ${props => (props.bgContainer)};
    padding: 2%;
    border-radius: var(--primary-border);

    -webkit-box-shadow: 1px 3px 10px 2px rgba(145,145,145,0.31); 
    box-shadow: 1px 3px 10px 2px rgba(145,145,145,0.31);

    @media(min-width: 320px) and (max-width: 1300px) {
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
        justify-content: center;
    }
`;

export const DiscoverContainerImg = styled.div`
    grid-area: image;
    margin-right: 12%;

    @media(min-width: 320px) and (max-width: 1300px) {
        margin-right: 0;
    }

    @media(min-width: 1300px) and (max-width: 1440px) {
        margin-right: 8%;
    }
`;

export const DiscoverImage = styled.img`
    width: 100%;
    width: 350px;

    @media(min-width: 320px) and (max-width: 1300px) {
        margin-right: 0;
        width: unset;
    }

    @media(min-width: 1300px) and (max-width: 1440px) {
        width: 300px;
    }
`;

export const DiscoverTitle = styled.h3`
    grid-area: title;

    font-size: 22px;
    font-family: var(--primary-font);
    font-weight: 700;

    @media(min-width: 320px) and (max-width: 1300px) {
        text-align: center;
        font-size: 18px;
        margin: 7% 0;
    }

    @media(min-width: 1300px) and (max-width: 1440px) {
        font-size: 17px;
    }
`;

export const DiscoverLink = styled.a<{ bgButton: string, bgButtonHover: string }> `
    grid-area: button;
    
    height: 50px;
    background-color: ${props => (props.bgButton)};
    color: var(--color-white);
    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: var(--primary-border);
    text-transform: uppercase;
    font-weight: 700;

    cursor: pointer;
    transition: background-color .4s;

    &:hover {
        background-color: ${props => (props.bgButtonHover)};
    }

    @media(min-width: 320px) and (max-width: 1300px) {
        width: 40%;
        align-items: center;
        order: 1;
    }
    @media(min-width: 1300px) and (max-width: 1440px) {
        margin-left: 10%;
    }
`;

export const DiscoverDescription = styled.p`
    grid-area: description;

    font-weight: 500;
    color: var(--color-grey);

    margin-top: 2%;

    @media(min-width: 320px) and (max-width: 767px) {
        display: none;
    }
    @media(min-width: 768px) and (max-width: 1300px) {
        text-align: center;
        margin-bottom: 5%;
    }
    @media(min-width: 1301px) and (max-width: 1460px) {
        line-height: 25px;
    }
`;