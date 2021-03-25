import React, { lazy, Suspense } from 'react';

const LazyExpertTickets = lazy(() => import('./ExpertTickets'));

const ExpertTickets = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyExpertTickets {...props} />
  </Suspense>
);




export default ExpertTickets;
