import React from 'react'

export const Counters = ({counters, operations}) => {
    return (
        <>
            {
                counters.map((counter, id) => (
                    <div key={counter.id} className='d-flex flex-col justify-center align-items-center'>
                        <div className='d-flex flex-row justify-center align-items-center gap-2'>
                            <span>Counter {id}: {counter.value}</span>
                            <button onClick={() => operations(counter.id, "increment")}>+</button>
                            <button onClick={() => operations(counter.id, "decrement")}>-</button>
                        </div>
                        <div>
                            <button onClick={() => operations(counter.id, "reset")} className='mr-4'>Reset</button>
                            <button onClick={() => operations(counter.id, "delete")}>Delete</button>
                        </div>                        
                    </div>
                ))
            }
            
        </>
    )
}
