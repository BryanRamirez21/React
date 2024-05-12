import React, {useRef} from 'react'

export function AddCategory({onNewCategory}) {

    const category = useRef("");

    const onSubmit = (event) => {
        event.preventDefault();
        if((event.target[0].value).length < 1) return;

        onNewCategory(event.target[0].value);
        event.target[0].value = "";
    }

    return (
        <form onSubmit={onSubmit} className='flex flex-row'>
            <input 
                type='text' 
                id='category' 
                name='category' 
                className='bg-white rounded-md border border-solid border-purple-800 text-black text-lg outline-none py-1 px-3 w-full mr-1' 
                placeholder='Look up for some gifs...'
                ref={category}
            />
            <button type='submit' className='w-56 bg-slate-600'>Add category</button>
        </form>
    )
}
