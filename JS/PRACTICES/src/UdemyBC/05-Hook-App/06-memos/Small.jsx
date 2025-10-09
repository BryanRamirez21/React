import React, { memo } from 'react'

//! "memo" will only
export const Small = ({counter}) => {

    console.log("here again")

    return (
        <div>{counter}</div>
    )
}
