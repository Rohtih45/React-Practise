import { useState } from "react";

// function Counter() {
//   var array = useState(0);

//   function increaeCount() {
//     array[1](array[0] + 1);
//   }

//   return (
//     <div style={{ padding: 50 }}>
//       <h2>Count value is: {array[0]}</h2>
//       <button onClick={increaeCount}>Inc Count</button>
//     </div>
//   );
// }

function Counter() {
  var [count, setCount] = useState(0);

  function increaeCount() {
    setCount(++count);
  }

  return (
    <div style={{ padding: 50 }}>
      <h2>Count value is: {count}</h2>
      <button onClick={increaeCount}>Inc Count</button>
    </div>
  );
}

export default Counter;
