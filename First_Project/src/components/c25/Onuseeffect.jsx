import React from "react";
import Image from "./Image.jsx";
import Text from "./Text.jsx";
import { useState } from "react";

function Onuseeffect() {
  var [set, setFalse] = useState(true);
  return (
    <div>
    <div
      style={{
        textAlign: "center"
      }}
    >
      {set ? <Image /> : <Text />}
     
      
    </div>
    <div style={{textAlign: "center"}}>
        <button
        onClick={() => {
          setFalse(true);
        }}
      >
        Image
      </button>
      &nbsp;&nbsp;
      <button
        onClick={() => {
          setFalse(false);
        }}
      >
        Text
      </button>
    </div>
    </div>
  );
}

export default Onuseeffect;

// rfce
