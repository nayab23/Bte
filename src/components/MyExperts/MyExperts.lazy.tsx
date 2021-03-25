import React, { lazy, Suspense } from 'react';

const LazyMyExperts = lazy(() => import('./MyExperts'));

const MyExperts = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyMyExperts {...props} />
  </Suspense>
);

export default MyExperts;
