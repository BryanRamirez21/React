import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
//import { TrafficLight } from './01-UseState/TrafficLigth.tsx'
//import { TrafficLightWEffect } from './02-useEffect/TrafficLifghtWEffect.tsx'
//import { TrafficLightWHook } from './02-useEffect/TrafficLifghtWHook.tsx'
//import { PokeExamples } from './03-Examples/PokeExamples.tsx'
//import { FocusScreen } from './04-useRef/FocusScreen.tsx'
import { TasksApp } from './05-useReducer/TasksApp.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <TasksApp />
  </StrictMode>,
)
