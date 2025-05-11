import { BrowserRouter } from 'react-router'

import { Router } from '@/application/router'
import { ErrorBoundary } from '@/presentation/components'

import '@/presentation/styles/base.sass'

export const App = () => (
  <BrowserRouter>
    <ErrorBoundary>
      <Router />
    </ErrorBoundary>
  </BrowserRouter>
)
