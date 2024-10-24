import React, { useRef } from 'react'

//! i forgot to deestructure the function
export const TodoAdd = ({newTodo}) => {

    const inputRef = useRef();

    const onSubmit = (e) => {
        e.preventDefault();

        newTodo({
            id: new Date().getTime() * 3,
            task: inputRef.current.value,
            done: false,
        });
    }

    return (
        <>
            <form onSubmit={onSubmit}>
                <input type='text' ref={inputRef} placeholder='Add New ToDo' className='form-control form'/>
                <button type='submit' className='btn btn-outline-primary mt-1'>Add</button>
            </form>
        </>
    )
}
