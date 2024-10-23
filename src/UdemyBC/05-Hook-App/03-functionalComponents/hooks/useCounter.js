import React, { useState } from 'react'

export const useCounter = (initalValue = 1) => {

  const [counter, setCounter] = useState(initalValue);

  const increase = () => {
    setCounter(counter + 1)
  }

  const decrease = () => {
    if(counter !== 1)
      setCounter(counter - 1)
  }

  const reset = () => {
    setCounter(initalValue)
  }

  return {
    counter,
    increase,
    decrease
  }
}
