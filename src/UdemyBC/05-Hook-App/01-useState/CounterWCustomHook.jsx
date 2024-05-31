import React, { useState } from 'react'
import { useCounter } from './hooks/useCounter'

export const CounterWCustomHook = () => {

    const {counter, increment, decrement, reset} = useCounter(0);

    return (
        <div>
            <h1>Counter with Hook: {counter}</h1>    
            <hr />
            <button onClick={increment}>+1</button>
            <button onClick={reset}>Reset</button>
            <button onClick={decrement}>-1</button>
        </div>
    )
}