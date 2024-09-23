import React from 'react'

export const CountersReducer = (initalState, action) => {
    switch (action.type) {
        case "AddCounter":
            return [...initalState, action.load];

        case "incCounter":
            return initalState.map(counter => 
                (counter.id === action.load) ? { ...counter, value: counter.value + 1 } : counter
            );

        case "decCounter":
            return initalState.map((counter) => (
                (counter.id === action.load) ? {...counter, value: counter.value - 1} : counter
            ))

        case "resetCounter":
            return initalState.map((counter) => (
                (counter.id === action.load) ? {...counter, value: 0} : counter
            ));

        case "delCounter":
            return initalState.filter(counter => counter.id !== action.load);
    
        default:
        break;
    }
}
