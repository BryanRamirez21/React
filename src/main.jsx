import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { store } from './UdemyBC/08-toolkit-redux/store/Store.js'
import { Provider } from 'react-redux'
import { Toolkit } from './UdemyBC/08-toolkit-redux/Toolkit.jsx'
import { PokemonApp } from './UdemyBC/08-toolkit-redux/PokemonApp.jsx'
import { ToDoApp } from './UdemyBC/08-toolkit-redux/ToDoApp.jsx'
import { Try } from './Try.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  //<React.StrictMode>
    //<BrowserRouter>
      
        <Try />
      
    //</BrowserRouter>
    
  //</React.StrictMode>,
)
