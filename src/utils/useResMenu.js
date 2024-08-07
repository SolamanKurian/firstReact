import { useEffect, useState } from "react";
import { MENU_API } from "../utils/constants";
let useResMenu=(resId)=>{

    let [resmenu,setresmenu]=useState(null)
    useEffect(()=>{
        fetchMenu();
         
      },[]);
      let fetchMenu= async ()=>{
          let data =await fetch(MENU_API+resId);
          let json= await data.json()
          setresmenu(json);
      }
      return resmenu;
}
export default useResMenu;