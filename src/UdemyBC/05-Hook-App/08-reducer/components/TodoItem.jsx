import React from 'react'

export const TodoItem = ({todo, onDelTodo}) => {
    return (
        <div>
            <li className=' list-group-item d-flex justify-content-between'>
                <span className=' align-self-center'>{todo.task}</span>
                <button onClick={() => onDelTodo(todo.id)} className=' btn btn-danger'>Borrar</button>
            </li>
        </div>
    )
}
