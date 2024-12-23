import React, { useEffect, useReducer, useRef, useState } from 'react'
import { TodoList } from './components/TodoList';
import { useReducerApp } from './useReducerApp';
import { TodoAdd } from './components/TodoAdd';

export const TodoApp = () => {

    const {todos, total, pending, onSubmit, onDelete, onComplete} = useReducerApp()

    return (
        <>
            <h1>ToDo App</h1>
            <h3>Total: {total} / Pending: {pending}</h3>
            <hr />
            <div className='row'>
                <div className='col-7'>
                    <TodoList todos={todos} onDelete={onDelete} onHandleToggle={onComplete}/>
                </div>
                <div className='col-5'>
                    <TodoAdd newTodo={onSubmit}/>
                </div>
            </div>
            
        </>
    )
}
