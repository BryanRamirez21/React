import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom';
import { HeroesApp } from './UdemyBC/06-Heroes-Spa/HeroesApp.jsx';
import { TodoApp } from './UdemyBC/05-Hook-App/08-reducer/todoApp/TodoApp.jsx';
import { CountersApp } from './UdemyBC/05-Hook-App/08-reducer/multipleCounter/CountersApp.jsx';
import { MainApp } from './UdemyBC/05-Hook-App/09-useContext/loginNav/MainApp.jsx';
import { MainTheme } from './UdemyBC/05-Hook-App/09-useContext/darkmodetoggle/MainTheme.jsx';
import { JournalApp } from './UdemyBC/07-journal-app/JournalApp.jsx';
import { MainRoute } from './UdemyBC/05-Hook-App/10-routes/MainRoute.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  //<React.StrictMode>
    //<BrowserRouter>
      <MainRoute />
    //</BrowserRouter>
    
  //</React.StrictMode>,
)
