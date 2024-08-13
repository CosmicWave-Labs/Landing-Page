import React from 'react'
import ReactDOM from 'react-dom/client'
import Footer from './Components/Footer'
import Home from './Components/Home'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Home />
  
    <Footer/>
  </React.StrictMode>,
)
