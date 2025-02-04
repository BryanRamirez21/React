import React, { useState } from 'react'

export const CounterBack = () => {

    const [clicks, setClicks] = useState(0);
    const [timer, setTimer] = useState(9);

    const addClick = () => {
        setClicks(clicks + 1)
    }

    
    setTimeout(function(){
        if(timer > 0)
        setTimer(timer - 1)
    }, 1000);

    return (
        <div>
            <h3>No off clicks until timer stops</h3>
            <div className='d-flex flex-column justify-content-center align-items-center' style={{backgroundColor:'orange', width:'400px', height:'400px'}}>
                <h3>{clicks}</h3>
                Time left: {timer} seconds
                {
                    timer !== 0
                    ?
                    <button onClick={addClick} className='w-25 mt-5'>+</button> 
                    :
                    <></>
                }
            </div>
        </div>
    )
}
