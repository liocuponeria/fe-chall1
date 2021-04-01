import React from 'react';
// import { Link } from 'react-router-dom'

import img from '../../assets/1.png';
import { DiscoverContainer, DiscoverContainerImg, DiscoverImage, DiscoverTitle, DiscoverLink, DiscoverDescription } from './styles';

const Discover: React.FC = () => {
    return (
        <DiscoverContainer>
            <DiscoverContainerImg>
                <DiscoverImage src={img} />
            </DiscoverContainerImg>
            <DiscoverTitle>Solid Gold Petite Micropave </DiscoverTitle>
            <DiscoverLink>Shop</DiscoverLink>
            <DiscoverDescription>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, possimus reprehenderit minus earum doloremque culpa aperiam, eveniet reiciendis a illum voluptates optio eaque fugit tempore necessitatibus quisquam quos. Autem, iste!</DiscoverDescription>
        </DiscoverContainer>
    );
}

export default Discover;