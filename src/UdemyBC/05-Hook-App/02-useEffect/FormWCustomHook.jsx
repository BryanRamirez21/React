
import React from 'react'
import { useForm } from './hooks/useForm';
import { Message } from './Message';

export const FormWCustomHook = () => {

    const {dataUser, onInputChange, onReset} = useForm({
        user: "",
        email: "",
        password: ""
    });
    const {user, email, password} = dataUser;

    return (
        <div>
            <h1>Form With CustomHook</h1>
            <hr />
            <input
                type='text'
                name='user'
                placeholder='user'
                value={user}
                onChange={onInputChange}
            />

            <input
                type='email'
                name='email'
                placeholder='email'
                value={email}
                onChange={onInputChange}
            />

            <input
                type='password'
                name='password'
                placeholder='password'
                value={password}
                onChange={onInputChange}
            />

            <button onClick={onReset}>Reset</button>

            {user === "byron2" && <Message />}
        </div>
    )
}
