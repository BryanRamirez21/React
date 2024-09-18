import React, {memo} from 'react'

export const Small = memo(({value}) => {
    console.log("here i am")
    return (
        <small>{value}</small>
    )
})
