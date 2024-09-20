const initalState = [{
    id: 1,
    task: "collect piedra",
    done: false
}];

const todoReducer = (state = initalState, action={}) => {
    
    if(action.type === "[TODO] add todo"){
        return [...state, action.payload];
    }

    return state;
}

let todos = todoReducer();

const newTodo = {
    id: 2,
    task: "smoke piedra",
    done: false
};

const addTodoAction = {
    type: "[TODO] add todo",
    payload: newTodo,
}

todos = todoReducer(todos, addTodoAction)

console.log(todos)