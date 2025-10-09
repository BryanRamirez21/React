import React, {useContext} from 'react'
import { ThemeContext } from './ThemeContext'

export const ChangeButton = () => {

    //! here goes the context, not provider
    const {darkmode, setDarkmode} = useContext(ThemeContext)

    return (
    <div>
        <div style={{
                backgroundColor: darkmode ? '#fff' : '#333',
                color: darkmode ? '#000' : '#fff',
                height: '100vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <button onClick={() => setDarkmode(!darkmode)}>{darkmode ? '[ON]' : '[OFF]'}</button>
            </div>
    </div>
    )
}
