import React from 'react';
import Panel from '../../Panel';
import Skeleton from '../../Skeleton';

import { Container } from './styles';

const LoadingFeaturedCard: React.FC = () => {
  return (
    <Container>
      <Panel className="no-shadow">
        <Skeleton className="image-skeleton" />
        <div>
          <Skeleton className="row-skeleton" />
          <Skeleton className="row-skeleton" />
          <Skeleton className="row-skeleton" />
        </div>
      </Panel>
    </Container>
  );
};

export default LoadingFeaturedCard;
