import React, { lazy, Suspense } from 'react';

const LazyExpertInApplyOnTicket = lazy(() => import('./ExpertInApplyOnTicket'));

const ExpertInApplyOnTicket = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyExpertInApplyOnTicket {...props} />
  </Suspense>
);

export default ExpertInApplyOnTicket;
