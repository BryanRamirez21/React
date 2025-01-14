import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import { AppYT } from './UdemyBC/08-toolkit-redux/yt/AppYT.jsx'
import { store } from './UdemyBC/08-toolkit-redux/yt/store.js'
ReactDOM.createRoot(document.getElementById('root')).render(
  //<React.StrictMode>
    //<BrowserRouter>
      <Provider store={store}>
        <AppYT />
      </Provider>
    //</BrowserRouter>
    
  //</React.StrictMode>,
)
