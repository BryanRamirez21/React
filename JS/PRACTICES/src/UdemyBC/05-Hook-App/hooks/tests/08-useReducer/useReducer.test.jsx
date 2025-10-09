import { ToDoReducer } from "../../../08-reducer/todoApp/ToDoReducer";

describe('useReducer tests', () => {

    const initalState = [
        {
            id:1,
            description: "demo todo",
            done:false
        }
    ]

    test('should return the initial state', () => {
        const newState = ToDoReducer(initalState, {});
        expect(newState).toBe(initalState);
    });

    test('should add a todo', () => {
        const action = {
            type: "TODO AddNewToDo",
            load: {
                id:2,
                description: "new todo 2",
                done: false
            }
        }

        const newState = ToDoReducer(initalState, action);
        expect(newState.length).toBe(2);
        expect(newState).toContain(action.load);
    });

    test('should delete a todo', () => {
        let action = {
            type: "TODO AddNewToDo",
            load: {
                id:2,
                description: "new todo 2",
                done: false
            }
        };
        let newState = ToDoReducer(initalState, action);
        expect(newState.length).toBe(2);


        action = {
            type: "TODO DelToDo",
            load: 2
        };
        newState = ToDoReducer(initalState, action);
        expect(newState.length).toBe(1);
    });
    
    test('should change the todo toggle', () => {
        let action = {
            type: "TODO AddNewToDo",
            load: {
                id:2,
                description: "new todo 2",
                done: false
            }
        }
        let newState = ToDoReducer(initalState, action);


        action = {
            type: "TODO ToggleToDo",
            load: 2
        };
        newState = ToDoReducer(newState, action);
        expect(newState.done).toBe(true)
    })
    
    
})
