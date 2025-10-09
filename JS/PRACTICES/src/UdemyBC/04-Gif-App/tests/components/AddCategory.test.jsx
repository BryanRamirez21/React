import { render, screen, fireEvent } from "@testing-library/react";
import { AddCategory } from "../../components/AddCategory";

describe('Test on GIfImgItem', () => {

    test('should change the value of the text input', () => {
        render(<AddCategory onNewCategory={() => {}}/>);
        
        const input = screen.getByRole('textbox');
        fireEvent.input(input, {target: {value: 'saitama'}});
        expect(input.value).toBe('saitama');
    });
    
    test('should call onNewCategory if input has a value', () => {
       const inputValue     = 'saitama';
       const onNewCategory  = jest.fn();

       render(<AddCategory onNewCategory={onNewCategory}/>);
       const input = screen.getByRole('textbox');
       const form = screen.getByRole('form');
       fireEvent.input(input, {target: {value: inputValue}});
       fireEvent.submit(form);
       expect(input.value).toBe('');

       expect(onNewCategory).toHaveBeenCalled();
       expect(onNewCategory).toHaveBeenCalledTimes(1);
       expect(onNewCategory).toHaveBeenCalledWith(inputValue);
    });
    
    test('should not called onNewCategory if input empty', () => {
        const onNewCategory  = jest.fn();
        render(<AddCategory onNewCategory={onNewCategory}/>);
        const form = screen.getByRole('form');
        fireEvent.submit(form);

        expect(onNewCategory).toHaveBeenCalledTimes(0);
    })
    
}); 