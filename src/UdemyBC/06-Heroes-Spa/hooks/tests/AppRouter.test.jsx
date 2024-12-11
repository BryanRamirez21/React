import { render, screen } from "@testing-library/react"
import { AppRouter } from "../../router/AppRouter";
import { AuthContext } from "../../auth";
import { MemoryRouter } from "react-router-dom";

describe('Test on appRouter', () => { 
    test('should show the login not auth', () => {

        const contextValue = {
            logged: false
        }

        render(
            <MemoryRouter initialEntries={['/marvel']}>
                <AuthContext.Provider value={contextValue} >
                    <AppRouter />
                </AuthContext.Provider>
            </MemoryRouter>
            
        );
        
    })
    
 })