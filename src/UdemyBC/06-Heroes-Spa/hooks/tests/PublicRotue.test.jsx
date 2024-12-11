import { render, screen } from "@testing-library/react"
import { PublicRoute } from "../../router/PublicRoute"
import { AuthContext } from "../../auth"
import { MemoryRouter, Route, Routes } from "react-router-dom";

describe('test on public rtoure', () => { 
    test('should display the children if not auth', () => {
        
        const contextValue = {
            authState: {logged: false}
        };
        
        render(
            <AuthContext.Provider value={contextValue}>
                <PublicRoute>
                    <h1>Ruta publica</h1>
                </PublicRoute>
            </AuthContext.Provider> 
        )

        expect(screen.getByText("Ruta publica")).toBeTruthy();
    });


    test('should navigate if auth', () => {
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
                <MemoryRouter initialEntries={['/login']}>

                    <Routes>
                        <Route path="/login" element={
                            <PublicRoute>
                                <h1>Ruta publica</h1>
                            </PublicRoute>
                        } />
                        <Route path="/marvel" element={<h1>Marvel page</h1>} />
                    </Routes>

                    
                </MemoryRouter>
            </AuthContext.Provider> 
        )
    })
    
    
 })