import React, {useState} from 'react'

export const CounterApp = () => {

    const [counter, setCounter] = useState({
        counter1: 10,
        counter2: 20,
        counter3: 30,
    })

    return (
        <>
            <h1>Counter: {counter.counter1}</h1>
            <hr />
            <button onClick={() => setCounter({
                counter1: counter.counter1 + 10
            })}>+10</button>
        </>
    )
}
