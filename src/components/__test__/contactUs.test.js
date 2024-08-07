
import ContactUs from "../ContactUs";// importing the component to be tested
import {render, screen} from "@testing-library/react"// importing the libraries needed for test
import "@testing-library/jest-dom"

test("should load contact us component",()=>{// instead of test we can write as 'it' also--> it and test is same
    render(<ContactUs/>);// while testing a ui compnent we have to render it to jsdom
    let heading=screen.getByRole("heading")
    // if there are multiple heading 
    let headingall=screen.getAllByRole("heading")
    //Assertion
    expect(heading).toBeInTheDocument();
 
});
test("test wheather there is submit text",()=>{
    render(<ContactUs/>);
    let buttonText=screen.getByText("Submit")
    expect(buttonText).toBeInTheDocument();
});
test("test wheather there is submit text",()=>{
    render(<ContactUs/>);
    let button=screen.getByRole("button")
    expect(button).toBeInTheDocument();
})