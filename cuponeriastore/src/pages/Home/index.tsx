import React, { useState, useEffect } from 'react';
import Discover, { DiscoverProducts } from '../../components/Discover';
import Featured, { FeaturedProducts } from '../../components/Featured';
import Header from '../../components/Header';

import api from '../../services/api';

import { Container, Button, ContainerContents, DiscoverArea, Title, FeaturedContainer } from './styles';


const Home: React.FC = () => {

    const [discoverProducts, setDiscoverProducts] = useState([]);
    const [featuredProducts, setFeaturedProducts] = useState([]);
    const [categorysProducts, setCategorysProducts] = useState([]);
    const [filterCategory, setFilterCategory] = useState('');

    /**
    * Chamando a API para uso nos botões de filtro
    */
    useEffect(() => {
        api.get('/categories').then(response => {
            setCategorysProducts(response.data);
        })
    }, []);

    /**
     * Chamando API para utilizar no componente Discover
     */
    useEffect(() => {
        api.get('?limit=2').then(response => {
            setDiscoverProducts(response.data);
        })
    }, []);

    /**
     * Chamando API para utilizar no componente Featured e para fazer a ação de filtrar os produtos
     */
    useEffect(() => {
        if (filterCategory !== '') {
            api.get(`/category/${filterCategory}`).then(response => {
                setFeaturedProducts(response.data);
            })
        } else {
            api.get('/').then(response => {
                setFeaturedProducts(response.data);
            })
        }
    }, [filterCategory]);

    return (
        <Container>
            <Header>
                <Button onClick={() => setFilterCategory('')}>Home</Button>
                {categorysProducts.map((category) => (
                    <Button key={category} onClick={() => setFilterCategory(category)}>{category}</Button>
                ))}
            </Header>

            <ContainerContents>
                <Title>Discover</Title>
                <DiscoverArea>
                    {discoverProducts.map((discover: DiscoverProducts) => (
                        <Discover key={discover.id} discover={discover} />
                    ))}
                </DiscoverArea>

            </ContainerContents>
            <ContainerContents>
                <Title>Featured</Title>
                <FeaturedContainer>
                    {featuredProducts.map((featured: FeaturedProducts) => (
                        <Featured key={featured.id} featured={featured} />
                    ))}
                </FeaturedContainer>
            </ContainerContents>
        </Container>
    );
}

export default Home;