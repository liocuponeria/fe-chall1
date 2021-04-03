import React from 'react';
import img3 from '../../assets/3.png';

import { SingleProductContainer, SingleProductContainerImg, SingleProductImg, SingleProductTitle, DiscoverLink, SingleProductDescription } from './styles';

const DiscoverSingleProduct: React.FC = () => {
    return (
        <SingleProductContainer bgContainer="rgba(63,127,203, 0.2)">
            <SingleProductContainerImg>
                <SingleProductImg src={img3} />
            </SingleProductContainerImg>
            <SingleProductTitle>SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s</SingleProductTitle>
            <DiscoverLink bgbutton="#619CEB" bgbuttonhover="#428bed" to="/">R$ 29,99</DiscoverLink>
            <SingleProductDescription>Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5” hard drive; Based on published specifications and internal benchmarking tests using PCMark vantage scores) Boosts burst write performance, making it ideal for typical PC workloads The perfect balance of performance and reliability Read/write speeds of up to 535MB/s/450MB/s (Based on internal testing; Performance may vary depending upon drive capacity, host device, OS and application.)</SingleProductDescription>
        </SingleProductContainer>
    );
}

export default DiscoverSingleProduct;