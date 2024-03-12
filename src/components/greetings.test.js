import Greetings from "./greetings";
import {render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { act } from "react-test-renderer";

describe('test suites', () => {
    
    test('should render Hello world text', () => {
        // Arrange
        render(<Greetings />)
        // Act
        // Assert
        const helloWorldElement = screen.getByText('Hello world', {exact: false});
        expect(helloWorldElement).toBeInTheDocument()
        // console.log('helloworldElement ');
        // console.log(helloWorldElement);
    })

    test('render good to see you when button not clicked',() => {
        
        render(<Greetings />)
        const outputElement = screen.getByText('good to see you', {exact: false});
        expect(outputElement).toBeInTheDocument()


    });

    test('render Changed! if the button was clicked',() => {
        
        act(() => {
            render(<Greetings />)
            
        })
        
        const btnElement = screen.getByRole('button');
        userEvent.click(btnElement);
       

        const outputElement = screen.getByText('ABCDEF', {exact: false});
        expect(outputElement).toBeInTheDocument()

        


    });



});

