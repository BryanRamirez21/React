import React, { useContext } from 'react'
import { ThemeContext } from './ThemeContext';

export const ChangeButton = () => {

    //! here IT IS useContext
    //! i used the provider inside the useContext, its the context file
    const {darkmode, handleChangeMode} = useContext(ThemeContext);

    return (
        <>
            <div style={{
                backgroundColor: darkmode ? '#fff' : '#333',
                color: darkmode ? '#000' : '#fff',
                height: '100vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <button onClick={handleChangeMode}>DarkMode {darkmode ? "[ON]" : "[OFF]"}</button>
            </div>
        </>
    )
}
