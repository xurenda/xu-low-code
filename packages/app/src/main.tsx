import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App/index'
import './global.scss'
import initEngine from './initEngine'

initEngine()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
