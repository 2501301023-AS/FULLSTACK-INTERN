import React from 'react'

const Consoledata = () => {
  function handlechange(e){
    console.log(e.target.value);
  }
  return (
    <div>
      <input onChange={handlechange} />
   
    </div>
  )
}

export default Consoledata;
