import React from 'react'
import { Link } from 'react-router-dom'

export const NotFound = () => {
    return (
        <>
            <h2>404 not found</h2>
            <Link to="/" className='btn btn-primary'>Return</Link>
        </>
    )
}
