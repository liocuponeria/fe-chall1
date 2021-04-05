import React from 'react';

import { SingleProductContainer, SingleProductContainerImg, SingleProductImg, SingleProductTitle, DiscoverLink, SingleProductDescription } from './styles';

export interface SingleProductDetails {
    image: string;
    title: string;
    price: number;
    description: string;
    id: number;
}

interface SingleProductDetailsProps {
    details: SingleProductDetails;
}

const DetailsSingleProduct: React.FC<SingleProductDetailsProps> = ({ details }) => {
	const formatPrice = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(details.price);


    return (
        <SingleProductContainer bgContainer="rgba(63,127,203, 0.2)">
            <SingleProductContainerImg>
                <SingleProductImg src={details.image} />
            </SingleProductContainerImg>
            <SingleProductTitle>{details.title}</SingleProductTitle>
            <DiscoverLink bgbutton="#619CEB" bgbuttonhover="#428bed" to="/">{formatPrice}</DiscoverLink>
            <SingleProductDescription>{details.description}</SingleProductDescription>
        </SingleProductContainer>
    );
}

export default DetailsSingleProduct;