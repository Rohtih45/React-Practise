import React, {useRef} from 'react'


function UseRefDom() {

    const h1DomAccess = useRef(null);
    function greenHtag(){
        h1DomAccess.current.style.fontSize = "40px";
        h1DomAccess.current.style.color = "green";
    }
    function redHtag(){
        h1DomAccess.current.style.fontSize = "40px";
        h1DomAccess.current.style.color = "red";
    }
  return (
    <div style={{padding:"50px"}}>
        <h1 ref={h1DomAccess}>I am trying to acces h1 tag using useRef Hook</h1>
        <br />
        <button onClick={greenHtag}>green H1</button> &nbsp;&nbsp;
        <button onClick={redHtag}>red H1</button>
    </div>
  )
}

export default UseRefDom