import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { MainApp } from './UdemyBC/05-Hook-App/09-useContext/loginNav/MainApp'
import { LocalStorageIndex } from './UdemyBC/localStorage/LocalStorageIndex'


function App() {
  return (
      <div>
        <LocalStorageIndex/> 
      </div>
  ) 
}

export default App
