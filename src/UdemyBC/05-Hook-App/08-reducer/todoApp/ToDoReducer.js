import React from 'react'

//! the order of the params affects, for some reason
export const ToDoReducer = (initialState, action) => {
    switch(action.type){
        case "TODO AddNewToDo":
            return [...initialState, action.load];

        case "TODO DelToDo":
            //! dindnt know what was "filter()" func (it returns an array that meets the conditions inside the parenthesis)
            return initialState.filter(todo => todo.id !== action.load);
    }
}
