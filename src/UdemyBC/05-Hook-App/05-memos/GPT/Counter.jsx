import React, { useCallback, useState } from 'react';
import { Button } from './components/Button';

export const Counter = () => {

  const [counter, setCounter] = useState(0);

  const increment = useCallback( () => {setCounter((prevCount) => prevCount + 1) },[])

  const decrement = useCallback( () => {setCounter((prevCount) => prevCount - 1) },[])

  return (
    <div>
      <h1>Counter App</h1>
      <p>Counter: {counter}</p>

      <Button action={increment} typeButton={"Increment"} />
      <Button action={decrement} typeButton={"Decrement"} />
    </div>
  )
}
