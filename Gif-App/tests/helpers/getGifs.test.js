import { getGifs } from "../../helpers/getGifs"

describe('Test in getGifs', () => {
    test('should return an gif array', async() => {
        const gifs = await getGifs('one punch');
        expect(gifs.length).toBeGreaterThan(0);
        expect(gifs[0]).toEqual({
            id: expect.any(String),
            title: expect.any(String),
            img: expect.any(String),
        });
    })
    
})
