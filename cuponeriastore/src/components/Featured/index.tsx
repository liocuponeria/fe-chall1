import React from 'react';
import img2 from '../../assets/2.1.png';
import { FeaturedSingleContainer, FeaturedContainerImg, FeaturedImg, FeaturedBadgeContainer, FeaturedPrice, FeaturedContainerName, FeaturedName } from './styles';

const Featured: React.FC = () => {
	return (
		<FeaturedSingleContainer>
			<FeaturedContainerImg to="single-product/1">
				<FeaturedImg src={img2} />
				<FeaturedBadgeContainer>
					<FeaturedPrice>R$15,99</FeaturedPrice>
				</FeaturedBadgeContainer>
			</FeaturedContainerImg>
			<FeaturedContainerName>
				<FeaturedName>Mens Casual Slim Fit</FeaturedName>
			</FeaturedContainerName>
		</FeaturedSingleContainer>
	);
}

export default Featured;