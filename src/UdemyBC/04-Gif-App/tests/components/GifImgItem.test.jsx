import { render, screen } from "@testing-library/react";
import { GifImgItem } from "../../components/GifImgItem";

describe('Test on GIfImgItem', () => {

    const title = 'saitama';
    const url = 'https://google.com/saitama.jpg'

    test('must match the sanpshot ', () => { 
        const {container} = render(<GifImgItem title={title} img={url} />);
        expect(container).toMatchSnapshot();
    }) ;

    test('must display the img with the URL and the alt text ', () => {
        render(<GifImgItem title={title} img={url} />);
        // screen.debug();
        //expect(screen.getByRole('img').src).toBe(url);
        //expect(screen.getByRole('p').src).toBe(title);

        const {src, alt} = screen.getByRole('img');
        expect(src).toBe(url);
        expect(alt).toBe(alt);
    });
    
    test('must display the title ', () => { 
        render(<GifImgItem title={title} img={url} />);
        expect(screen.getByText(title)).toBeTruthy();
    }) ;

});