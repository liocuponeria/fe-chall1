import React from 'react';
import Discover from '../../components/Discover';
import Featured from '../../components/Featured';
import Header from '../../components/Header';
import { Container, Button, ContainerContents, DiscoverArea, Title, FeaturedContainer } from './styles';

const Home: React.FC = () => {
    return (
        <Container>
            
            <Header>
                <Button>Home</Button>
                <Button>Men Clothing</Button>
                <Button>Wonem Clothing</Button>
                <Button>Electronis</Button>
                <Button>JEWELERY</Button>
            </Header>

            <ContainerContents>
                <Title>Discover</Title>
                <DiscoverArea>
                    <Discover />
                    <Discover />
                </DiscoverArea>
            </ContainerContents>
            <ContainerContents>
                <Title>Featured</Title>
                <FeaturedContainer>
                    <Featured />
                    <Featured />
                    <Featured />
                    <Featured />
                    <Featured />
                    <Featured />
                    <Featured />
                    <Featured />
                </FeaturedContainer>
            </ContainerContents>
        </Container>
    );
}

export default Home;