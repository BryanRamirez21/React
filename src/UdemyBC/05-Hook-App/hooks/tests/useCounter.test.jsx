import { renderHook } from "@testing-library/react";
import { useCounter } from "../useCounter";

describe('Test on useCounter', () => {
    test('should retrun default values', () => {
        const {result} = renderHook(() => useCounter() );
        const {counter, increase, decrease, reset} = result.current;

        expect(counter).toBe(1);
        expect(decrease).toEqual(expect.any(Function));
        expect(increase).toEqual(expect.any(Function));
        expect(reset).toEqual(expect.any(Function));
    });

    test('should generate counter using "100" val', () => {
        const {result} = renderHook(() => useCounter(100) );
        const {counter, increase, decrease, reset} = result.current;

        expect(counter).toBe(100)
    })
    
    
});
