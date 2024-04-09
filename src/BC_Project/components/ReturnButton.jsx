import React from 'react';
import { useNavigate } from "react-router-dom";

export default function ReturnButton(props) {
    const navigate = useNavigate();
    const goCat = () => navigate(`/`);
    return (
        <div className='flex flex-row top-0 mt-4 absolute w-full left-0'>
            <div className='w-1/3'>
                <a href='javascript:window.history.back();' className='text-cyan-50'>
                    <button className=' bg-zinc-700'>Return to recipie form</button>
                </a>
            </div>
            <div className='w-1/3'></div>
            <div className='w-1/3'>
                {props.isCat && <button onClick={goCat}>Return to categories</button>}
            </div>
        </div>
    )
}
