import React, { lazy, Suspense } from 'react';

const LazyClientInCancelledTickets = lazy(() => import('./ClientInCancelledTickets'));

const ClientInCancelledTickets = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyClientInCancelledTickets {...props} />
  </Suspense>
);

export default ClientInCancelledTickets;
