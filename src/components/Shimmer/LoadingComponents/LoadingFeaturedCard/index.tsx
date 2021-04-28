import React from 'react';
import Skeleton from '../../Skeleton';

import { Container } from './styles';

const LoadingFeaturedCard: React.FC = () => {
  return (
    <Container>
      <Skeleton className="image-skeleton" />
      <div>
        <Skeleton className="row-skeleton" />
        <Skeleton className="row-skeleton" />
        <Skeleton className="row-skeleton" />
      </div>
    </Container>
  );
};

export default LoadingFeaturedCard;
