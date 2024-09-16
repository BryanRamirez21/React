import useFecthGifs from '../hooks/useFecthGifs';
import { GifImgItem, IsLoading } from '.';
import 'tailwindcss/tailwind.css';
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

export function GifGrid({category}) {
    
    const {images, isLoading} = useFecthGifs(category);
    
    return (
        <div>
            <hr></hr>
            <h1>{!isLoading && category}</h1>

            <IsLoading isLoading={isLoading} />

            <div className='flex flex-row flex-wrap justify-center'>
                {
                    images.map((img) => (
                        <GifImgItem 
                            key={img.id} 
                            {...img}
                        />
                    ))
                }
            </div>
        </div>
    ) 
}
