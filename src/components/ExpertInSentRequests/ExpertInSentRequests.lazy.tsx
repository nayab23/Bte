import React, { lazy, Suspense } from 'react';

const LazyExpertInSentRequests = lazy(() => import('./ExpertInSentRequests'));

const ExpertInSentRequests = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyExpertInSentRequests {...props} />
  </Suspense>
);

export default ExpertInSentRequests;
