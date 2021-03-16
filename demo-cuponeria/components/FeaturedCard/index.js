import React from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import * as styled from './styles';
import { formatMoney } from '../../utils/helpers';

function FeaturedCard({ product }) {
  const router = useRouter();
  const {
    title,
    image,
    price,
    id,
  } = product;

  const onClick = () => router.push(`produto/${id}`);

  return (
    <styled.Container>
      <styled.Pointer onClick={onClick}>
        <styled.Image
          src={image}
          alt={title}
        />
        <styled.PriceTag>
          {formatMoney(price)}
        </styled.PriceTag>
      </styled.Pointer>
      <styled.Footer>
        <styled.ProductName>
          {title}
        </styled.ProductName>
      </styled.Footer>
    </styled.Container>
  );
}

export default FeaturedCard;

FeaturedCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    price: PropTypes.number,
    description: PropTypes.string,
    category: PropTypes.string,
    image: PropTypes.string,
  }),
};

FeaturedCard.defaultProps = {
  product: {
    id: 0,
    title: '',
    price: 0,
    description: '',
    category: '',
    image: '',
  },
};
