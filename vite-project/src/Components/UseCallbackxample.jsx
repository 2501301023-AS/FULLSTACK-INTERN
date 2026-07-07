import React, { useState, useCallback } from 'react';
import Child from './Child';

const UseCallbackxample = () => {
    const [count,setcount]=useState(0);
    const sayHello=useCallback(()=>{
        console.log("Hello")
    },[])
        
  return (
    <div>
        <h1>Count:{count}</h1>
        <button onClick={()=>setcount(count+1)}>Increment</button>
      <Child hello={sayHello}/>
    </div>
  )
}

export default UseCallbackxample
