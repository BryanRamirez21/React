import React, { useCallback, useState } from 'react'
import { ShowIncrement } from './ShowIncrement'

export const CallBackHook = () => {

    const [counter, setCounter] = useState(10);

    const incrementFunc = useCallback((value) => {
        setCounter((c) => c + value);
    },[]);

    /*
    const incrementFunc = () => {
        setCounter(counter + 1);
    }
    */

    return (
        <>
            <h1>UseCallBack Hook {counter}</h1>
            <hr></hr>
            <ShowIncrement increment={incrementFunc}/>
        </>
    )
}
