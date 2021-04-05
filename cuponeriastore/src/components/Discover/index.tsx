import React from 'react';

import { DiscoverContainer, DiscoverContainerImg, DiscoverImage, DiscoverTitle, DiscoverLink, DiscoverDescription } from './styles';

export interface DiscoverProducts {
    id: number;
    image: string;
    title: string;
    price: number;
    description: string;
}

interface DiscoverProductsProps {
    discover: DiscoverProducts;
}


const Discover: React.FC<DiscoverProductsProps> = ({ discover }) => {
    /**
     * Limitando a quantidade de texto para a descrição do Discover
     */
    let description = discover.description;
    if(discover.description.length > 100) {
        description = discover.description.substring(0, 100)+'...'
    }

    return (
        <DiscoverContainer bgcontainer={discover.id === 1 ? "rgba(200,118,118, 0.2)" : "rgba(63,127,203, 0.2)"}>
            <DiscoverContainerImg>
                <DiscoverImage src={discover.image} />
            </DiscoverContainerImg>
            <DiscoverTitle>{discover.title}</DiscoverTitle>
            <DiscoverLink to={`single-product/${discover.id}`} bgbutton={discover.id === 1 ? "#EE797E" : "#619CEB"} bgbuttonhover={discover.id === 1 ? "#eb6368" : "#428bed"}>Shop</DiscoverLink>
            <DiscoverDescription>{description}</DiscoverDescription>
        </DiscoverContainer>
    );
}

export default Discover;