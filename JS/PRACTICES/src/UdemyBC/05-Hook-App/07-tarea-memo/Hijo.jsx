import React, { memo } from 'react'

export const Hijo = memo(({increment, numero}) => {

    console.log("im here again");

    return (
        <>
            <button
                className='btn btn-primary mr-3'
                onClick={() => increment(numero)}
            >
                {numero}
            </button>
        </>
    )
})
