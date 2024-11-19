import React from 'react'
import { useCounters } from './useCounters'

export const Counters = ({counters, onAction}) => {

    const {handleNewC, handleAdd, handleSustr, handleReset, handleDelet} = useCounters(onAction);

    return (
        <div>
            <div className='d-flex flex-column gap-2 flex-wrap align-content-center mb-3'>
                {
                    counters.map((counter, index, key) => (
                        <div key={counter.id} className="d-flex flex-row gap-2 align-items-center">
                            <span>Counter {index +1}: {counter.counter}</span>
                            <button onClick={() => handleAdd(counter.id)} className='btn btn-outline-secondary'>+</button>
                            <button onClick={() => handleSustr(counter.id)} className='btn btn-outline-secondary'>-</button>
                            <br/>
                            <button onClick={() => handleReset(counter.id)} className='btn btn-outline-secondary'>Reset</button>
                            <button onClick={() => handleDelet(counter.id)} className='btn btn-outline-secondary'>Delete</button>
                        </div>
                    ))
                }
            </div>
            <button onClick={handleNewC} className='btn btn-primary'>Add new counter</button>
        </div>
    )
}
