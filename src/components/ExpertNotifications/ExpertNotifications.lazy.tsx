import React, { lazy, Suspense } from 'react';

const LazyExpertNotifications = lazy(() => import('./ExpertNotifications'));

const ExpertNotifications = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyExpertNotifications {...props} />
  </Suspense>
);

export default ExpertNotifications;
