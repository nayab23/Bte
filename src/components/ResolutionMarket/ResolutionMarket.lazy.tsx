import React, { lazy, Suspense } from 'react';

const LazyResolutionMarket = lazy(() => import('./ResolutionMarket'));

const ResolutionMarket = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyResolutionMarket {...props} />
  </Suspense>
);

export default ResolutionMarket;
