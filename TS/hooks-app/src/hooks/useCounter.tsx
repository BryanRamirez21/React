import { useState } from 'react'

export const useCounter = (initialVal: number = 1) => {

  const [counter, setCounter] = useState(initialVal);

  const increment = () => {
    setCounter(counter + 1)
  }

  const decrement = () => {
    if(counter <= 1) return;
    setCounter(counter - 1)
  }

  return {
    counter,
    increment,
    decrement
  }
}
