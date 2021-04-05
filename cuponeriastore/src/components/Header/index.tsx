import React from 'react';
import logo from '../../assets/logo.svg';
import { useLocation } from "react-router-dom";
import { Wrapper, ContainerWrapper, ContainerImg, ContainerTitle, LogoImg, Title, ContainerButtons } from './styles';

const Header: React.FC = ({ children }) => {
    const location = useLocation();
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

            <ContainerButtons justify={location.pathname === '/' ? "space-between" : "center"}>
                {children}
            </ContainerButtons>
        </Wrapper>
    );
}

export default Header;