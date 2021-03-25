import React, { lazy, Suspense } from 'react';

const LazyClientDashboard = lazy(() => import('./ClientDashboard'));

const ClientDashboard = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyClientDashboard {...props} />
  </Suspense>
);

export default ClientDashboard;
