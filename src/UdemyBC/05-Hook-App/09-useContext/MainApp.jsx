import { Link, Navigate, Route, Routes } from "react-router-dom"
import { HomePage } from "./HomePage"
import { AboutPage } from "./AboutPage"
import { LoginPage } from "./LoginPage"
import { NavBar } from "./NavBar"

export const MainApp = () => {
    return (
        <>
            <h1>Main App</h1>
            <hr />
            <NavBar />

            <Routes>
                <Route path="/" element={<HomePage />}/>
                <Route path="/login" element={<LoginPage />}/>
                <Route path="/about" element={<AboutPage />}/>

                {/* this is not so recomendable because the URL stays on the misspelled URL*/}
                {/*<Route path="/*" element={<LoginPage />} />*/}
                <Route path="/*" element={<Navigate to="/about"/>} />
            </Routes>
        </>
    )
}
