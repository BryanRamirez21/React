import { render, screen } from "@testing-library/react"
import { MultipleCustomHooks } from "../../../03-functionalComponents/MultipleCustomHooks";
import { useFetch } from "../../../03-functionalComponents/hooks/useFetch";

jest.mock("../../../03-functionalComponents/hooks/useFetch");

describe('', () => {
    test('should display the component', () => {

        useFetch.mockReturnValue({
            data: null,
            isLoading: true,
            hasError:false,
            error:null 
        });

        render(<MultipleCustomHooks />);
        expect(screen.getByText("Loading..."));
        expect(screen.getByText("Pokemon info"));

    });

    test('should show a poke info', () => {
        useFetch.mockReturnValue({
            data: [{ id:0, name:"", sprites:{front_default:"", back_default:"", front_shiny:"", back_shiny:""} }],
            isLoading: false,
            hasError:false,
            error:null 
        });
        
        render(<MultipleCustomHooks />);
        screen.debug();
    })
    
    
})
