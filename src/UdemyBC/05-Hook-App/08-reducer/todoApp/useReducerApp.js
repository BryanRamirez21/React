import React, { useReducer } from 'react'
import { ToDoReducer } from './ToDoReducer';


export const useReducerApp = () => {
    const initialTodo = []
    const [todos, dispatch] = useReducer(ToDoReducer, initialTodo)

    const onSubmit = (newTodo) => {
        const action = {
            type: "TODO AddNewToDo",
            payload: newTodo
        };
        dispatch(action)
    }

    const onDelete = (todoId) => {
        const action = {
            type: "TODO DelToDo",
            payload: todoId
        };
        dispatch(action);
    }

    const onComplete = (todoId) => {
        const action = {
            type: "TODO ToggleToDo",
            payload: todoId
        };
        dispatch(action);
    }

    return{
        todos,
        total: todos.length,
        pending: todos.filter(todo => todo.done == false).length,
        onSubmit,
        onDelete,
        onComplete
    };
}
