import React from 'react'

export const CountersReducer = (initialValue, action) => {
    switch(action.type){
        case "newCounter":
            return [...initialValue, action.payload];

        case "add":
            return initialValue.map(counter => {
                return (counter.id === action.payload) ? {...counter, counter: counter.counter + 1} : counter;
            });
        
        case "sust":
            return initialValue.map(counter => (
                (counter.id === action.payload) ? {...counter, counter: counter.counter - 1} : counter
            ))

        case "reset":
            return initialValue.map(counter => (
                (counter.id === action.payload) ? {...counter, counter: 0} : counter
            ))

        case "delete":
            return initialValue.filter(counter => counter.id !== action.payload)
    }
}
