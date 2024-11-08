import React, { useMemo, useState } from 'react'

const heavyStuff = (num) => {
    for(let x = 0; x<=num; x++){
        console.log("rendered");
    }
}

export const MemoHook = () => {

    const [counter, setCounter] = useState(0);
    const increment = () => {
        setCounter(counter + 100)
    }

    const [otherS, setOtherS] = useState(false);
    const changeVal = () => {
        setOtherS(!otherS)
    }

    const messageMemo = useMemo(() => heavyStuff(counter), [counter]);

    return (
        <div>
            <h1>Counter: {counter}</h1>
            {/* <h4>{heavyStuff(counter)}</h4> */}
            {/* if we dont use the memo (line 21), and we only use the heavyStuff func, itll render on each change this component could have */}
                {/* and we only want to use the func whenever the "counter" changes, not the "otherS" */}

            <h4>{messageMemo}</h4> 
            <button className='btn btn-outline-dark' onClick={increment}>+1</button>
            <button className='btn btn-outline-dark' onClick={changeVal}>Change: {JSON.stringify(otherS)}</button>
        </div>
    )
}
