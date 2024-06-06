import React, { useMemo, useState } from 'react'
import { useCounter } from '../../01-useState/hooks/useCounter'

const heavySruff = (iterationNum=100) => {
    for(let i = 0; i<iterationNum; i++){
        console.log("ira");
    }

    return `${iterationNum} realizadas`
}

export const MemoHook = () => {

    const {counter, increment, decrement} = useCounter(1000);
    const [show, setShow] = useState(true);

    const memorizedVal = useMemo(() => heavySruff(counter), [counter])

    return (
        <div>
            <h1>Memorize</h1>
            <p>Counter: {counter}</p>
            <hr/>
            <h4>{memorizedVal}</h4>
            <button onClick={increment}>+1</button>
            <button onClick={() => setShow(!show)}>show/hide {JSON.stringify(show)}</button>
        </div>
    )
}
