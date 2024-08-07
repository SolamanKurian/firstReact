

import { useState } from "react";
import { useRouteError } from "react-router-dom";
let Error=()=>{
    let err=useRouteError();
    return(
        <div>
            <h1>Opppps..</h1>
            <h2>{err.status}</h2>
        </div>
    )
}
export default Error;