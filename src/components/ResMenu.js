import useResMenu from "../utils/useResMenu";
import Shimmer from "./shimmer";
import { useParams } from "react-router-dom";// to receive params from the request
let ResMenu=()=>{
    
    let {resId}=useParams();
    console.log(resId);
    let resmenu=useResMenu(resId) // custom hook
let {name,cuisines}=resmenu?.cards?.card?.info;
    return resmenu===null?(<Shimmer/>):(
    <div className="menu">
        <h1>ABCD</h1>
        <h2>fdfdsdgfsdg</h2>
        <ul> list using map function
            <li>BNiriyani</li>
            <li>chapathi</li>
            <li>kattan</li>
        </ul>
    </div>        
    )
}
export default ResMenu;