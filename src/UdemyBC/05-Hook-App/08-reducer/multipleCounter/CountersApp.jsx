import React, { useReducer, useState } from 'react'
import { CountersReducer } from './CountersReducer'
import {Counters} from './Counters'

export const CountersApp = () => {
    
    const initalC = []
    
    const [counter, dispatch] = useReducer(CountersReducer, initalC);

    const handleAction = (type, payload) => {
        const action = {
            type,
            payload
        }
        dispatch(action)
    }

    return (
        <>
            <h1>Multiple CountersApp - useReducer</h1>
            <hr />
            <Counters counters={counter} onAction={handleAction} />
        </>
    )
}
