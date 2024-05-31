import React from 'react'
import {CounterApp} from './01-useState/CounterApp'
import { CounterWCustomHook } from './01-useState/CounterWCustomHook'
import { SimpleForm } from './02-useEffect/SimpleForm'
import { FormWCustomHook } from './02-useEffect/FormWCustomHook'
import { MultipleCustomHooks } from './03-functionalComponents/MultipleCustomHooks'
import { Layout } from './04-useLayoutEffect/Layout'
import { Memorize } from './05-memos/Memorize'
import { MemoHook } from './05-memos/MemoHook'
import { CallBackHook } from './05-memos/CallBackHook'
import { Padre } from './06-tarea-memo/Padre'


export const HooksApp = () => {
    return (
    <div>
        <h1>Hooks App</h1>

        <Padre />
    </div>
    )
}

