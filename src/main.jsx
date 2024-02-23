import React from 'react'
import ReactDOM from 'react-dom/client'
import './Components/Navbar.jsx'
import App from './App.jsx'
import Navbar from './Components/Navbar.jsx'
import './Style/Navbar.css'
import './Style/Sobre.css'
import './Style/Trabalhos.css'
import './Pages/Trabalhos.jsx'
import './Pages/Contato.jsx'
import Sobre from './Pages/Sobre.jsx'
import Contato from './Pages/Contato.jsx'
import Trabalhos from './Pages/Trabalhos.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar/>
    <App/> 
    <Sobre/>
    <Trabalhos/>
    <Contato/>
    
  </React.StrictMode>,
)
