import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App/index'
import './global.scss'
import initEngine from './initEngine'
import GlobalContext from './context'

const engine = initEngine()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GlobalContext.Provider value={{ engine }}>
      <App />
    </GlobalContext.Provider>
  </React.StrictMode>,
)
