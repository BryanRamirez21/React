import { useState } from "react"

export const useCounter = (initval = 10) => {

    const [counter, setCounter] = useState(initval);
    
    const increment = (value = 1) => {
        setCounter(counter + value)
    }
    const decrement = (value = 1) => {
        setCounter(counter - value)
    }
    const reset = () => {
        setCounter(initval)
    }

    return{
        counter,
        increment,
        decrement,
        reset
    }
}