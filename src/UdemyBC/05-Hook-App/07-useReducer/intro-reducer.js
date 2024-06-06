const initalState = [
    {
        id: 1,
        description: "correr",
        done: false
    }
];

const toDoReducer = (state = initalState, action = {}) => {
    if(action.type === "add toDo"){
        return [...state, action.payload]
    }

    return state;
}
let toDos = toDoReducer();

const newToDo = {
    id: 2,
    description: "caminar",
    done: false
}

const addToDoAction = {
    type: "add toDo",
    payload: newToDo
}


toDos = toDoReducer(toDos, addToDoAction)

console.log(toDos)