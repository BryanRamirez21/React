import React, { useEffect, useReducer } from 'react'
import { todoReducer } from './ToDoReducer';
import { TodoAdd } from './components/TodoAdd';
import { TodoList } from './components/TodoList';

const initialState = [
    //{
    //    id: new Date().getTime(),
    //    task: "Collect piedra",
    //    done: false
    //}
];

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || []
}

export const TodoApp = () => {

    const [todos, dispatch] = useReducer(todoReducer, initialState, init);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos) || [])
    },[todos]);

    const handleNewTodo = (todo) => {
        const action = {
            type: "[TODO] Add ToDo",
            payload: todo
        };

        dispatch(action);
    }

    const handleDelTodo = (id) => {
        const action = {
            type: "[TODO] Del ToDo",
            payload: id
        };

        dispatch(action);
    }

    return (
        <>
            <h1>ToDo App ({})<br /><small>Pendientes: ({})</small></h1>
            <hr />
            <div className='row'>
                <div className='col-7'>
                    <TodoList todos={todos} onDelTodo={handleDelTodo}/>
                </div>
                <div className='col-5'>
                    <TodoAdd newTodo={handleNewTodo}/>
                </div>
            </div>
        </>
    )
}
