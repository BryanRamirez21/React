import React, {useState} from 'react';
import {AddCategory, GifGrid} from './components';
import 'tailwindcss/tailwind.css';

export default function GifApp() {

    const [categories, setCategories] = useState([]);

    const onAddCategory = (newCategory) => {
        if(categories.includes(newCategory.trim().toLowerCase())) return;

        setCategories([newCategory, ...categories]);
    }

    return (
        <div>
            <div className='flex flex-row m-2 items-center justify-center'>
                <h1 className='pb-4 mr-4'>GifApp</h1>
                <AddCategory 
                    onNewCategory={onAddCategory}
                />
            </div>
            
            {
                categories.length > 0 && categories.map((element) => (
                    <GifGrid key={element} category={element} />
                ))
            }
        </div>
    )
}
