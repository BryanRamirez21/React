import { fireEvent, render, screen } from "@testing-library/react";
import { TodoItem } from "../../../08-reducer/todoApp/components/TodoItem";

describe('test on todo items', () => {

    const todo = {
        id:1,
        description: "stone soul",
        done:false
    };

    const onDeleteMock = jest.fn()
    const onHandleToggleMock = jest.fn()

    beforeEach(() => jest.clearAllMocks());


    test('should display the todo component', () => {
        render(<TodoItem todo={todo} onDelete={onDeleteMock} onHandleToggle={onHandleToggleMock}/>);

        const liElement = screen.getByRole("listitem");
        expect(liElement.className).toBe("list-group-item d-flex justify-content-between")

        const spanElement = screen.getByLabelText("span");
        expect(spanElement.className).toContain("align-self-center")
    });

    test('should display the todo completed', () => {

        todo.done = true;
        render(<TodoItem todo={todo} onDelete={onDeleteMock} onHandleToggle={onHandleToggleMock}/>);

        const spanElement = screen.getByLabelText("span");
        expect(spanElement.className).toContain("text-decoration-line-through")
    });

    test('span should call the toggle when clicked', () => {
        render(<TodoItem todo={todo} onDelete={onDeleteMock} onHandleToggle={onHandleToggleMock}/>);

        const spanElement = screen.getByLabelText("span");
        fireEvent.click(spanElement);
        expect(onHandleToggleMock).toHaveBeenCalledWith(todo.id);
    });
    
    test('button should call the delete when clicked', () => {
        render(<TodoItem todo={todo} onDelete={onDeleteMock} onHandleToggle={onHandleToggleMock}/>);

        const btnElement = screen.getByRole("button");
        fireEvent.click(btnElement);

        expect(onDeleteMock).toHaveBeenCalledWith(todo.id);
    });
})
