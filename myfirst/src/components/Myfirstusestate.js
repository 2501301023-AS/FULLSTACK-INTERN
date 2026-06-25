import React, { useEffect, useState } from 'react'

const Myfirstusestate = () => {
    // const[count,setcount]=useState(0);
     const[users,setUsers]=useState([])
    useEffect(()=>{
        fetch("https://dummyjson.com/products")
        .then((res)=>res.json())
        .then((data)=>setUsers(data.products.name)
        )
    },[])
  return (
  <div>
    <h1>User data</h1>
    {
       users.map((user)=>(
            <div
                key={user.id}>
                    <h3>{user.id}</h3>
                    <p>{user.name}</p>
                    <p>{user.email}</p>
                    </div>
        ))
    }
    {/* <h1>count:{count}</h1>
    <button onClick={()=>setcount(count+1)}>Incresase</button>
      <button onClick={()=>setcount(count-1)}>decrease</button> */}

    </div>
  )
}

export default Myfirstusestate;
