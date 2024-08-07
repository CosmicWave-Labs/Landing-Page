import React from 'react'
import ReactDOM from 'react-dom/client'
import Inicio from './App'
import Footer from './Components/Footer'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Inicio />
    <Footer/>
  </React.StrictMode>,
)
