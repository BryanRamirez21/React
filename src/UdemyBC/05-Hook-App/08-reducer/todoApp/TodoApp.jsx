import React, { useEffect, useReducer } from 'react'
import { TodoList } from './components/TodoList';
import { TodoAdd } from './components/TodoAdd';
import { ToDoReducer } from './ToDoReducer';

const initialState = [];

export const TodoApp = () => {

    const init = () => {
        return JSON.parse(localStorage.getItem('todos')) || []
    }

    //! didnt remember what props was in here:
    //* the "todos" its the state that will save the data(?)
    //* the "dispacth" its the function that will change the "todos"
    //* inside the useReducer func:
        //* the first param, "ToDoReducer" its to where the dispatch will send the "todos" 
        //* the second, "intialState" its the inital val that will send
    const [todos, dispatch] = useReducer(ToDoReducer, initialState, init);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos) || [])
    },[todos]);


    //! i deestructred the "newTodo", i shouldn't
    const handleAddTodo = (todo) => {
        const action = {
            type: "TODO AddNewToDo",
            load: todo
        };
        dispatch(action);
    }

    const handleDel = (id) => {
        const action = {
            type: "TODO DelToDo",
            load: id
        };
        dispatch(action);
    }

    return (
        <>
            <h1>ToDo App</h1>
            <hr />
            <div className='row'>
                <div className='col-7'>
                    <TodoList todos={todos} onDelete={handleDel}/>
                </div>
                <div className='col-5'>
                    <TodoAdd newTodo={handleAddTodo}/>
                </div>
            </div>
            
        </>
    )
}
