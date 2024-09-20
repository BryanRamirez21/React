import React, { useCallback, useEffect, useState } from 'react'
import { Hijo } from './Hijo';

export const Padre = () => {

    const numbers = [2,4,6,8,10];
    const [counter, setCounter] = useState(0);


    const incrementFunc = useCallback((newVal) => {
        setCounter((c) => c + newVal)
    },[]);


    return (
        <>
            <h1>Padre</h1>
            <p>Total: {counter}</p>
            <hr />
            {
                numbers.map((number) => (
                    <Hijo key={number} increment={incrementFunc} number={number}/>
                ))
            }
        </>
    )
}
