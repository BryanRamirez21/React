import React, { useReducer } from 'react'
import { Counters } from './Counters'
import { CountersReducer } from './CountersReducer';

export const CountersApp = () => {

    const initalState = [];

    const [counters, dispatch] = useReducer(CountersReducer, initalState);


    const addCounter = () => {
        const newCounter = {
            id: new Date().getTime(),
            value: 0,
        };

        const action = {
            type: "AddCounter",
            load: newCounter
        };
        dispatch(action);
    }

    const handleOperations = (id, operation) => {
        let action = {};
        switch (operation) {
            case "increment":
                action = {
                    type: "incCounter",
                    load: id
                };
            break;
            case "decrement":
                action = {
                    type: "decCounter",
                    load: id
                };
            break;
            case "reset":
                action = {
                    type: "resetCounter",
                    load: id
                };
            break;
            case "delete":
                action = {
                    type: "delCounter",
                    load: id
                };
            break;
        
            default:
            break;
            
        }
        dispatch(action);
    }

    return (
        <>
            <h1>Multiple Countes with useReducer</h1>
            <hr />

            <Counters counters={counters} operations={handleOperations}/>

            <button onClick={addCounter}>Add Counter</button>
        </>
    )
}
