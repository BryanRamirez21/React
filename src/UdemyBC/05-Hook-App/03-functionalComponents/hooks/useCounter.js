import { useState } from "react"

export const useCounter = (initialValue = 1) => {

  const [counter, setCounter] = useState(initialValue);

  const increase = () => {
    setCounter(counter + 1);
  }
  const decrease = () => {
    if(counter > 1)
      setCounter(counter - 1);
  }

  return {
    counter,
    increase,
    decrease
  }
}
