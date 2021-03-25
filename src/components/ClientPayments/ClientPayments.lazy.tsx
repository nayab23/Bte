import React, { lazy, Suspense } from 'react';

const LazyClientPayments = lazy(() => import('./ClientPayments'));

const ClientPayments = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyClientPayments {...props} />
  </Suspense>
);

export default ClientPayments;
