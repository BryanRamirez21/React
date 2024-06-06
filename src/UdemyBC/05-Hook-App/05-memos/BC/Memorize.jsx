import React, { useState } from 'react'
import { useCounter } from '../../01-useState/hooks/useCounter'
import { Small } from './components/Small';

export const Memorize = () => {

    const {counter, increment, decrement} = useCounter();
    const [show, setShow] = useState(true)

    return (
        <div>
            <h1>Memorize</h1>
            <Small value={counter} />
            <button onClick={increment}>+1</button>
            <button onClick={() => setShow(!show)}>show/hide {JSON.stringify(show)}</button>
        </div>
    )
}
