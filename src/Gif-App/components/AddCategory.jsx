import React, {useRef, useState} from 'react'

export default function AddCategory({onNewCategory}) {

    const category = useRef("");

    const onSubmit = (event) => {
        event.preventDefault();
        if((event.target[0].value).length < 1) return;

        onNewCategory(event.target[0].value);
        event.target[0].value = "";
    }

    return (
        <form onSubmit={onSubmit}>
            <input type='text' id='category' name='category' ref={category}/>
            <button type='submit'>Add category</button>
        </form>
    )
}
