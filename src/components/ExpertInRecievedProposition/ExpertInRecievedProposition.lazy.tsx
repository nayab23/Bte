import React, { lazy, Suspense } from 'react';

const LazyExpertInRecievedProposition = lazy(() => import('./ExpertInRecievedProposition'));

const ExpertInRecievedProposition = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyExpertInRecievedProposition {...props} />
  </Suspense>
);

export default ExpertInRecievedProposition;
