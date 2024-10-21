import { act, renderHook } from "@testing-library/react";
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
    });
    
    test('shoul increase counter', () => {
        const {result} = renderHook(() => useCounter(100));
        const {counter, decrease, increase, reset} = result.current;
        
        act(() => {
            increase();
            increase(3);
        });
        expect(result.current.counter).toBe(103);
    });

    test('shoul decrease counter', () => {
        const {result} = renderHook(() => useCounter(100));
        const {counter, decrease, increase, reset} = result.current;
        
        act(() => {
            decrease();
            decrease(3);
        });
        expect(result.current.counter).toBe(97);
        
    })

    test('shoul reset counter', () => {
        const {result} = renderHook(() => useCounter(100));
        const {counter, decrease, reset} = result.current;
        
        act(() => {
            decrease(3);
            reset();
        });
        expect(result.current.counter).toBe(100);
        
    })
});
