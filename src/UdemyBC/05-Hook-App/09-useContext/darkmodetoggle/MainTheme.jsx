import React, { useContext } from 'react'
import { ChangeButton } from './ChangeButton'
import { ThemeContext } from './ThemeContext'
import { ThemeProvider } from './ThemeProvider';

export const MainTheme = () => {

    return (
        <ThemeProvider>
            <h3>Dark mode</h3>
            <ChangeButton />
        </ThemeProvider>
    )
}
