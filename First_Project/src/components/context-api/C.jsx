import React from 'react'
import {useContext} from 'react';
import myContext from './context';

function C() {
    const context_data = useContext(myContext);
  return (
    <div>
        <h1>C Component</h1>
        <br />
        <h3>{context_data}</h3>
        <hr />
        
    </div>
  )
}

export default C