import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom';
import { HeroesApp } from './UdemyBC/06-Heroes-Spa/HeroesApp.jsx';
import { TodoApp } from './UdemyBC/05-Hook-App/08-reducer/todoApp/TodoApp.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  //<React.StrictMode>
    <BrowserRouter>
      <TodoApp />
    </BrowserRouter>
    
  //</React.StrictMode>,
)
