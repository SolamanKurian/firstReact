import { useEffect, useState } from "react"

let useOnlineStatus=()=>{
    let [onlineStatus, useonlineStatus]=useState(true);
//check if online
useEffect(()=>{
    window.addEventListener("offline",()=>{
        useonlineStatus(false)
    })
    
},[])

return onlineStatus
}
export default useOnlineStatus;