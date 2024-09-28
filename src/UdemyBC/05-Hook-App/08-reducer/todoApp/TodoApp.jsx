import React, { useEffect, useReducer } from 'react'
import { TodoList } from './components/TodoList';
import { TodoAdd } from './components/TodoAdd';
import { ToDoReducer } from './ToDoReducer';
import { useReducerApp } from './components/useReducerApp';

export const TodoApp = () => {

    const {todos, handleAddTodo, handleDel, handleToggleTodo} = useReducerApp();

    return (
        <>
            <h1>ToDo App</h1>
            <hr />
            <div className='row'>
                <div className='col-7'>
                    <TodoList 
                        todos={todos} 
                        onDelete={handleDel}
                        onToggleTodo={handleToggleTodo}
                    />
                </div>
                <div className='col-5'>
                    <TodoAdd newTodo={handleAddTodo}/>
                </div>
            </div>
            
        </>
    )
}
