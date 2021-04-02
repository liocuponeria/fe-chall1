import React from 'react';
import Discover from '../../components/Discover';
import Featured from '../../components/Featured';
import Header from '../../components/Header';
import { Container, ContainerContents, DiscoverArea, Title, FeaturedContainer } from './styles';

const Home: React.FC = () => {
    return (
        <Container>
            <Header />
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