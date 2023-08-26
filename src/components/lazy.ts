import { withSuspense } from './hoc/withSuspense.tsx';
import { lazy as reactLazy } from 'react';

export const lazy = (factory: () => Promise<{ default: () => React.JSX.Element }>) => withSuspense(reactLazy(factory))
