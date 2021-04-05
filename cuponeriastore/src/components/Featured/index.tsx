import React from 'react';
import { FeaturedSingleContainer, FeaturedContainerImg, FeaturedImg, FeaturedBadgeContainer, FeaturedPrice, FeaturedContainerName, FeaturedName } from './styles';

export interface FeaturedProducts {
    id: number;
    image: string;
    price: number;
    title: string;
}

interface FeaturedProductsProps {
    featured: FeaturedProducts;
}

const Featured: React.FC<FeaturedProductsProps> = ({ featured }) => {
	const formatPrice = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(featured.price);

	return (
		<FeaturedSingleContainer>
			<FeaturedContainerImg to={`single-product/${featured.id}`}>
				<FeaturedImg src={featured.image} />
				<FeaturedBadgeContainer>
					<FeaturedPrice>{formatPrice}</FeaturedPrice>
				</FeaturedBadgeContainer>
			</FeaturedContainerImg>
			<FeaturedContainerName>
				<FeaturedName>{featured.title}</FeaturedName>
			</FeaturedContainerName>
		</FeaturedSingleContainer>
	);
}

export default Featured;