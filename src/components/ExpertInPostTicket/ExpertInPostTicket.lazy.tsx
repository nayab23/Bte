import React, { lazy, Suspense } from 'react';

const LazyExpertInPostTicket = lazy(() => import('./ExpertInPostTicket'));

const ExpertInPostTicket = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyExpertInPostTicket {...props} />
  </Suspense>
);

export default ExpertInPostTicket;
