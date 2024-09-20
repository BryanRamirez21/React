import React, { memo } from 'react'

export const Hijo = memo(({number, increment}) => {
    console.log("hola")
    return (
        <>
            <button onClick={() => increment(number)}>{number}</button>
        </>
    )
})
