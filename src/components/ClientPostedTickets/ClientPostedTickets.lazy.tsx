import React, { lazy, Suspense } from 'react';

const LazyClientPostedTickets = lazy(() => import('./ClientPostedTickets'));

const ClientPostedTickets = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyClientPostedTickets {...props} />
  </Suspense>
);

export default ClientPostedTickets;
