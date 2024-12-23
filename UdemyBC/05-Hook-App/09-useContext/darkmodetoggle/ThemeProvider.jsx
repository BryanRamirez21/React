import React, { useState } from 'react'
import { ThemeContext } from './ThemeContext';

//! the "{chidren}" are always necesary
export const ThemeProvider = ({children}) => {

    //* here goes all the things that other components will use

    const [darkmode, setDarkmode] = useState(false);
    const handleChangeMode = () => {
        setDarkmode(!darkmode);
    }

    return (
        //! it uses the context file, and provider hook
        //! i forgot the "value" (all the things will set for use for other components)
        //! also forgot its double {{}}
        <ThemeContext.Provider value={{darkmode, handleChangeMode}}>
            {children}
        </ThemeContext.Provider>
    )
}
