import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
let Rescard=(props)=>{
    let {resData}=props;
    let {text,imageId}=resData;
    let dispatch=useDispatch();
    return(
        <div className="border-solid border-black w-[200px] bg-red-700  m-2 rounded-lg justify-center  hover:bg-red-300">
            <h1 className="py-3 items-center">Text{text}</h1>
            <div className="py-2">
            <h3>hellooo</h3>
            <button onClick={()=>{
                dispatch(addItem("pizza"))
            }}>Add</button>
            <img className="res-logo"  src={imageId} />
            </div>     
        </div>
    )
}

let PromotedRescard=(Rescard)=>{// its an higher order component, it receive a component and retunrs a component
return (props)=>{
    return <div>
        <label className="absolute bg-black text-white rounded-lg">Promotted</label>
        <Rescard {...props}/>
    </div>
}
}

export default Rescard;
export {PromotedRescard};