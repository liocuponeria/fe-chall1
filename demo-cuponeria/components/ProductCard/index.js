import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { ThemeContext } from 'styled-components';
import { useRouter } from 'next/router';
import { useIsMobile } from '../../utils/hooks/isMobile';
import * as styled from './styles';
import Button from '../Button';
import { formatMoney } from '../../utils/helpers';

function ProductCard({ product, color, large }) {
  const themeContext = useContext(ThemeContext);
  const router = useRouter();
  const isMobile = useIsMobile();
  const {
    title,
    description,
    image,
    id,
  } = product;
  const buttonBg = themeContext.productCard[color].button;

  const onClick = () => !large && router.push(`produto/${id}`);

  return (
    <styled.Container isMobile={isMobile} color={color} large={large}>
      <styled.Column style={{
        paddingRight: '20px',
        flexGrow: 0,
      }}
      >
        <styled.Image
          isMobile={isMobile}
          large={large}
          src={image}
          alt={title}
        />
      </styled.Column>
      <styled.RightSide>
        <styled.RightSideInfo isMobile={isMobile} large={large}>
          <styled.Title isMobile={isMobile} large={large}>{title}</styled.Title>
          <Button
            style={{ whiteSpace: 'nowrap' }}
            onClick={onClick}
            bgColor={buttonBg}
          >
            {large ? formatMoney(product.price) : 'comprar'}
          </Button>
        </styled.RightSideInfo>
        <styled.Description isMobile={isMobile} large={large}>{description}</styled.Description>
      </styled.RightSide>
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
  large: PropTypes.bool,
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
  large: false,
};
