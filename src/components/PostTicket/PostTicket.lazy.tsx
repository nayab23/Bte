import React, { lazy, Suspense } from 'react';

const LazyPostTicket = lazy(() => import('./PostTicket'));

const PostTicket = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyPostTicket {...props} />
  </Suspense>
);

export default PostTicket;
