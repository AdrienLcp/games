import { type ComponentType, type FC, lazy, type ReactElement, Suspense } from 'react'

import { Loader } from '@/presentation/components'

export const lazyComponent = <P extends object>(
  importPath: () => Promise<{ default: ComponentType<P> }>,
  componentName?: string,
  fallback: ReactElement = <Loader />
) => {
  const LazyComponent = lazy(importPath)

  const Component: FC<P> = (props) => (
    <Suspense fallback={fallback}>
      <LazyComponent {...props} />
    </Suspense>
  )

  Component.displayName = componentName ?? 'Lazy Component'

  return Component
}
