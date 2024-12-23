export const getGifs = async(category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=Oayd0nSxvf5uLU32QX3SSXoKv8rh3L2a&q=${category}&limit=20`;
    const resp = await fetch(url);
    const {data} = await resp.json();
    const gifs = data.map(img => ({
        id: img.id,
        title: img.title,
        img: img.images.original.url,
    }))
    return gifs;
}