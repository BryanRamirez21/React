import { render, screen } from "@testing-library/react"
import { HomePage } from "../../../09-useContext/loginNav/HomePage"
import { UserContext } from "../../../09-useContext/loginNav/context/UserContext"

describe('test on homepage component', () => {

    const user = {
        id:1,
        name:"bryan"
    }

    test('should display the component without the user', () => {
        render(
            <UserContext.Provider value={{user:null}}>
                <HomePage />
            </UserContext.Provider>
        );

        const preTag = screen.getByLabelText("pre");
        expect(preTag.innerHTML).toBe("null");
    });
    
    test('should display the component WITH the user', () => {
        render(
            <UserContext.Provider value={{user}}>
                <HomePage />
            </UserContext.Provider>
        );

        const preTag = screen.getByLabelText("pre");
        expect(preTag.innerHTML).toContain(user.name);
    });
})
