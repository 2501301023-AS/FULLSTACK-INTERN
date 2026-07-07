import React from 'react'
import { useState, useMemo } from 'react'
const UseMemoExample = () => {
    const[text,settext]=useState("");
    const[count,setcount]=useState(0);
    function show(){
    console.log("Ye heavy calculation yad rkhega")
    let sum=0;
    for(let i=0;i<10000000;i++){
        sum+=i;
    }
    return sum;
}
const result=useMemo(()=>{
    return show();
});
  return (
    <div>
      <input value={text} onChange={(e)=>settext(e.target.value)}/>
      <h2>{count}</h2>
      <button onClick={()=>setcount(count+1)}>Increment</button>

    </div>
  )
}

export default UseMemoExample
