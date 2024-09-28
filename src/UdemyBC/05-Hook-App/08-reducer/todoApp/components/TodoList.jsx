import React from 'react'
import { TodoItem } from './TodoItem'

export const TodoList = ({todos, onDelete, onToggleTodo}) => {
    return (
        <>
            <ul className='list-group'>
                {
                    todos.map((todo) => (
                        //! i tried: "onDelete={id}" BUT NO, the component its sendind the reference to the funcion
                        //!     from the father, here the function hasnt been referenced, until inside the params of this compo
                        <TodoItem 
                            key={todo.id} 
                            todo={todo} 
                            onDelete={onDelete}
                            onToggleTodo={onToggleTodo}
                        />
                    ))
                }
            </ul>
        </>
    )
}
