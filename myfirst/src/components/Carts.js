import React from 'react'

function Carts (props)  {
  return (
    <div style={{border:"20px solid red",borderRadius:"20px",display: "flex", justifycontent: "center",
  alignitems: "center",
  height: "30vh",
  width:"40vw",
  padding:"auto " }}>
    
        <img src={props.image} alt=""/>
        <p>{props.name}</p>
        <p>{props.price}</p>
      </div>
  
  )
}

export default Carts
