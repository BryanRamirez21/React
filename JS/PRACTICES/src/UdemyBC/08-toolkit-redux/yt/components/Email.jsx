import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeEmail, userSlice } from '../userSlice'

export const Email = () => {

    const email = useSelector((state) => state.user.email);
    const dispatch = useDispatch();

    const handleChange = (e) => {
        const email = e.target.value;
        dispatch(changeEmail(email))
    }

    return (
        <div>
            <input type='email' placeholder='email' name='email' value={email} onChange={handleChange} />
        </div>
    )
}
