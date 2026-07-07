import React, { useState } from 'react';

const UseCallbackUseMemo = () => {
    const[count,setcount]=useState(0);
    console.log("state change hui function dubara chala");
  return (
    <div>
        <h1>{count}</h1>
      <button onClick={() => setcount(count + 1)}>Increase</button>
      <button onClick={() => setcount(count - 1)}>Decrease</button>

    </div>
  )
}

export default UseCallbackUseMemo
