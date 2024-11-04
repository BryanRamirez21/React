import React from 'react'

//! es "payload", no load o typeload
export const CountersReducer = (initialState, action) => {
    switch(action.type){
        case "AddCounter":
            return [...initialState, action.load];
            
        case "IncCounter":
            return initialState.map((counter) => 
                (counter.id === action.load) ? {...counter, value: counter.value + 1} : counter
            );

        case "DecCounter":
            return initialState.map((counter) => (
                (counter.id === action.load) ? {...counter, value: counter.value - 1} : counter
            ));

        case "ResetCounter":
            return initialState.map((counter) => (
                (counter.id === action.load) ? {...counter, value: 0} : counter
            ));

        case "DelCounter":
            return initialState.filter((counter) => counter.id !== action.load);
    }
}
