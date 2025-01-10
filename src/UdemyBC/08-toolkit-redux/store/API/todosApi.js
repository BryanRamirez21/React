import {createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const todosApi = createApi({
    reducerPath: 'todos',

    // "este Basequery nos va a ayudar a hacer algo parecido a lo que hicimos en"
    //      axios (pokemonApp.jsx), solo que no es directamnete un solo argumento/valor es
    //      es un callback
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://jsonplaceholder.typicode.com/'
    }),

    // "literal son los endpoints que podemos llamabar para el baseUrl"
    endpoints: (builder) => ({
        getTodos: builder.query({
            query: () => '/todos'
        }),
        getTodoById: builder.query({
            query: (todoId) => `/todos/${todoId}`
        }),

    })
});

//"no es que aqui pongamos el nombre custom de 'useGetTodosQuery', RTK cuando usamos createAPI "
//      nos crea customHooks, lo que estamos exportando
export const { useGetTodosQuery, useGetTodoByIdQuery } = todosApi;