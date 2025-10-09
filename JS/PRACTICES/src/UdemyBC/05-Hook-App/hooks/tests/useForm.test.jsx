import { act, renderHook } from "@testing-library/react"
import { useForm } from "../useForm"

describe('test on useForm', () => {

    const initalForm = {
        name:"bryan",
        email:"mail@.com"
    }

    test('should return default data', () => {

        const {result} = renderHook(() => useForm(initalForm));
        //const {} = result.current;
        expect(result.current).toEqual( {
            name: initalForm.name, 
            email: initalForm.email,
            formState: initalForm,
            onInputChange: expect.any(Function),
            onReset: expect.any(Function)
          })
    });


    test('should change the form name', () => {

        const newValue = "juan";

        const {result} = renderHook(() => useForm(initalForm));
        const {onInputChange} = result.current;

        act(() => {
            onInputChange({target: {name: "name", value: newValue}});
        });

        expect(result.current.name).toBe(newValue)
    });

    test('should reset the form', () => {

        const newValue = "juan";

        const {result} = renderHook(() => useForm(initalForm));
        const {onInputChange, onReset} = result.current;

        act(() => {
            onInputChange({target: {name: "name", value: newValue}});
            onReset();
        });

        expect(result.current.name).toBe(initalForm.name)
    })
    
  
})
