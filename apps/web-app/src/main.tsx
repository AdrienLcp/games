import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { App } from './App.tsx'

const rootElement = document.getElementById('root')

if (!rootElement) {
  throw new Error('Root element not found')
}

const Root = createRoot(rootElement)

Root.render(
  <StrictMode>
    <App />
  </StrictMode>
)
