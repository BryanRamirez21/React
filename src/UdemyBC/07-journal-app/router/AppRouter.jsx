import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { AuthRoute } from '../auth/routes/AuthRoute'
import { JournalRoutes } from '../journal/routes/JournalRoutes'

export const AppRouter = () => {
    return (
        <Routes>
            {/* login and registration */}

            {/* "cualquier path que empiece con /auth" */}
            <Route path='/auth/*' element={<AuthRoute />}/>


            {/* journal */}
            <Route path='/*' element={<JournalRoutes />}/>
        </Routes>
    )
}
