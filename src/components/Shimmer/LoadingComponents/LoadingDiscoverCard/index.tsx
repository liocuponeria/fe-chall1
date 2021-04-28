import React from 'react';
import Skeleton from '../../Skeleton';

import { Container } from './styles';

const LoadingDiscoverCard: React.FC = () => {
  return (
    <Container>
      <Skeleton className="image-skeleton" />
      <div className="row-container">
        <Skeleton className="row-skeleton" />
        <Skeleton className="row-skeleton" />
        <Skeleton className="row-skeleton" />
      </div>
    </Container>
  );
};

export default LoadingDiscoverCard;
