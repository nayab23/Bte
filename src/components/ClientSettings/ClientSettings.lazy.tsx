import React, { lazy, Suspense } from 'react';

const LazyClientSettings = lazy(() => import('./ClientSettings'));

const ClientSettings = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyClientSettings {...props} />
  </Suspense>
);

export default ClientSettings;
