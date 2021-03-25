import React, { lazy, Suspense } from 'react';

const LazyExpertsInClosedTickets = lazy(() => import('./ExpertsInClosedTickets'));

const ExpertsInClosedTickets = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyExpertsInClosedTickets {...props} />
  </Suspense>
);

export default ExpertsInClosedTickets;
