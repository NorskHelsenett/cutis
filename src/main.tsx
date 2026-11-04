/**
 * @file React bootstrap entry point.
 *
 * Mounts the Cutis application into the root DOM node.
 */

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './foundations/index.css'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
