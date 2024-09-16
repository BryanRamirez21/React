import React, { useState } from 'react'
import { Message } from './Message';

export const SimpleForm = () => {

    const [dataUser, setDataUser]= useState({
        user: "",
        email:"",
    });

    const onInputChange = (e) => {
        const {name, value} = e.target;
        setDataUser({
            ...dataUser,
            [name]: value
        })
    }

    return (
        <div>
            <h1>Simple Form</h1>
            <hr />
            <input
                type='text'
                name='user'
                placeholder='username'
                value={dataUser.user}
                onChange={onInputChange}
            />

            <input
                type='email'
                name='email'
                placeholder='email'
                value={dataUser.email}
                onChange={onInputChange}
            />

            {dataUser.user === 'byron2' && <Message />}
        </div>
    )
}
