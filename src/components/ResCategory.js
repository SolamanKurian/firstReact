import { useState } from "react";

let ResCategory=()=>{// creating an accordion
    let [showItem,setShowItem]=useState(false)
    let handleClick=()=>{
        setShowItem(!showItem)
    }
    return <div>
        <div onClick={handleClick} className="w-6/12 m-auto bg-gray-400 shadow-lg p-4 flex justify-between">
        <span>Head</span>
        <span >v</span>
        </div>
        <div>
           {showItem?(<h3 className="w-6/12 m-auto bg-gray-100 shadow-lg p-4 flex justify-center">hidden contents</h3>):null}        </div>
    </div>
}

export default ResCategory