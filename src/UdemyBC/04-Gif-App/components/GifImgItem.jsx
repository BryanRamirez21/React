import React from 'react';
import 'tailwindcss/tailwind.css';

export const GifImgItem = ({title, img}) => {
    return (
        <div className='flex align-center items-center rounded-sm bg-slate-800 shadow-slate-800 flex-col justify-center mb-5 mr-5 overflow-hidden'>
            <img src={img} />
            <p>{title}</p>
        </div>
    )
}

