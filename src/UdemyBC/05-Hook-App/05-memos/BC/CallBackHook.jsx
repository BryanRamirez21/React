import React, { useCallback, useState } from 'react'
import { useCounter } from '../../01-useState/hooks/useCounter'
import { ShowIncrement } from './components/ShowIncrement'

export const CallBackHook = () => {

    const [counter, setCounter] = useState(1);

    const increment = useCallback( (value) => { setCounter((c) => c + value) },[])

    return (
        <div>
            <h1>CallBackHook: {counter}</h1>
            <hr /> 
            <ShowIncrement increment={increment}/>
        </div>
    )
}
