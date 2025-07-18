import React from 'react'
import { Navbar } from '../../ui'
import { Navigate, Route, Routes } from 'react-router-dom'
import { DCPage, Hero, MarvelPage, Search } from '../pages'

export const HeoresRoutes = () => {
    return (
        <>
            <Navbar />
            <div className='container'>
                <Routes>
                    <Route path='/marvel' element={<MarvelPage />} />
                    <Route path='/dc' element={<DCPage />} />

                    <Route path='/search' element={<Search />} />
                    <Route path='/hero/:heroId' element={<Hero />} />

                    <Route path='/' element={<Navigate to="/marvel" />} />
                </Routes>
            </div>
            
        </>
    )
}
