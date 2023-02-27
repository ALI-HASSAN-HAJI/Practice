import React, { useState } from "react";

const Reset = () => {
  let initial = 0;
  const [count, setCount] = useState(initial)
  return (
    <div>
       <h1>How to reset something:</h1>
       <button onClick={() => setCount(count + 1)}>Increment +</button>
       <span> <b>The Count is {count}:</b></span>
       <button onClick={() => setCount(count - 1)}>Decrement -</button><br></br>
       <button onClick={() => setCount(initial)}>Reset</button>
    </div>
  )
}

export default Reset;