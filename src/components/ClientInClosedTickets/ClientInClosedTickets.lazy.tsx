import React, { lazy, Suspense } from 'react';

const LazyClientInClosedTickets = lazy(() => import('./ClientInClosedTickets'));

const ClientInClosedTickets = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyClientInClosedTickets {...props} />
  </Suspense>
);

export default ClientInClosedTickets;
