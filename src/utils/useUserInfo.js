import { useState, useEffect} from "react";
import axios from "axios";

let useUserInfo=()=>{
  let [userinfo, setuserinfo]=useState(null)
    useEffect(()=>{
        fetchData();
     },[]);
     let fetchData= async ()=>{
    
        let response= await axios.get("https://api.github.com/users/shampu")  
             setuserinfo(response.data)
      
         
     }
     return userinfo; 
     
}
export default useUserInfo;