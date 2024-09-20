import React, { useRef } from 'react'

export const TodoAdd = ({newTodo}) => {

    const inputTodo = useRef();

    const onSubmit = (event) => {
        event.preventDefault();
        newTodo({
            id: new Date().getTime(),
            task: inputTodo.current.value,
            done: false
        }) 
    }

    return (
        <>
            <h4>Add To Do</h4>
            <hr />
            <form onSubmit={onSubmit}>
                <input ref={inputTodo} type='text' placeholder='Add new task' className='form-control form' />
                <button type='submit' className='btn btn-outline-primary mt-1'>Add</button>
            </form>
        </>
    )
}
