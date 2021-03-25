import React, { lazy, Suspense } from 'react';

const LazyClientInfavroutExperts = lazy(() => import('./ClientInfavroutExperts'));

const ClientInfavroutExperts = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyClientInfavroutExperts {...props} />
  </Suspense>
);

export default ClientInfavroutExperts;
