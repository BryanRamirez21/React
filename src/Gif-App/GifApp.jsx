import React, {useState, useRef} from 'react'

export default function GifApp() {

    const [categories, setCategories] = useState([]);
    const categor = useRef("");

    const onAddCategory = (category) => {
        setCategories([
            ...categories,
            category
        ]);
    }

    return (
        <div>
            <h1>GifApp</h1>
            <input type='text' id='category' name='category' ref={categor}/><br></br>
            <button onClick={() => onAddCategory(categor.current.value)}>Add category</button>

            <br></br><br></br>
            <h2>Categories:</h2>
            <ol>
            {categories.length > 0 && categories.map((element) => {
                    return <li key={element}>{element}</li>
                })}
            </ol>
        </div>
    )
}
