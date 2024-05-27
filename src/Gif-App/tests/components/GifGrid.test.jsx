import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../components/GifGrid";
import { useFecthGifs } from "../../hooks/useFecthGifs";

jest.mock('../../hooks/useFecthGifs');

describe('test on gifgrid', () => {

    const category = 'one punch'
  
    test('should display the loading', () => {

        useFecthGifs.mockReturnValue({
            images: [],
            isLoading: true,
        });

       render(<GifGrid category={category}/>);
       expect(screen.getByText('Loading...'));
       //expect(screen.getByText(category));
    });
    
    test('should display the imgs item when those are loaded on the useFetchGifs', () => {

        const gifs = [
            {
                id: 'abc',
                title: 'saitama',
                url: 'http://google.com/saitama.jpg'
            },
            {
                id: '123',
                title: 'naruto',
                url: 'http://google.com/naruto.jpg'
            },
        ];

        useFecthGifs.mockReturnValue({
            images: gifs,
            isLoading: false,
        });

        render(<GifGrid category={category}/>);

        expect(screen.getAllByRole('img').length).toBe(2)
    })
    

})
