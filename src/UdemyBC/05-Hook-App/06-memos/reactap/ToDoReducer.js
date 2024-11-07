import React from 'react'

export const ToDoReducer = (initalVal, action) => {
    switch(action.type){
        case "todo add":
            return [...initalVal, action.payload]
    }
}
