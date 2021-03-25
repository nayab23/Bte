import React, { lazy, Suspense } from 'react';

const LazyExpertSettings = lazy(() => import('./ExpertSettings'));

const ExpertSettings = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyExpertSettings {...props} />
  </Suspense>
);

export default ExpertSettings;
