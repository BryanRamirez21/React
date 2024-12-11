import { render, screen } from "@testing-library/react"
import { AuthContext } from "../../auth"
import { MemoryRouter } from "react-router-dom";
import { PrivateRoute } from "../../router/PrivateRoute";

describe('test on private route', () => { 
    test('should display the children if auth', () => {

        Storage.prototype.setItem = jest.fn();
        
        const contextValue = {
            authState: {
                logged: true,
                user: {
                    name: "strider",
                    id: 123
                }
            }
        };
        
        render(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter>
                    <PrivateRoute>
                        <h1>Ruta privada</h1>
                    </PrivateRoute>
                </MemoryRouter>
            </AuthContext.Provider> 
        )

        expect(screen.getByText("Ruta privada")).toBeTruthy();
        expect(localStorage.setItem).toHaveBeenCalled()
    });
    
    
 })