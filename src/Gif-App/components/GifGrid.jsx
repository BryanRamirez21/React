import React, {useState, useEffect} from 'react';
import { getGifs } from '../helpers/getGifs';
import GifShowImg from './GifShowImg';
/*
const getGifs = async(category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=Oayd0nSxvf5uLU32QX3SSXoKv8rh3L2a&q=${category}&limit=20`;
    const resp = await fetch(url);
    const {data} = await resp.json();
    const gifs = data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }))

    return gifs;
}
*/

export default function GifGrid({category}) {
    
    const [images, setImages] = useState([]);

    const getGifResponse = async() => {
        const gifs = await getGifs(category);
        setImages(gifs);
    }
    
    useEffect(()=>{
       getGifResponse();
    },[]);
    
    
    return (
        <div>
            <h1>{category}</h1>
            {images.map((img) => (
                <li key={img.id}>
                    {img.title}
                    <GifShowImg img={img.img} />
                </li>
            ))}
        </div>
    ) 
}
