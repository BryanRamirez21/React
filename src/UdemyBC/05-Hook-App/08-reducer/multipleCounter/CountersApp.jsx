import React, { useReducer } from 'react'

export const CountersApp = () => {

    const initialValue = [];
    const [counters, dispatch] = useReducer(CountersReducer, counters);

    const onHandleActions = (actionType) => {
        const action = {
            type: actionType,
            loadType: 
        }
    }

    return (
        <>
            <h1>Multiple CountersApp - useReducer</h1>
            <hr />
            <Counters counters={counters} onActions={onHandleActions}/>
        </>
    )
}
