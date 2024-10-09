import React from 'react'
import { ThemeProvider } from './ThemeProvider'
import { ChangeButton } from './ChangeButton'

export const MainTheme = () => {
    return (
        <ThemeProvider>
            <h1>DarkMode</h1>
            <ChangeButton/>
        </ThemeProvider>
    )
}
