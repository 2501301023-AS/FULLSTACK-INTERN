import React, { useState } from 'react'

const Formvalidation = () => {
    const [Email,setEmail]=useState("")
    const [Password,setPassword]=useState("")
    function handleSubmit(e){
        e.preventDefault();
        if(Email ==="" && Password ===""){
            alert("! Email and Password Required")
            return; 
        }
    else{
        alert("! Both required")
        return;
    }
     
    }
  return (
    <div>
      <h1>form Validation</h1>
      <form>
        <input type='text' placeholder='Enter your email' value={Email}
        onChange={(e)=>setEmail(e.target.value)}
        /><br/>
        <input type='text' placeholder='Enter your password' value={Password}
        onChange={(e)=>setPassword(e.target.value)}
        />
        <button onClick={handleSubmit}>Submit </button>
      </form>
      
    </div>
  )
}

export default Formvalidation
