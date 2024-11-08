import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom';
import { HeroesApp } from './UdemyBC/06-Heroes-Spa/HeroesApp.jsx';
import { MemoHook } from './UdemyBC/05-Hook-App/06-memos/MemoHook.jsx';
import { Forma } from './UdemyBC/05-Hook-App/06-memos/memo2/Forma.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  //<React.StrictMode>
    <BrowserRouter>
      <Forma />
    </BrowserRouter>
    
  //</React.StrictMode>,
)
