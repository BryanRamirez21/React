import { render, screen } from "@testing-library/react"
import { MainApp } from"../../../09-useContext/loginNav/MainApp"
import { MemoryRouter } from "react-router-dom"

describe('routes test', () => {
    test('should display the home page', () => {
        render(
            <MemoryRouter>
                <MainApp />
            </MemoryRouter>
        );

        expect(screen.getByText('Home Page')).toBeTruthy();
    });
    
    test('should display the login page', () => {
        render(
            <MemoryRouter initialEntries={['/login']}>
                <MainApp />
            </MemoryRouter>
        );

        expect(screen.getByText('Login Page')).toBeTruthy();
    });
});