import React, { useReducer } from 'react'
import { Counters } from './Counters'
import { CountersReducer } from './CountersReducer';

export const CountersApp = () => {

    const initialState = [];
    const [counters, dispatch] = useReducer(CountersReducer, initialState);

    const handleNewCounter = () => {
        const action = {
            type: "AddCounter",
            load: {id:new Date().getTime(), value:0}
        };
        dispatch(action);
    }

    const handleActions = (id, action) => {
        var actionName = "";
        switch(action){
            case 1: actionName = "IncCounter";
            break;
            case 2: actionName = "DecCounter";
            break;
            case 3: actionName = "ResetCounter";
            break;
            case 4: actionName = "DelCounter";
            break;
        }
        const action2 = {
            type: actionName,
            load: id
        };

        dispatch(action2)
    }

    return (
        <>
            <h1>Multiple CountersApp - useReducer</h1>
            <hr />
            <Counters counters={counters} onAction={handleActions}/>
            <button onClick={handleNewCounter} className='btn btn-primary mt-4'>Add new Counter</button>
        </>
    )
}
