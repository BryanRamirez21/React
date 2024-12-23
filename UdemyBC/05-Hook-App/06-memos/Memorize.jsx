import React, { useState } from 'react'
import {Small} from './Small'

export const Memorize = () => {

    const [counter, setCounter] = useState(0)
    const [otherSat, setOtherSat] = useState(false);

    const changeCounter = () => {
        setCounter(counter + 1)
    }
    const changeState = () => {
        setOtherSat(!otherSat)
    }

    return (
    <>
        <h1>Counter <Small counter={counter} /></h1>
        <hr />
        <button className='btn btn-outline-primary' onClick={changeCounter}>Increment</button>
        <button className='btn btn-outline-info' onClick={changeState}>Change: {JSON.stringify(otherSat)}</button>
    </>
    )
}
