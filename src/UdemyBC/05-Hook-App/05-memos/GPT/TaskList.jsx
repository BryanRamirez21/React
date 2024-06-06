import React, { useCallback, useState } from 'react';
import {TaskItem} from './components/TaskItem';

export const TaskList = () => {

    const [tasks, setTasks] = useState([
        { id: 1, text: 'Learn React', completed: false },
        { id: 2, text: 'Learn Hooks', completed: false },
    ]);

    const toggleComplete = useCallback((id) => {
        setTasks(tasks.map(task => (
            task.id === id ? { ...task, completed: !task.completed } : task
        )));
    },[]);

    return (
    <div>
        {tasks.map(task => (
            <TaskItem key={task.id} task={task} onToggleComplete={toggleComplete} />
        ))}
    </div>
    )
}
