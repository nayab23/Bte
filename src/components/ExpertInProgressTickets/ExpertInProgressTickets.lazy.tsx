import React, { lazy, Suspense } from 'react';

const LazyExpertInProgressTickets = lazy(() => import('./ExpertInProgressTickets'));

const ExpertInProgressTickets = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyExpertInProgressTickets {...props} />
  </Suspense>
);

export default ExpertInProgressTickets;
