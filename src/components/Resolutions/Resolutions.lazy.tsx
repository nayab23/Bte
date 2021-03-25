import React, { lazy, Suspense } from 'react';

const LazyResolutions = lazy(() => import('./Resolutions'));

const Resolutions = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyResolutions {...props} />
  </Suspense>
);

export default Resolutions;
