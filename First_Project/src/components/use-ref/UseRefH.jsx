import React, { useRef, useState } from 'react'

function UseRefH() {
    var vartest = 1;
    const [state, setState] = useState(101);
    var obj = useRef(201)

    function updateVar(){
        vartest++;
    }
    function updateState(){
        setState(state+1);
    }
    function updateUseRef(){
        obj.current = obj.current + 1
    }
    function displayDetails(){
        console.log(`normal var value ${vartest}`);
        console.log(`state value : ${state}`);
        console.log(`UseRef value : ${obj.current}`)
    }

  return (
    <div style={{padding:"50px"}}>
        <h2>Normal Var : {vartest}</h2>
        <h2>State var : {state}</h2>
        <h2>UseRef Value : {obj.current}</h2>
        <br />
        <button onClick={updateVar} style={{padding:"10px"}}>Upsert Var</button> &nbsp;
        <button onClick={updateState} style={{padding:"10px"}}>Upsert State</button> &nbsp;
        <button onClick={updateUseRef} style={{padding:"10px"}}>Upsert UseRef</button> &nbsp;
        <button onClick={displayDetails} style={{padding:"10px"}}>Display Details</button> &nbsp;
    </div>
  )
}

export default UseRefH