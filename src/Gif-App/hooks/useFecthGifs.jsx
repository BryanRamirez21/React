import React, {useState, useEffect} from 'react';
import { getGifs } from '../helpers/getGifs';

export default function useFecthGifs(category) {

    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getGifResponse = async() => {
        const gifs = await getGifs(category);
        setIsLoading(false);
        setImages(gifs);
    }
    
    useEffect(()=>{
       getGifResponse();
    },[]);

    return {
        images, 
        isLoading
    };
}
