import React, { useContext } from 'react'
import { ThemeContext } from './ThemeContext';

export const ChangeButton = () => {

    const {darkmode, setDarkmode} = useContext(ThemeContext);

    return (
        <>
            <h2> {darkmode ? "[ON]" : "[OFF]"}</h2>
           <button className='btn btn-secondary' onClick={() => setDarkmode(!darkmode)}>Change</button> 
        </>
    )
}
