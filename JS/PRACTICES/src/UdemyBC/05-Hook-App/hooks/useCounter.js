import React, { useState } from 'react'

export const useCounter = (initVal = 1) => {

    const [counter, setCounter] = useState(initVal);

    const increase = (val = 1) => {
        setCounter(counter + val);
    }
    const decrease = (val = 1) => {
        if(counter > 1)
            setCounter(counter - val);
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
