import { Route, Routes } from 'react-router-dom'
import { HeoresRoutes } from '../heroes/routes/HeoresRoutes'
import { LoginPage } from '../auth/pages/LoginPage'
import { PrivateRoute } from './PrivateRoute'
import { PublicRoute } from './PublicRoute'

export const AppRouter = () => {
    return (
    <>
        <Routes>

            <Route path="/login" element={
                <PublicRoute>
                    <LoginPage />
                </PublicRoute>
            } />

            {/* this will protect the route, only beign navigatable if true condition on: "routes/privateRoute" */}
            <Route path="/*" element={
                <PrivateRoute>
                    <HeoresRoutes />
                </PrivateRoute>
            } />

            {/* any route thats not the login, goes trough this component */}
            {/* <Route path='/*' element={<HeoresRoutes />} /> */}
        </Routes>
    </>
    )
}
