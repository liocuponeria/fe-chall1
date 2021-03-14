import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { ThemeContext } from 'styled-components';
import { useIsMobile } from '../../utils/hooks/isMobile';
import * as styled from './styles';
import Button from '../Button';

function ProductCard({ product, color }) {
  const themeContext = useContext(ThemeContext);
  const isMobile = useIsMobile();
  const {
    title,
    description,
    image,
  } = product;
  const buttonBg = themeContext.productCard[color].button;

  return (
    <styled.Container color={color}>
      <styled.Column style={{
        paddingRight: '50px',
        flexGrow: 0,
      }}
      >
        <styled.Image
          src={image}
          alt={title}
        />
      </styled.Column>
      <styled.Column>
        <styled.Row>
          <styled.Title>{title}</styled.Title>
          <Button bgColor={buttonBg}>
            comprar
          </Button>
        </styled.Row>
        <styled.Row style={{ overflow: 'hidden' }}>
          <styled.Description>{description}</styled.Description>
        </styled.Row>
      </styled.Column>
    </styled.Container>
  );
}

export default ProductCard;

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    price: PropTypes.number,
    description: PropTypes.string,
    category: PropTypes.string,
    image: PropTypes.string,
  }),
  color: PropTypes.oneOf(['primary', 'secondary']),
};

ProductCard.defaultProps = {
  color: 'primary',
  product: {
    id: 0,
    title: '',
    price: 0,
    description: '',
    category: '',
    image: '',
  },
};
