import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { addUser } from './userSlice';
import { Email } from './components/Email';
import { Header } from './components/Header';

export const AppYT = () => {

    const dispatch = useDispatch();
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users/1')
        .then((response) => response.json())
        .then((data) => dispatch(addUser(data)))
        .catch((error) => console.log(error))
    }, [])

    return (
        <div>
            <Header />
            <Email />
        </div>
    )
}
