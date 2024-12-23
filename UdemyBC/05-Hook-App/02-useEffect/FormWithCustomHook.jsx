import React, { useEffect, useState } from 'react'
import { Message } from './Message';
import { useForm } from './hooks/useForm';

export const FormWithCustomHook = () => {

    /*
    const [formState, setFormState] = useState({
        username: "",
        email: "",
        password: ""
    });
    

    const {username, email, password} = formState;

    const onInputChange = ({target}) => {
        const {name, value} = target
        setFormState({
            ...formState,
            [name]: value
        })
    }

    */

    const {formState, onInputChange, onReset} = useForm({
        username: "",
        email: "",
        password: ""
    });
    const {username, email, password} = formState;


    return (
        <>
            <h1>Form With CustomHook</h1>
            <hr />
            <input 
                type='text' 
                className='form-control'
                placeholder='user name'
                name='username'
                value={username}
                onChange={onInputChange}
            />
            <input 
                type='email' 
                className='form-control mt-2'
                placeholder='email@google.com'
                name='email'
                value={email}
                onChange={onInputChange}
            />
            <input 
                type='password' 
                className='form-control mt-2'
                placeholder='password'
                name='password'
                value={password}
                onChange={onInputChange}
            />

            <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold' onClick={onReset}>Borrar</button>
            
            {
                username === "bryan" && <Message />
            }
        </>
    ) 
}
