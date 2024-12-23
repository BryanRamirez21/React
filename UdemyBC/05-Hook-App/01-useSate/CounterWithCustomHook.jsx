import React, { useState } from 'react'
import { useCounter } from './hooks/useCounter'

export const CounterWithCustomHook = () => {

    const {counter, increment, decrement, reset} = useCounter();

    return (
        <>
            <h1>Counter with hook: {counter}</h1>
            <hr />
            <button onClick={() => increment(6)}>+1</button>
            <button onClick={reset}>Reset</button>
            <button onClick={() => decrement(4)}>-1</button>
        </>
    )
}
