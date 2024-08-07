import { render,screen } from "@testing-library/react"
import Body from "../Body";
import { BrowserRouter, json } from "react-router-dom";
import mockData from "../../utils/mockData";
import { act } from "react";
import "@testing-library/jest-dom"

global.fetch=jest.fn(()=>{
    return Promise.resolve({
        json:()=>{
            return Promise.resolve(mockData)
        }
    })
})

it("should render the body component with search button",async()=>{
await act(async()=>render(<BrowserRouter><Body/></BrowserRouter>));

let searchButton=screen.getByRole("button",{name:"Search"})
expect(searchButton).toBeInTheDocument();
})