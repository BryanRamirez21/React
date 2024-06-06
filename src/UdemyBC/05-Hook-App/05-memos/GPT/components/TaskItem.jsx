import React from 'react'

export const TaskItem = React.memo(({task, onToggleComplete}) => {
    console.log(`Rendering task: ${task.text}`);
    return (
        <div>
            <input
                type="checkbox"
                checked={task.completed}
                onChange={() => onToggleComplete(task.id)}
            />
            <span>{task.text}</span>
        </div>
    )
})
