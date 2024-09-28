import React, { useEffect, useReducer } from 'react'
import { TodoList } from './components/TodoList';
import { TodoAdd } from './components/TodoAdd';
import { useReducerApp } from './useReducerApp';

export const TodoApp = () => {

    const {todos, handleAddTodo, handleDel, handleToggle, todosCount, todosPending} = useReducerApp();

    return (
        <>
            <h1>ToDo App</h1>
            <h3>Total: {todosCount} / Pending: {todosPending}</h3>
            <hr />
            <div className='row'>
                <div className='col-7'>
                    <TodoList 
                        todos={todos} 
                        onDelete={handleDel}
                        onHandleToggle={handleToggle}
                    />
                </div>
                <div className='col-5'>
                    <TodoAdd newTodo={handleAddTodo}/>
                </div>
            </div>
            
        </>
    )
}
