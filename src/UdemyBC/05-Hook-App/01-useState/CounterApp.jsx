import React, { useState } from 'react'

export const CounterApp = () => {

    const [counter, setCounter] = useState({
        counter1: 10, 
        counter2: 10,
        counter3: 10,
    });

    

    return (
        <div>
            <h1>Counter 1: {counter.counter1}</h1>
            <h1>Counter 2: {counter.counter2}</h1>
            <h1>Counter 3: {counter.counter3}</h1>
            <hr />
            <button onClick={() => setCounter({
                counter1: counter.counter1 + 1,
                counter2: counter.counter2 + 1,
                counter3: counter.counter3 + 1,
            })}>+1</button>
            <button onClick={() => setCounter(counter - 1)}>-1</button>
        </div>
    )
}
