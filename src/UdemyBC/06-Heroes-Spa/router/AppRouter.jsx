import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { DCPage, MarvelPage } from '../heroes/index'
import { LoginPage } from '../../05-Hook-App/09-useContext/loginNav/LoginPage'
import {Navbar} from '../ui/index'

export const AppRouter = () => {
    return (
    <>
        <Navbar />

        <Routes>
            <Route path='/marvel' element={<MarvelPage />} />
            <Route path='/dc' element={<DCPage />} />

            <Route path='/login' element={<LoginPage />} />
            <Route path='/' element={<Navigate to="/marvel" />} />
        </Routes>
    </>
    )
}
