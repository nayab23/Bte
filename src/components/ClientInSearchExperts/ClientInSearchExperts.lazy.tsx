import React, { lazy, Suspense } from 'react';

const LazyClientInSearchExperts = lazy(() => import('./ClientInSearchExperts'));

const ClientInSearchExperts = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyClientInSearchExperts {...props} />
  </Suspense>
);

export default ClientInSearchExperts;
