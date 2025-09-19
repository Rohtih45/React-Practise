import React, { useEffect, useState } from "react";

function Text() {
    var [title , setTitle] = useState("React History");

    useEffect(()=>{
      console.log(localStorage.getItem('name'))
    })


  return (
    <div style={{}}>
      <h2>{title}</h2>
      <h5>
        Latest version of React.JS is 19.0.0 (December 2024). Initial release to
        the Public (version 0.3.0) was in July 2013. React.JS was first used in
        2011 for Facebook's Newsfeed feature. Facebook Software Engineer, Jordan
        Walke, created it.
      </h5>
    </div>
  );
}

export default Text;
