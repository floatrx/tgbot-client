import React from 'react';

type WithSuspenseType = <T extends object>(
  Component:  React.LazyExoticComponent<() => React.JSX.Element>
) => React.FC<T>;

export const withSuspense: WithSuspenseType = (Component) =>
  (props) =>
    (
      <React.Suspense fallback={null}>
        <Component {...props} />
      </React.Suspense>
    );
