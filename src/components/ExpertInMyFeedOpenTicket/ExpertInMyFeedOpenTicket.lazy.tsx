import React, { lazy, Suspense } from 'react';

const LazyExpertInMyFeedOpenTicket = lazy(() => import('./ExpertInMyFeedOpenTicket'));

const ExpertInMyFeedOpenTicket = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyExpertInMyFeedOpenTicket {...props} />
  </Suspense>
);

export default ExpertInMyFeedOpenTicket;
