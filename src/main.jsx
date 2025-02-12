import React from 'react'
import {Provider} from 'react-redux'
import ReactDOM from 'react-dom/client'
//import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom';
import { JournalApp } from './UdemyBC/07-journal-app/JournalApp.jsx';
import { store } from './UdemyBC/07-journal-app/store/'
import { App } from './TRYS/RouterLazyLoading/App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  //<React.StrictMode>
  <Provider store={store}>
    <BrowserRouter>
      <JournalApp />
    </BrowserRouter>
  </Provider>
    

  //</React.StrictMode>,
)