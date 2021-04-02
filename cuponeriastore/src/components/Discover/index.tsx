import React from 'react';
// import { Link } from 'react-router-dom'

import img from '../../assets/1.png';
import { DiscoverContainer, DiscoverContainerImg, DiscoverImage, DiscoverTitle, DiscoverLink, DiscoverDescription } from './styles';


const Discover: React.FC = () => {
    return (
        <DiscoverContainer bgContainer="rgba(63,127,203, 0.2)">
            <DiscoverContainerImg>
                <DiscoverImage src={img} />
            </DiscoverContainerImg>
            <DiscoverTitle>Solid Gold Petite Micropave </DiscoverTitle>
            <DiscoverLink bgButton="#619CEB" bgButtonHover="#428bed">Shop</DiscoverLink>
            <DiscoverDescription>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, possimus reprehenderit minus earum doloremque culpa aperiam, eveniet reiciendis a illum voluptates optio eaque fugit tempore necessitatibus quisquam quos. Autem, iste!</DiscoverDescription>
        </DiscoverContainer>
    );
}

export default Discover;