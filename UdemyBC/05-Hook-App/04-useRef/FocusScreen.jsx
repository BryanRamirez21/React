import React, { useRef } from 'react'

export const FocusScreen = () => {

    const input = useRef();

    const setFocus = () => {
        input.current.select();
    }

    return (
        <div>
            <h1>Focus Screen</h1>
            <hr />
            <input
                placeholder='name'
                className=''
                ref={input}
            />
            <button className=' mt-2' onClick={setFocus}>Set Focus</button>
        </div>
    )
}
