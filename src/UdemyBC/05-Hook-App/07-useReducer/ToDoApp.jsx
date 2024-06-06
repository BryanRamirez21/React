import React, { useReducer } from 'react'
import { todoReducer } from './ToDoReducer';

const initalState = [
    {
        id: new Date().getTime(),
        description: "correr",
        done: false
    },
    {
        id: new Date().getTime() * 3,
        description: "caminar",
        done: false
    },
];

export const ToDoApp = () => {

    const [todos, dispatch] = useReducer(todoReducer, initalState)

    return (
        <>
            <h1>To Do App: 10, <small>Pending: {todos.length}</small></h1>
            <hr />

            <div className='row'>
                <div className='col-7'>
                    <ul className='list-group'>

                        {todos.map((task) => (
                            <li className='list-group-item d-flex justify-content-between' key={task.id}>
                                <span className='align-self-center'>{task.description}</span>
                                <button className='btn btn-success'>Complete</button>
                                <button className='btn btn-danger'>Delete</button>
                            </li>
                        ))}

                    </ul>
                </div>

                <div className='col-5'>
                    <h4>Add task</h4>
                    <hr />
                    <form>
                        <input type='text' placeholder='New task' className='form-control' />

                        <button type='submit' className='btn btn-outline-primary mt-1'>Add task</button>
                    </form>
                </div>
            </div>
            
        </>
    )
}
