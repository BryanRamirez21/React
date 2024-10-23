import { fireEvent, render, screen } from "@testing-library/react";
import { UserContext } from "../../../09-useContext/loginNav/context/UserContext";
import { LoginPage } from "../../../09-useContext/loginNav/LoginPage";

describe('test on login component', () => {
    test('should display the component without the user', () => {
        render(
            <UserContext.Provider value={{user:null}}>
                <LoginPage />
            </UserContext.Provider>
        );

        const preTag = screen.getByLabelText("pre");
        expect(preTag.innerHTML).toBe("null")
    });
    
    test('should call the setUser when btn clicked', () => {
        const setUserMock = jest.fn();
        render(
            <UserContext.Provider value={{user:null, setUser:setUserMock}}>
                <LoginPage />
            </UserContext.Provider>
        );

        
        const btn = screen.getByRole("button");
        fireEvent.click(btn);

        expect(setUserMock).toHaveBeenCalled();
    })
})
