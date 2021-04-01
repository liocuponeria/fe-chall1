import React from 'react';
import logo from '../../assets/logo.svg';
import { Wrapper, ContainerWrapper, ContainerImg, ContainerTitle, LogoImg, Title, ContainerButtons, Button } from './styles';

const Header: React.FC = () => {
    return (
        <Wrapper>
            <ContainerWrapper>
                <ContainerImg>
                    <LogoImg src={logo} />
                </ContainerImg>
                <ContainerTitle>
                    <Title>Cuponeria Store</Title>
                </ContainerTitle>
            </ContainerWrapper>

            <ContainerButtons>
                {/* <ContainerButtonHome> */}
                    <Button>Home</Button>
                {/* </ContainerButtonHome> */}
                    <Button>Men Clothing</Button>
                    <Button>Wonem Clothing</Button>
                    <Button>Electronis</Button>
                    <Button>JEWELERY</Button>
            </ContainerButtons>
        </Wrapper>
    );
}

export default Header;