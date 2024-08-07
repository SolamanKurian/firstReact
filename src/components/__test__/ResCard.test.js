
import { render ,screen} from "@testing-library/react"
import Rescard from "../ResCard"
import mockData from "../../utils/mockData"
import "@testing-library/jest-dom"


it("should render rescard with data",()=>{
    render (<Rescard resData={mockData}/>);
    let name= screen.getAllByText("Biriyani");

    expext(name).toBeInTheDocument();

})