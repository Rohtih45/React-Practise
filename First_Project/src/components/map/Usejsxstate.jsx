import { useState } from "react";

function Usejsxstate(){

    var [data,setData] = useState([
        <h2>heading</h2>,
        <p>para</p>,
        <section>section element</section>,
        <div>Div jsx</div>
    ]);

    return (
        <div style={{padding:50}}>
            <h2>Data Rendering</h2>
            <p style={{color:"green"}}>{data}</p>
        </div>
    )
}

export default Usejsxstate;