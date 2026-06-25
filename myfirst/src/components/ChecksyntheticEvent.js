import React from 'react'

const ChecksyntheticEvent = () => {
    function handleclick(event){
        console.log(event.target);
    }
  return (
    <div>
      <button onClick={handleclick}>Click</button>
    </div>
  )
}

export default ChecksyntheticEvent
