import React from 'react'

export const ShowIncrement = React.memo(( {increment}) => {
    console.log("aqui ando")
    return (
        <button onClick={() => {increment(5);}}>Increase</button>
    )
})
