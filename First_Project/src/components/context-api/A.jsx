import React, { useState } from 'react'
import B from './B'
import myContext from './context.js'

function A() {
    const[state, setState] = useState("Hyd")
  return (
    <div>
        <h1>A Component</h1>
        <br />
        <hr />
        <myContext.Provider value={state}>
            <B/>
        </myContext.Provider>
        <B/>
    </div>
  )
}

export default A