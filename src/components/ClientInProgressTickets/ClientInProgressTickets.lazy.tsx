import React, { lazy, Suspense } from 'react';

const LazyClientInProgressTickets = lazy(() => import('./ClientInProgressTickets'));

const ClientInProgressTickets = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyClientInProgressTickets {...props} />
  </Suspense>
);

export default ClientInProgressTickets;
