import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom';
import { HeroesApp } from './UdemyBC/06-Heroes-Spa/HeroesApp.jsx';
import ComponenteContexto from './OPBC/hooks/ContextHook_eg2.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  //<React.StrictMode>
    <BrowserRouter>
      <ComponenteContexto />
    </BrowserRouter>
    
  //</React.StrictMode>,
)
