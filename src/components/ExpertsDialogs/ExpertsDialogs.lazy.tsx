import React, { lazy, Suspense } from 'react';

const LazyExpertsDialogs = lazy(() => import('./ExpertsDialogs'));

const ExpertsDialogs = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyExpertsDialogs {...props} />
  </Suspense>
);

export default ExpertsDialogs;
