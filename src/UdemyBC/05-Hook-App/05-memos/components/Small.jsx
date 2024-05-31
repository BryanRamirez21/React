import React, {memo} from 'react'

export const Small = React.memo(({value}) => {

    console.log("hola de nuez")

    return (
        <div>
            <p>Counter: {value}</p>
        </div>
    )
})
