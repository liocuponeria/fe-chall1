import Image from 'next/image';
import React from 'react';
import * as styled from './styles';

function Header() {
  return (
    <styled.Container>
      <styled.Row>

        <Image
          src="/images/logo_cuponeria.png"
          height={64}
          width={64}
          alt="Logo cuponeria"
        />
        <styled.Title>CUPONERIA STORE</styled.Title>
      </styled.Row>
    </styled.Container>
  );
}

export default Header;
