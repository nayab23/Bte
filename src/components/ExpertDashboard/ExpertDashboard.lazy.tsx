import React, { lazy, Suspense } from 'react';

const LazyExpertDashboard = lazy(() => import('./ExpertDashboard'));

const ExpertDashboard = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyExpertDashboard {...props} />
  </Suspense>
);

export default ExpertDashboard;
