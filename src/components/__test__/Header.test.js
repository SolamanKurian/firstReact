const { render, screen, fireEvent } = require("@testing-library/react")
import { Provider } from "react-redux";
import Header from "../Header";
import appStore from "../../utils/appStore"
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom"

it("Should load with login button",()=>{
    render(
        <BrowserRouter> 
    <Provider store={appStore}>
    <Header/>
    </Provider>
    </BrowserRouter>);

    let loginButton=screen.getByRole("button",{name:"Login"});// to specify a specific button
    expect(loginButton).toBeInTheDocument();
});
// to check the function login logout changes
it("Should change login to logout on click",()=>{
    render(
        <BrowserRouter> 
    <Provider store={appStore}>
    <Header/>
    </Provider>
    </BrowserRouter>);
    let loginButton=screen.getByRole("button",{name:"Login"});
    fireEvent.click(loginButton)
    let logoutButton=screen.getByRole("button",{name:"logOut"});
    expect(logoutButton).toBeInTheDocument();
});