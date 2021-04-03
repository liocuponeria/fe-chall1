import React from 'react';
// import { Link } from 'react-router-dom'

import img from '../../assets/1.png';
import { DiscoverContainer, DiscoverContainerImg, DiscoverImage, DiscoverTitle, DiscoverLink, DiscoverDescription } from './styles';


const Discover: React.FC = () => {
    return (
        <DiscoverContainer bgcontainer="rgba(63,127,203, 0.2)">
            <DiscoverContainerImg>
                <DiscoverImage src={img} />
            </DiscoverContainerImg>
            <DiscoverTitle>Solid Gold Petite Micropave </DiscoverTitle>
            <DiscoverLink to="/" bgbutton="#619CEB" bgbuttonhover="#428bed">Shop</DiscoverLink>
            <DiscoverDescription>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, possimus reprehenderit minus earum doloremque culpa!</DiscoverDescription>
        </DiscoverContainer>
    );
}

export default Discover;