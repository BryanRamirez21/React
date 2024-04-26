import React, {useState, useRef} from 'react';
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';

export default function GifApp() {

    const [categories, setCategories] = useState([]);

    const onAddCategory = (newCategory) => {
        if(categories.includes(newCategory.trim().toLowerCase())) return;

        setCategories([...categories, newCategory]);
    }

    return (
        <div>
            <h1>GifApp</h1>
            <AddCategory 
                onNewCategory={onAddCategory}
            />
            
            {categories.length > 0 && categories.map((element) => (
                    <GifGrid key={element} category={element} />
                ))}
        </div>
    )
}
