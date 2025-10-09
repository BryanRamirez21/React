import { Navigate, Route, Routes } from 'react-router-dom'
import { AuthRoute } from '../auth/routes/AuthRoute'
import { JournalRoutes } from '../journal/routes/JournalRoutes'
import { CheckingAuth } from '../UI'
import { useAuth } from '../hooks'

export const AppRouter = () => {

    const status = useAuth();

    if(status === 'checking'){
        return <CheckingAuth />
    }

    return (
        <Routes>
            {
                (status === 'authenticated')
                ?
                <Route path='/*' element={<JournalRoutes />}/>
                :
                <Route path='/auth/*' element={<AuthRoute />}/>
            }
            <Route path='/*' element={<Navigate to='/auth/login' />} />
        </Routes>
    )
}
