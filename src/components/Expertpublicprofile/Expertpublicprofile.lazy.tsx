import React, { lazy, Suspense } from 'react';

const LazyExpertpublicprofile = lazy(() => import('./Expertpublicprofile'));

const Expertpublicprofile = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyExpertpublicprofile {...props} />
  </Suspense>
);

export default Expertpublicprofile;
