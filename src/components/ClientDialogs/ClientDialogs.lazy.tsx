import React, { lazy, Suspense } from 'react';

const LazyClientDialogs = lazy(() => import('./ClientDialogs'));

const ClientDialogs = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyClientDialogs {...props} />
  </Suspense>
);

export default ClientDialogs;
