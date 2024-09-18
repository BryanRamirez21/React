import React, { useState } from 'react'
import { useCounter } from '../hooks/useCounter'
import { Small } from './Small'

export const Memorize = () => {

    const {increase, decrease, counter} = useCounter(1);
    const [show, setShow] = useState(true)

    return (
        <>
            <h1>Counter <Small value={counter}/></h1>
            <hr />
            <button onClick={increase}>+1</button>
            <button onClick={() => setShow(!show)}>Show / Hide {JSON.stringify(show)}</button>
        </>
    )
}
