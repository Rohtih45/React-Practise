import React from "react";
import { useState } from "react";

function OnuseState(){

    var [num , setNum] = useState(10n);

    return(
        <div style={{padding:"50px"}}>
            <h2>Test useState</h2>
            <p>{num.toString()}</p>
        </div>
    )

}

export default OnuseState;