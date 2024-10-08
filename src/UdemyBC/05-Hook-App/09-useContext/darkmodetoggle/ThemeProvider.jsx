import React, { useState } from 'react'
import { ThemeContext } from './ThemeContext'

export const ThemeProvider = ({children}) => {

    const [darkmode, setDarkmode] = useState(false)

    return (
        <ThemeContext.Provider value={{darkmode, setDarkmode}}>
            {children}
        </ThemeContext.Provider>
    )
}
