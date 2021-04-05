import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const FeaturedSingleContainer = styled.div `
    width: 100%;
    min-width: 200px;
    max-width: 200px;
    background-color: var(--color-white);
    border-top-left-radius: var(--primary-border);
    border-top-right-radius: var(--primary-border);
    -webkit-box-shadow: 1px 3px 10px 2px rgba(145,145,145,0.31); 
    box-shadow: 1px 3px 10px 2px rgba(145,145,145,0.31);
    margin-right: 1%;
    margin-bottom: 5%;

    display: flex;
    flex-direction: column;

    @media(min-width: 280px) and (max-width: 428px) {
        margin-right: 6%;
    }
    @media(min-width: 429px) and (max-width: 1024px) {
        margin-right: 2%;
    }
`;

export const FeaturedContainerImg = styled(Link) `
    text-decoration: none;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
`;

export const FeaturedImg = styled.img `
    width: 100%;
    max-width: 200px;
    padding: 7%;
    max-height: 222px;
    flex: 1;
`;

export const FeaturedBadgeContainer = styled.div `
    display: flex;
    justify-content: flex-end;
    margin: -15% 6% 5% 0;
`;

export const FeaturedPrice = styled.span `
    padding: 3% 6%;
    border-radius: var(--primary-border);
    color: var(--color-white);
    background-color: var(--color-red);
`;
export const FeaturedContainerName = styled.div `
    background-color: var(--color-black);
    padding: 6%;
    border-bottom-left-radius: var(--primary-border);
    border-bottom-right-radius: var(--primary-border);
`;

export const FeaturedName = styled.p `
    color: var(--color-white);
    font-weight: bold;
    font-size: 14px;
    text-align: center;
    white-space: nowrap;
    width: 100%;
    overflow: hidden;

    text-overflow: ellipsis;
`;
