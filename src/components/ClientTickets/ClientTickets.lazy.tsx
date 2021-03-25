import React, { lazy, Suspense } from 'react';

const LazyClientTickets = lazy(() => import('./ClientTickets'));

const ClientTickets = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyClientTickets {...props} />
  </Suspense>
);

export default ClientTickets;
