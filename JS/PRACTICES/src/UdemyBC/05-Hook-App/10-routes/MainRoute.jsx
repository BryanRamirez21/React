import React from 'react'
import { BrowserRouter, createBrowserRouter, Route, RouterProvider, Routes } from 'react-router-dom'
import { ProfilePage, Main, NotFound, ProfilesPage } from './routes'


export const MainRoute = () => {

    const router = createBrowserRouter([
        { 
            path: "/",
            element: <Main />,
            errorElement: <NotFound />
        },
        { 
            path: "/p",
            element: <ProfilesPage />,
            children:[
                { 
                    path: "/p/:profileID",
                    element: <ProfilePage />
                },
            ]
        },
        
    ])

    return (
        <>
            <RouterProvider router={router}>
            </RouterProvider>
            {
                /*
                <BrowserRouter>
                    <Routes>
                        <Route path='/' element={<Main />} />
                        <Route path='/1' element={<Profile1 />} />
                        <Route path='/2' element={<Profile2 />} />
                    </Routes>
                </BrowserRouter>
                */
            }
        </>
    )
}
