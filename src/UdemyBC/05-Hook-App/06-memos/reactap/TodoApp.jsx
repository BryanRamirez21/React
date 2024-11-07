import React, { useReducer, useState } from 'react'
import { NewTaskForm } from './NewTaskForm'
import { ToDoReducer } from './ToDoReducer';
import { TotalTasks } from './TotalTasks';

export const TodoApp = () => {


    const onNewTask = (newTask) => {
        task(newTask)
    }

    const randomAct = () => {
        console.log("hallo")
    }

    return (
        <>
            <h1>Todo App</h1>
            <hr />
            <div className='d-flex container flex-row'>
                <NewTaskForm newTask={onNewTask}/>
                <TotalTasks handleNewTask={task} />
            </div>
            <button className='btn btn-outline-dark' onClick={randomAct}>Random btn</button>

        </>
    )
}
