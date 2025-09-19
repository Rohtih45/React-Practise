import { useState } from "react";

function Names() {
  var [nameArr, setName] = useState([
    "ashok",
    "karthik",
    "altaf",
    "sathvik",
    "shyam",
  ]);

  return (
    <div>
      <ol>
        {nameArr.map(function (data) {
          return <li>{data}</li>;
        })}
      </ol>
    </div>
  );
}

export default Names;
