import React from 'react';
import Discover from '../../components/Discover';
import Header from '../../components/Header';
import { Container, DisconverContent, DiscoverArea, Title } from './styles';

const Home: React.FC = () => {
    return (
        <Container>
            <Header />
            <DisconverContent>
                <Title>Discover</Title>
                <DiscoverArea>
                    <Discover />
                    <Discover />
                </DiscoverArea>
            </DisconverContent>
        </Container>
    );
}

export default Home;