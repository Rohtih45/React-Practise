import {useState} from 'react';

function List(){
    var [data ,setData] = useState([10,20,30,40,50,true,"kabir"]);
    return (
        <div style={{padding:50}}>
            <h2>Data Rendering</h2>
            <p style={{color:"blue"}}>{data}</p>
        </div>
    )
}

export default List;