import React from 'react'
import { BrowserRouter, Link, Route, Router, Routes } from 'react-router-dom'
import { NewsLetter } from './NewsLetter'
import { Dashboard } from './Dashboard'
import { Home } from './Home'

export const App = () => {
    return (
        <>
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/newsletters'>Newsletters</Link>
                    </li>
                    <li>
                        <Link to='/dashboard'>Dashboard</Link>
                    </li>
                </ul>

            <hr />

                <Routes>
                    <Route path='/' element={<Home />}></Route>
                    <Route path='/newsletters' element={<NewsLetter />}>newsletters</Route>
                    <Route path='/dashboard' element={<Dashboard />}>dashboard</Route>
                </Routes>
        </>
    )
}
