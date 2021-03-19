import Image from 'next/image';
import React from 'react';
import PropTypes from 'prop-types';
import * as styled from './styles';

function Header({ children }) {
  return (
    <styled.Container>
      <styled.Row>
        <Image
          layout="fixed"
          src="/images/logo_cuponeria.png"
          height={64}
          width={64}
          alt="Logo cuponeria"
        />
        <styled.Title>CUPONERIA STORE</styled.Title>
      </styled.Row>
      <styled.Center>
        <styled.Scroll>
          {children}
        </styled.Scroll>
      </styled.Center>
    </styled.Container>
  );
}

Header.propTypes = {
  children: PropTypes.element,
};

Header.defaultProps = {
  children: <></>,
};

export default Header;
