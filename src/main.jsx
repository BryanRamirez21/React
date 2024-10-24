import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom';
import { TodoApp } from './UdemyBC/05-Hook-App/08-reducer/todoApp/TodoApp.jsx';
import { CountersApp } from './UdemyBC/05-Hook-App/08-reducer/multipleCounter/CountersApp.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  //<React.StrictMode>
    <BrowserRouter>
      <CountersApp />
    </BrowserRouter>
    
  //</React.StrictMode>,
)
