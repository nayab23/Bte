import React, { lazy, Suspense } from 'react';

const LazyExpertPayments = lazy(() => import('./ExpertPayments'));

const ExpertPayments = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyExpertPayments {...props} />
  </Suspense>
);

export default ExpertPayments;
