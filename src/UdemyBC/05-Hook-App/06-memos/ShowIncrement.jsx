import React, { memo } from 'react'

export const ShowIncrement = memo(({increment}) => {

    console.log("regenerated")

    return (
        <button onClick={() => increment(5)}>Increment</button>
    )
})
