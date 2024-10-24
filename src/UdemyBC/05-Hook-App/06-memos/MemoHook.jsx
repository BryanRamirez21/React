import React, { useMemo, useState } from 'react'
import { useCounter } from '../hooks/useCounter'

const heavyStuff = (iterationNumber = 100) => {
    for(let i=0; i<iterationNumber; i++){
        console.log("ahi vamos");
    }
    return `${iterationNumber} done iterations`
}

export const MemoHook = () => {

    const {increase, counter} = useCounter(50);
    const [show, setShow] = useState(true);

    const messageMemorize = useMemo(() => heavyStuff(counter),[counter]);

    return (
        <>
            <h1>Counter <small>{counter}</small></h1>
            <hr />
            <h4>{messageMemorize}</h4>
            <button onClick={() => increase(50)}>+1</button>
            <button onClick={() => setShow(!show)}>Show / Hide {JSON.stringify(show)}</button>
        </>
    )
}
