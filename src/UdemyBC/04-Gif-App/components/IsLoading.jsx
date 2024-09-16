import React from 'react'

export function IsLoading({isLoading}) {
  return (
    <div>
        {
            isLoading && (<h1>Loading...</h1>)
        }
    </div>
  )
}
