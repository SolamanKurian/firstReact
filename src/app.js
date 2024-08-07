
import React, { useEffect, useState } from "react";
import { lazy,Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header  from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, Outlet, RouterProvider} from "react-router-dom";// import from npm
import About from "./components/About";
import ContactUs from "./components/ContactUs";
import Error from "./components/Error";// import the error page we made
import ResMenu from "./components/ResMenu";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux"; // for globalizing the redux store
import appStore from "./utils/appStore";
let Grocery=lazy(()=> import("./components/Grocery"))// this is lazy loading,because 
// we need grocery as separate module of our app, it will load only when requested
//(must import lazy and Suspense from react)
let Applayout=()=>{

    let  [userInfo, setuserInfo]=useState();
    //Authentication
    useEffect(()=>{
        //make an api call with username and pass word, that check at back end and send result
        let logdata={
            name:"Solaman",
        };
        setuserInfo(logdata.name)
    },[]);
    return(
        <Provider store={appStore}>
        <UserContext.Provider value={{loggedinUser:userInfo,setuserInfo}}>
    <div className="app">
        <Header/>
        <Outlet/> 

         {/* it will take the children according to the path  */}
    </div>
    </UserContext.Provider>
    </Provider>
)}
let appRouter= createBrowserRouter([ //setting router, its an array of objects
    {
        path:"/", //seting path
        element:<Applayout/>,// it is parent 
        children:[
            {
                path:"/about",
                element:<About/>
            },
            {
                path:"contact",
                element:<ContactUs/>
            },
            {
                path:"/",
                element:<Body/>
            },
            {
                path:"/restaurent/:resId",
                element:<ResMenu/>

            },
            {
                path:"/grocery",
                element:<Suspense fallback={<h1>Loading...</h1>}><Grocery/></Suspense>// Grocery is imported as lazy
                //loading, so it act as a separate module of our app. so like this it must be loaded, it have to wrap 
                //inside Suspense, this fallback will contain what to show before grocery comes

            }
        ],
        errorElement:<Error/> // component to render if error occure
    },
  
])



let root=ReactDOM.createRoot(document.getElementById("root"))

root.render(<RouterProvider router={appRouter}/>)//render the routr provider  and assign router to the list of objects we made