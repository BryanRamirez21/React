import React, { useState } from 'react'

export const useCounter = (initVal = 1) => {

    const [counter, setCounter] = useState(initVal);

    const increase = () => {
        setCounter(counter + 1);
    }
    const decrease = () => {
        if(counter > 1)
            setCounter(counter - 1);
    }

    const reset = () => {
        setCounter(initVal);
    }

  return {
    counter,
    increase,
    decrease,
    reset
  }

}
