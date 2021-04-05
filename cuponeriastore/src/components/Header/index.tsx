import React from 'react';
import logo from '../../assets/logo.svg';
import { Wrapper, ContainerWrapper, ContainerImg, ContainerTitle, LogoImg, Title, ContainerButtons } from './styles';

const Header: React.FC = ({ children }) => {
    return (
        <Wrapper>
            <ContainerWrapper>
                <ContainerImg to="/">
                    <LogoImg src={logo} />
                </ContainerImg>
                <ContainerTitle>
                    <Title>Cuponeria Store</Title>
                </ContainerTitle>
            </ContainerWrapper>

            <ContainerButtons>
                {children}
            </ContainerButtons>
        </Wrapper>
    );
}

export default Header;