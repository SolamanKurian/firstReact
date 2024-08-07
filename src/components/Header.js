import { useState, useEffect,useContext } from "react";
import {LOGO_URL} from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

let Header=()=>
    {
        let [btnName,setbtnName]=useState("Login")
        let onlineStatus=useOnlineStatus()
        let data = useContext(UserContext); // taking data from context usinfg hook--> useContext

        //subscribing to the store using selector
        let cartItems= useSelector((store)=> store.cart.items)
        //this cart will get the data of items
        return(<div className="flex justify-between bg-red-400 shadow-lg mb-3 px-10 sm:bg-yellow-300">
            <div ><img className="w-56" src={LOGO_URL}/></div>
            <div className="flex items-center"> 
            <ul className="flex p-4 m-4" >
                <li><Link to="/grocery">Grocery</Link></li>
                <li className="px-4">
                    <Link to="/">Home</Link></li>
                {/* <li><a href="/about">About us</a></li>
                // never use an anger tag to navigate, it will reload the full page,
                instaed of which we can use link (need to import first) */}
                <li className="px-4">
                    <Link to="/about">About Us</Link></li>
                <li className="px-4">
                    <Link to="/contact">contact</Link></li>
                <li className="px-4">Cart</li>
                <li className="px-4">Online status:{onlineStatus?"yes":"no"}</li>
                <button className="login-btn" onClick={()=>{
                    btnName==="Login"? setbtnName("logOut"):setbtnName("Login")
                }}>{btnName}</button>
                <li>{data.loggedinUser}</li>
                <li className="px-4 font-bold">Cart({cartItems.length})</li>
            </ul>
            </div>
            

        </div>
       )
    }

    export default Header;