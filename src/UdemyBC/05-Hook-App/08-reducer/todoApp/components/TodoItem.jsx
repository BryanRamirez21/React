import React from 'react'

export const TodoItem = ({todo, onDelete}) => {
    return (
        <>
            <li className='list-group-item d-flex justify-content-between'>
                <span className='align-self-center'>{todo.task}</span>
                <button onClick={() => onDelete(todo.id)} className='btn btn-danger'>Delete</button>
            </li>
        </>
    )
}
