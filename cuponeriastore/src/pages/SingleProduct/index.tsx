import React from 'react';
import Header from '../../components/Header';
import arrow from '../../assets/arrow.svg';
import { Container, Button, ArrowIcon, DetailsContainer, DetailsTitle } from './styles';
import DetailsSingleProduct from '../../components/DetailsSingleProduct';

const SingleProduct: React.FC = () => {
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
                <DetailsSingleProduct />
            </DetailsContainer>
        </Container>
    );
}

export default SingleProduct;