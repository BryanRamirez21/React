import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom';
import { MainApp } from './UdemyBC/05-Hook-App/09-useContext/loginNav/MainApp.jsx';
import { ThemeContext } from './UdemyBC/05-Hook-App/09-useContext/darkmodetoggle/ThemeContext.jsx';
import { MainTheme } from './UdemyBC/05-Hook-App/09-useContext/darkmodetoggle/MainTheme.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  //<React.StrictMode>
    <BrowserRouter>
      <MainTheme />
    </BrowserRouter>
    
  //</React.StrictMode>,
)
