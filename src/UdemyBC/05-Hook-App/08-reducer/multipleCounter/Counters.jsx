import React from 'react'

export const Counters = ({counters, onAction}) => {
    return (
        <div className='d-flex justify-content-center flex-column'>
            {
                counters.map((counter, index) => (
                    <div key={counter.id}>
                        <div className='d-flex flex-row justify-content-center align-items-center my-2'>
                            <span>Counter {index + 1}: {counter.value}</span>
                            <button onClick={() => onAction(counter.id, 1)} className='mx-3'> + </button>
                            <button onClick={() => onAction(counter.id, 2)} className=''> - </button>
                            
                        </div>
                        <button onClick={() => onAction(counter.id, 3)}>Reset</button>
                        <button onClick={() => onAction(counter.id, 4)}>Delete</button>
                    </div>
                ))
            }
        </div>
    )
}
