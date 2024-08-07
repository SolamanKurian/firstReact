import useUserInfo from "../utils/useUserInfo"
import { useState } from "react"
let Users=(props)=>{
    let [count1,setCount1]=useState(0)
    let [count2,setCount2]=useState(1)


let uinfo =useUserInfo()// custom hook;
    let {login,id,avatar_url}=uinfo;
    return (
        <div className="user-card">
            <h1>Count:{count1}</h1>
            <button onClick={()=>{
                return setCount1(count1+1)
            }}>+</button>
            <h1>Coutr:{count2}</h1>
            <h2>name:{login}</h2>
            <h3>Location:{id}</h3>
            <img src={avatar_url}/>
            <h3>Contact:9605724711</h3>
        </div>
    )
}
export default Users