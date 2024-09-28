import React, { useEffect, useReducer } from 'react'
import { ToDoReducer } from './ToDoReducer';

export const useReducerApp = () => {

    const initialState = [];

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

    const handleToggle = (id) => {
        const action = {
            type: "TODO ToggleToDo",
            load: id
        };
        dispatch(action);
    }

    return{
        todos,
        handleAddTodo,
        handleDel,
        handleToggle,
        todosCount: todos.length,
        //!use of filter to count
        todosPending: todos.filter(todo => !todo.done).length
    };
}
