import React, { lazy, Suspense } from 'react';

const LazyClientNotifications = lazy(() => import('./ClientNotifications'));

const ClientNotifications = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyClientNotifications {...props} />
  </Suspense>
);

export default ClientNotifications;
