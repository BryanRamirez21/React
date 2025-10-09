import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HeroesApp } from '../../PRACTICES/src/UdemyBC/06-Heroes-Spa/HeroesApp.jsx';
import { TodoApp } from '../../PRACTICES/src/UdemyBC/05-Hook-App/08-reducer/todoApp/TodoApp.jsx';
import { CountersApp } from '../../PRACTICES/src/UdemyBC/05-Hook-App/08-reducer/multipleCounter/CountersApp.jsx';
import { MainTheme } from '../../PRACTICES/src/UdemyBC/05-Hook-App/09-useContext/darkmodetoggle/MainTheme.jsx';
import { HomePage } from '../../PRACTICES/src/UdemyBC/05-Hook-App/09-useContext/loginNav/HomePage.jsx';


const router = createBrowserRouter([{
  path: '/',
  element: <HomePage />
}]);

ReactDOM.createRoot(document.getElementById('root')).render(
  //<React.StrictMode>
    //<BrowserRouter>
    
      
      //This is for the new route practice, the old one its based on udemyBC
      
      <RouterProvider router={router} />


    //</BrowserRouter>
    
  //</React.StrictMode>,
)
