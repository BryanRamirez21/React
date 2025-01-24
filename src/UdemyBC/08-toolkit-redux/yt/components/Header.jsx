import React from 'react'
import { useSelector } from 'react-redux'

export const Header = () => {

    // the "user" name its the name of our silcer on the slice file 
    const user = useSelector((state) => state.user)

    return (
        <div>
            <header>
                <h1>Redux toolkix ex</h1>
                <ul>
                    <li>name: {user.name}</li>
                    <li>email: {user.email}</li>
                </ul>
            </header>
        </div>
    )
}
