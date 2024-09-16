import { renderHook, waitFor } from "@testing-library/react";
import { useFecthGifs } from "../../hooks/useFecthGifs"

describe('test on hook useFetchGifs', () => { 

    test('should retrun an initial state', () => {

        const {result} = renderHook(() => useFecthGifs('one punch'));
        const {images, isLoading} = result.current;

        expect(images.length).toBe(0);
        expect(isLoading).toBeTruthy();

    });
    
    test('should return an imgs array and the isLoading on false', async() => {
        const {result} = renderHook(() => useFecthGifs('one punch'));
        
        await waitFor(
            () => expect(result.current.images.length).toBeGreaterThan(0)
        );

        const {images, isLoading} = result.current;

        expect(images.length).toBeGreaterThan(0);
        expect(isLoading).toBeFalsy();
    });
    

 })