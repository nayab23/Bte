import React, { lazy, Suspense } from 'react';

const LazyExpertInfeeds = lazy(() => import('./ExpertInfeeds'));

const ExpertInfeeds = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyExpertInfeeds {...props} />
  </Suspense>
);

export default ExpertInfeeds;
