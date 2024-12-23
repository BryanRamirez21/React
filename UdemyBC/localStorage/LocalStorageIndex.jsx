import React, { useRef, useState } from 'react'
import { useLocalStorage } from './useLocalStorage';

export const LocalStorageIndex = () => {

  const inputVal = useRef();
  const [text, setText] = useLocalStorage("text", "");
  const [times, setTimes] = useLocalStorage("times", 0);

  const changeLocalStorage = () => {
    setText(inputVal.current.value);
    setTimes(times + 1);
  }

  return (
    <div>
      <h2>What's good?</h2>
        <input type='text' name='tweet' className='form form-control' ref={inputVal}/>
        <button onClick={() => changeLocalStorage()} className='btn btn-primary'>Tweet</button> 
        <hr></hr>     
        <p>Your last entry was: {text}</p>
        <p>You've used it: {times}</p>
    </div>
  )
}
