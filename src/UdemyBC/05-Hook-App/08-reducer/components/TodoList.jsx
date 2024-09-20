import React from 'react'
import { TodoItem } from './TodoItem'

export const TodoList = ({todos, onDelTodo}) => {

    return (
        <div>
            <ul className='list-group'>
                {
                    todos.map((todo) => (
                        <TodoItem key={todo.id} todo={todo} onDelTodo={onDelTodo}/>
                    ))
                }
            </ul>
        </div>
    )
}
