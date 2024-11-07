import React, { useState } from 'react'

export const TotalTasks = ({task}) => {
    

    const [tasks, setTasks] = useState([])

    const onNewTask = (task) => {
        setTasks([...tasks, task])
    }

    console.log("total tasks = "+tasks.length)

    return (
        <div className="d-flex flex-column">
            {tasks.map((task) => (
                <div className="d-flex flex-row" key={task.id}>
                    {task.task}
                    <button className='btn btn-danger'>Delete</button>
                </div>
            ))}
        </div>
    )
}
