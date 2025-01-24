import React, { useState } from 'react'
import { useGetTodoByIdQuery, useGetTodosQuery } from './store/API/todosApi'

export const ToDoApp = () => {

  //const {data: todos = [], isLoading} = useGetTodosQuery();

  const [todoId, setTodoId] = useState(1)
  const {data: todo = [], isLoading} = useGetTodoByIdQuery(todoId);
  

  return (
    <>
      <h1>ToDos - RTK query</h1>
      <hr />
      <h4>{isLoading ? 'Is Loading...' : ''}</h4>

      <pre>{JSON.stringify(todo)}</pre>

      <button onClick={() => setTodoId(todoId - 1)}>
        Prev toDo
      </button>
      <button onClick={() => setTodoId(todoId + 1)}>
        Next toDo
      </button>

      { /* <ul>
      {todos.map(todo => (
      <li key={todo.id}>
      <strong>{todo.completed ? 'DONE ' : 'pending '}</strong>
      {todo.title}
      </li>
      ))}
      </ul> */ }

    </>
  )
}
