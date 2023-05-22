import { BrowserRouter } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import React from 'react'

import App from './App'
import './index.css'
import { StateProvider } from '././contexts/ContextProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter> 
    <StateProvider>
      <App />
    </StateProvider>
  </BrowserRouter>
)
