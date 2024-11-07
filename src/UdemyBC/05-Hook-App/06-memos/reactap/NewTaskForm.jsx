import React, { useRef } from 'react'

export const NewTaskForm = ({newTask}) => {

    const inputRef = useRef();

    const handleNewTask = (e) => {
        e.preventDefault();
        newTask({
            id: new Date().getTime() * 3,
            task: inputRef.current.value,
            done: false
        });
    }

    return (
        <div className="d-flex">
            <h3>Add task</h3>
            <form onSubmit={handleNewTask}>
                <input type='text' name="task" ref={inputRef}/>
                <button type='submit'>Add new task</button>
            </form>
        </div>
    )
}
