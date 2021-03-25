import React, { lazy, Suspense } from 'react';

const LazyExpertprivateprofile = lazy(() => import('./Expertprivateprofile'));

const Expertprivateprofile = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyExpertprivateprofile {...props} />
  </Suspense>
);

export default Expertprivateprofile;
