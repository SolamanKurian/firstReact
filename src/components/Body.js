
import Rescard,{PromotedRescard} from "./ResCard";
import {useState , useEffect, useContext} from "react"
import {reslist} from "../utils/mockData"; // named export imported like this
import Shimmer from "./shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import ResCategory from "./ResCategory";
import UserContext from "../utils/UserContext";
let Body=()=>{
    //creating a local state variavle
    let [listOfres, setlistofres]=useState([])
    let [searchText,setsearchText]=useState([])// to hold and update the search box text
    let [filteredRes, setfilteredRes]=useState([])
    let k=70;

    let Reswithpromo=PromotedRescard(Rescard); // calling Higher order component as a component

    useEffect(()=>{
        fetchData();// this function will be called automatically when the component rendered 
    },[])

    let fetchData=async()=>{// function from useEffect of this component, it fetch data using API

        let data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=9.91850&lng=76.25580&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        let json=await data.json()
        setlistofres(json?.data?.cards)
        setfilteredRes(json?.data?.cards)// making an extra useState to manage filter
    }
    let onlinestatus=useOnlineStatus()// custom hook to check whether there is network connection or not
    if(onlinestatus===false) return <h1>Looks like offline</h1>
    //conditional rendering


    let {loggedinUser, setuserInfo}=useContext(UserContext)
    return listOfres.length===0?(<Shimmer/>):(// if the length of lisOffer is zero, it show a dummy componenet called shimmer 
        <div className="body">
             <div>
            <ResCategory/>
        </div>
        <div className="filter">
            <div className="px-4 flex items-center space-x-6">
                <input type="text" className="border border-solid border-black p-4 h-1 rounded-xl" value={searchText}  //to view the input in text box
                onChange={(e)=>{// while typing it update the searchText that is made assigned to the value
                    setsearchText(e.target.value)
                }}></input>
                <button className="px-4 bg-green-300 m-4 rounded " onClick={()=>{
                let filtered=reslist.filter((x)=>{//on click in the button filtered will get value
                  return  x.text.toLowerCase().includes(searchText.toLowerCase())// to make it case sensitive both made to lower case
                })
                filtered.length?setfilteredRes(filtered):setfilteredRes(reslist);
                }}>Search</button>
                {/* {to update the value lively in the username portion } */}
            <input className="border border-black p-2" value={loggedinUser} onChange={(e)=>setuserInfo(e.target.value)}>
            </input>


            <div className="px-4 bg-green-300 m-4 rounded">  <button className="filter-btn"onClick={()=>{
                let filteredReslist=reslist.filter((x,index)=>{
                    return x.rating>2,key=index;
                });
                setfilteredRes(filteredReslist)
            }}>Top Rated restaurent</button> </div>
          </div>
        </div>
        <div className="flex flex-wrap justify-center">
           { filteredRes.map((x)=>(<Link key={x.id} to={"/restaurent/"+x.id}>
           {k==70?(<Reswithpromo resData={x}/>):(<Rescard  resData={x}/>)}
          
           </Link> 
        ))}
        </div>
       
        </div>
    )
}

export default Body