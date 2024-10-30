import { Route, Routes } from 'react-router-dom'
import { HeoresRoutes } from '../heroes/routes/HeoresRoutes'
import { LoginPage } from '../auth/pages/LoginPage'

export const AppRouter = () => {
    return (
    <>
        <Routes>

            <Route path='/login' element={<LoginPage />} />
            {/* any route thats not the login, goes trough this component */}
            <Route path='/*' element={<HeoresRoutes />} />
        </Routes>
    </>
    )
}
