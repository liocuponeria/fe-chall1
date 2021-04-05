import React, { useEffect, useState } from 'react';
import Header from '../../components/Header';
import arrow from '../../assets/arrow.svg';
import api from '../../services/api';
import { useParams } from 'react-router-dom';

import DetailsSingleProduct, { SingleProductDetails } from '../../components/DetailsSingleProduct';
import { Container, Button, ArrowIcon, DetailsContainer, DetailsTitle } from './styles';

interface ProductIdProps {
    productid: string;
}

const SingleProduct: React.FC = () => {

    const [singleProduct, setSingleProduct] = useState<SingleProductDetails[]>([]);
    const { productid } = useParams<ProductIdProps>();

    useEffect(() => {
        api.get(`/${productid}`).then(response => {
            const ProductArray = Array(response.data);
            setSingleProduct(ProductArray);
        })
    }, []);

    return (
        <Container>
            <Header>
                <Button to="/">
                    <ArrowIcon src={arrow} />
                    Voltar
                </Button>
            </Header>

            <DetailsContainer>
                <DetailsTitle>Detalhes</DetailsTitle>
                {singleProduct.map((product: SingleProductDetails) => (
                    <DetailsSingleProduct key={product.id} details={product} />
                ))}
            </DetailsContainer>
        </Container>
    );
}

export default SingleProduct;