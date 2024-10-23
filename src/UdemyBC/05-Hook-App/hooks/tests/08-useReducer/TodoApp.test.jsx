import { render, screen } from "@testing-library/react"
import { TodoApp } from "../../../08-reducer/todoApp/TodoApp"
import { useReducerApp } from "../../../08-reducer/todoApp/useReducerApp"

jest.mock("../../../08-reducer/todoApp/useReducerApp")

describe('test on todo app', () => {

    useReducerApp.mockReturnValue({
        todos:[
            {id:1,task:"todo1",done:false},
            {id:2,task:"todo2",done:true}
        ], 
        handleAddTodo: jest.fn(), 
        handleDel: jest.fn(), 
        handleToggle: jest.fn(), 
        todosCount: 2, 
        todosPending: 1
    });

    test('should display the component dorrectly', () => {
        render(<TodoApp />);
        expect(screen.getByText("todo1")).toBeTruthy();
        expect(screen.getByText("todo2")).toBeTruthy();
        expect(screen.getByRole("textbox")).toBeTruthy();
    })
    
})
